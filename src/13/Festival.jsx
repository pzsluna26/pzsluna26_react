import { useState, useEffect, useRef } from "react";
import TailCard from "../component/TailCard";

export default function Festival() {
  const [tdata, setTdata] = useState([]);
  const [opTag, setOpTag] = useState([]);
  const selRef = useRef();
  
// 1. 컴포넌트가 처음 렌더링될 때, useEffect를 통해 축제 데이터를 API에서 비동기로 가져옴
useEffect(()=>{
  getDataFetch();
},[]);

// 2. API 응답(JSON)에서 축제 리스트를 추출하여 상태 변수 `tdata`에 저장
const getDataFetch = async() => {
  const apikey = import.meta.env.VITE_DATA_API;
  const baseUrl = 'https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?'
  const url = `${baseUrl}serviceKey=${apikey}&numOfRows=41&resultType=json`

  const resp = await fetch(url)
  const data = await resp.json();

  setTdata(data.getFestivalKr.item);
}
// 3. 두 번째 useEffect는 `tdata`가 바뀔 때 실행됨 (즉, 데이터가 로드된 후)
useEffect(()=>{
    if(tdata.length == 0) return;

    // 4. 축제 리스트에서 구군명(`GUGUN_NM`)만 뽑아온 뒤, 중복 제거 및 정렬
    let tm = tdata.map(item => item["GUGUN_NM"]);
    tm = [...new Set(tm)].sort();

    // 5. 각 구군명을 `<option>` 엘리먼트로 변환하여 `opTag`에 저장 → 드롭다운에 표시됨
    tm = tm.map(gugun => <option key={gugun} value={gugun}>
                          {gugun}
                        </option>);
    setOpTag(tm)
},[tdata]);

// 6. 사용자가 드롭다운에서 지역을 선택하면 `onChange={handleShow}`가 실행됨
const handleShow = () => {
  console.log(GiShieldReflect.current.value)
  let tm = tdata.filter(item => item["GUGUN_NM"] == selRef.current.value);
  tm = tm.map(item => <TailCard key = {item.UC_SEQ}
                                imgurl = {item.MAIN_IMG_THUMB}
                                title = {item.MAIN_TITLE.split('(')[0]}
                                subtitle = {item.TITLE}
                                content = {item.MAIN_PLACE}
                                />);
}

  return (
    <div className="flex mt-8 h-30 flex flex-col justify-center items-center border border-gray-300 p-10 rounded-xl">
      <h2 className="font-bold mb-2 text-gray-700">부산축제정보</h2>
      <form>
        {/* 7. `handleShow` 함수에서는 드롭다운 선택값(`selRef.current.value`)을 기준으로 */}
        <select ref={selRef} 
                onChange={hadleShow}
                className="border border-gray-300">
                <option value="">---지역선택---</option>
                 {opTag}
        </select>
      </form>

      {loading && <p>로딩중...</p>}
      {error && <p className="text-red-500">{error}</p>}

    </div>
  );
}


