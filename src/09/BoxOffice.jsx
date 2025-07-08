import { useState, useEffect, useRef } from "react";

export default function BoxOffice() {
  const [tData, setTdata] = useState([]);
  const [type, setType] = useState("r1");
  const yRef = useRef();

  // 1. 날짜가 바뀔 때 호출되는 함수
  const getFetchData = async () => {
    // 1-2. .env 파일에서 API 키 가져오기
    const apikey = import.meta.env.VITE_MV_API;
    // 2. 입력된 날짜를 가져와 YYYYMMDD 형식으로 변환
    const dtRaw = yRef.current.value; // e.g. "2025-07-02"
    if (!dtRaw) return;
    const targetDt = dtRaw.replace(/-/g, "");

    // 3. API URL 구성
    const url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${targetDt}`;

    try {
      // 4. 데이터 fetch
      const resp = await fetch(url);
      const data = await resp.json();
      // 5. 성공 시 state 업데이트
      setTdata(data.boxOfficeResult.dailyBoxOfficeList);
    } catch (error) {
      console.error("박스오피스 API 호출 에러:", error);
      setTdata([]);
    }
  };

  // 6. type 변경에 따른 처리를 handleSubmit에서 연결해도 되고
  const handleSubmit = (e) => {
    e.preventDefault();
    getFetchData();
  };

  // 7. 컴포넌트 최초 렌더링 시 오늘 날짜로 자동 조회
  useEffect(() => {
    if (!yRef.current) return;
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const todayStr = `${yyyy}-${mm}-${dd}`;
    yRef.current.value = todayStr;
    getFetchData();
  }, []);

  return (
    <div className="mt-15">
      <form className="flex justify-end items-center gap-2 mb-4" onSubmit={handleSubmit}>
        <input
          ref={yRef}
          type="date"
          name="myDate"
          min="1900-01-01"
          max="2025-07-07"
          onChange={getFetchData}
          className="border border-gray-300 rounded p-2"
        />
        {/* <select value={type} onChange={(e) => setType(e.target.value)} className="border rounded p-2">
          <option value="r1">전체</option>
          <option value="r2">상업</option>
          <option value="r3">독립예술</option>
        </select> */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          조회
        </button>
      </form>

      <h2 className="m-6 text-2xl font-bold">일별 박스오피스</h2>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs uppercase bg-gray-100">
            <tr>
              <th className="px-6 py-3">순위</th>
              <th className="px-6 py-3">영화명</th>
              <th className="px-6 py-3">개봉일</th>
              <th className="px-6 py-3">일일 관객수</th>
              <th className="px-6 py-3">누적 관객수</th>
            </tr>
          </thead>
          <tbody>
            {tData.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  데이터 없음
                </td>
              </tr>
            ) : (
              tData
                .filter((item) => {
                  if (type === "r1") return true;
                  if (type === "r2") return item.rankOldAndNew === "NEW" || Number(item.rank) <= 10;
                  if (type === "r3") return item.rankOldAndNew === "OLD";
                  return true;
                })
                .map((item) => (
                  <tr key={item.movieCd} className="border-b hover:bg-gray-50 even:bg-gray-50">
                    <td className="px-6 py-3 text-center">{item.rank}</td>
                    <td className="px-6 py-3">{item.movieNm}</td>
                    <td className="px-6 py-3 text-center">{item.openDt}</td>
                    <td className="px-6 py-3 text-right">{item.audiCnt}</td>
                    <td className="px-6 py-3 text-right">{item.audiAcc}</td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
