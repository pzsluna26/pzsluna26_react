import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import getcode from "./getcode.json";

export default function FcstList() {
  //get방식(url키,값)
  const [sparams] = useSearchParams();

  const gubun = sparams.get("gubun");
  const dt = sparams.get("dt");
  const area = sparams.get("area");
  const x = sparams.get("x");
  const y = sparams.get("y");

  const ops = getcode.filter((item) => item["예보구분"] === `${gubun}예보`);

  // 1. 드롭다운에서 고른 항목(category 이름)을 저장
  const [selectedItem, setSelectedItem] = useState("");
  // 2. 전체 예보 데이터 저장 => 2-1. fech 실행 하면서 setFcstData에 저장하기
  const [fcstData, setFcstData] = useState([]);
  // 3. 드롭다운에서 선택된 항목(category)에 해당하는 데이터만 저장 => 3-1. 드롭다운 선택 이벤트 처리
  const [selectedTdata, setSelectedTdata] = useState([]); // UI에 사용

  const getDataFetch = async () => {
    const apikey = import.meta.env.VITE_DATA_API;
    let baseUrl;

    if (gubun === "초단기") {
      baseUrl =
        "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?";
    } else {
      baseUrl =
        "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?";
    }

    let url = `${baseUrl}serviceKey=${apikey}&pageNo=1&numOfRows=1000&dataType=json`;
    url += `&base_date=${dt.replaceAll("-", "")}&base_time=${
      gubun === "초단기" ? "0600" : "0500"
    }`; // 0630 -> 0600 으로 변경, 초단기 예보 시간 맞춤
    url += `&nx=${x}&ny=${y}`;

    try {
      const resp = await fetch(url);
      const data = await resp.json();
      // 2-1. 전체 예보 데이터 저장
      // 데이터 형식이 올바른지 체크 (초단기예보 서울 외에도 다른 지역 문제 방지)
      const items = data?.response?.body?.items?.item || [];
      setFcstData(items);
    } catch (error) {
      console.error("API 호출 오류:", error);
      setFcstData([]); // 오류시 빈 배열 초기화
    }
  };

  useEffect(() => {
    if (gubun && dt && x && y) {
      getDataFetch();
    }
  }, [gubun, dt, x, y]);


  // 3-1. 드롭다운 선택 시 해당 category만 추출
  // ref안쓰고 e로 가능
  const handleSelect = (e) => {
    // 사용자가 고른 항목(category 이름)
    const selected = e.target.value;
    // 상태 업데이트
    setSelectedItem(selected);

    // 저장한 전체데이터 중에서, 선택한 항목에 맞는 데이터만 저장
    const filtered = fcstData.filter(
                                      (item) => item.category === selected  
                                    ).map((item) => ({
                                    ...item,
                                    fcstValue: getFcstValueName(item.category, item.fcstValue),
                                    }));
    setSelectedTdata(filtered);
  };


  // 4. 항목값 getcode.json과 매핑 
  // 4-1. 값설명 저장(하늘상태/강수량)
  const skyUnit = {
    "1": "맑음(☀)",
    "3": "구름많음(☁)",
    "4": "흐림(⛅)",
  };
  const ptyUnit = {
    "0": "없음(0)",
    "1": "비(💧)",
    "2": "비/눈(💧/❄)",
    "3": "눈(❄)",
    "4": "소나기(☂)",
    "5": "빗방울(☔)",
    "6": "빗방울눈날림(☔/☃)",
    "7": "눈날림(☃)",
  };

  // 4-2. 매핑
  const getFcstValueName = (category, value) => {
    if (category === "SKY") {
      return skyUnit[value] || value;
    } else if (category === "PTY") {
      return ptyUnit[value] || value;
    } else {
      // 그 외는 그냥 원래 값 + 단위 붙여서 반환
      const matched = ops.find((item) => item["항목값"] === category);
      return value + (matched?.["단위"] ? ` ${matched["단위"]}` : "");
    }
  };

  
  return (
    <div className="mt-10 w-9/10 flex flex-col items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="text-2xl font-bold">
          {area} {gubun}예보 ({dt.replaceAll("-", ".")})
        </div>
        <select
          onChange={handleSelect}
          className="bg-gray-50 border mx-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          value={selectedItem}
        >
          <option value="">-- 항목 선택 --</option>
          {ops.map((item) => (
            <option key={item["항목값"]} value={item["항목값"]}>
              {`${item["항목명"]} [${item["항목값"]}]`}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full mt-5">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs uppercase bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-center">항목명</th>
              <th className="px-6 py-3 text-center">예측일자</th>
              <th className="px-6 py-3 text-center">예측시간</th>
              <th className="px-6 py-3 text-center">예측값</th>
            </tr>
          </thead>
          <tbody>
            {selectedTdata.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  데이터 없음
                </td>
              </tr>
            ) : (
              selectedTdata.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b hover:bg-gray-50 even:bg-gray-50"
                >
                  <td className="px-6 py-3 text-center">{item.category}</td>
                  <td className="px-6 py-3 text-center">{item.fcstDate}</td>
                  <td className="px-6 py-3 text-center">{item.fcstTime}</td>
                  <td className="px-6 py-3 text-center">{item.fcstValue}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
