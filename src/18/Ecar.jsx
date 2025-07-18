import TailButton from "../component/TailButton";
import TailSelect from "../component/TailSelect";
import TailCard from "../component/TailCard";

import zcode from "../18/code/zcode.json";
import kind from "../18/code/kind.json";
import zscode from "../18/code/zscode.json";

import { useEffect, useRef, useState } from "react";

export default function Ecar() {

  // select box ref 
  const zcodeRef = useRef();
  const zscodeRef = useRef();
  const kindRef = useRef();

  // 동 지역 변수
  const [zs, setZs] = useState([]);
  const [tdata, setTdata] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const perPage = 12;

  // 지역 선택 시, 하위 지역 동(zscode) 셋팅
  const handleZcode = () => {
    console.log("선택된 지역:", zcodeRef.current.value);
    const selectedCode = zcodeRef.current.value;
    if (selectedCode === "") {
      setZs({});
    } else {
      setZs(zscode[selectedCode] || {});
    }
    
  };

  // 지역 동 선택 시 로그만 찍음 (실제로는 필요없음)
  const handleZscode = () => {
    console.log("선택된 지역동:", zscodeRef.current.value);
  };

  // 충전소 구분 선택 시 로그
  const handleKind = () => {
    console.log("선택된 충전소 구분:", kindRef.current.value);
  };

  // 검색 실행 + alert 체크
  const getDataFetch = async (cf) => {
    const zcodeVal = zcodeRef.current.value;
    const zscodeVal = zscodeRef.current.value;
    const kindVal = kindRef.current.value;

    if (kindVal && !zcodeVal) {
      alert("지역을 선택하세요.");
      zcodeRef.current.focus();
      return;
    }

    if (zcodeVal && (!zscodeVal || !kindVal)) {
      alert("지역 동과 충전소 구분을 모두 선택하세요.");
      if (!zscodeVal) zscodeRef.current.focus();
      else kindRef.current.focus();
      return;
    }

    // getDataFetch
    // 위 조건 다 통과한 경우 → fetch 실행
    const apikey = import.meta.env.VITE_DATA_API;
    const baseUrl = "http://apis.data.go.kr/B552584/EvCharger/getChargerInfo?";

                                                          //12개씩         //내용
    const url = `${baseUrl}serviceKey=${apikey}&numOfRows=${perPage}&pageNo=1&dataType=JSON`;
    console.log(url)

    // url 조건 체크(요청코드.워드파일 참고)
    if(zcodeRef.current.value != ""){
        url = `${url}&zcode=${zcodeRef.current.value}`
    }
    if(zscodeRef.current.value != ""){
        url = `${url}&zscode=${zscodeRef.current.value}`
    }
    if(kindRef.current.value != ""){
        url = `${url}&kindcode=${kindRef.current.value}`
    }
    try {
      const resp = await fetch(url);
      const data = await resp.json();

      // 1. useState로 API 응답 데이터를 저장할 상태 변수 만들기 (예: tdata)
      // 2. getDataFetch 함수 안에서 fetch 후 setTdata로 데이터 저장하기
      setTdata(data.items.item);
      setTotalCount(data.totalCount);

      console.log("받은 데이터:", data);
    } catch (err) {
      console.error("API 요청 오류:", err);
      alert("API 요청 중 오류가 발생했습니다.");
    }
  };

  //useEffect
  useEffect(()=>{
    console.log("totalCount",totalCount)
    console.log("tdata",tdata)
  },[totalCount, tdata]);


  return (
    <div className="flex flex-col mt-10">
      <div className="flex gap-4">
        <TailSelect
          dText="지역 선택"
          selRef={zcodeRef}
          handleSel={handleZcode}
          opv={Object.keys(zcode)}
          opt={Object.values(zcode)}
        />
        <TailSelect
          dText="지역 동 선택"
          selRef={zscodeRef}
          handleSel={handleZscode}
          opt={Object.keys(zs)}
          opv={Object.values(zs)}
        />
        <TailSelect
          dText="충전소 구분 선택"
          selRef={kindRef}
          handleSel={handleKind}
          opv={Object.keys(kind)}
          opt={Object.values(kind)}
        />

        <TailButton
          color="blue"
          caption="검색"
          onClick={()=>getDataFetc(1)}
          //첫번째 페이지
        />
      </div>
    </div>
  );
}
