import kind from "./code/kind.json"
import zcode from "./code/zcode.json"
import zscode from "./code/zscode.json"
import stat from "./code/stat.json"

import TailSelect from "../component/TailSelect"
import TailButton from "../component/TailButton"
import TailCard3 from "../component/TailCard3"
import TailPageNation from "../component/TailPageNation"

import { useRef, useState, useEffect } from "react"
export default function EvCar2() {



  //동 지역 변수
  const [zs, setZs]  = useState([]);
  const [tdata, setTdata] = useState([]) ;
  
  //충전기상태 변수
  const [cs, setCs] = useState([]);

  //페이지 변수
  const [totalCount, setTotalCount] = useState(0) ;
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const perPage = 12 ;
  const totalPage = Math.ceil(totalCount / perPage);

  //select box ref 
  const kindRef = useRef() ;
  const zcodeRef= useRef() ;
  const zscodeRef = useRef();

  // console.log(Object.keys(zcode))

  //datafetch 함수 
  const getDataFetch = async(cpage) => {
    setLoading(true);     // 로딩 시작
    setError(null);       // 에러 초기화

    if (zcodeRef.current.value == "") {
      alert("지역을 선택하세요.") ;
      zcodeRef.current.focus() ; 
      setZs([]) ;
      return ;
    }

    if (zscodeRef.current.value == "" && kindRef.current.value == "") {
      alert("지역 동이나 충전소 구분을 선택하세요.") ;
      zscodeRef.current.focus()
      return ;
    }

    const apikey = import.meta.env.VITE_DATA_API ;
    const baseUrl = 'http://apis.data.go.kr/B552584/EvCharger/getChargerInfo?' ;

                                                          //12개씩         //내용
    let url = `${baseUrl}serviceKey=${apikey}&numOfRows=${perPage}&pageNo=${cpage}&dataType=JSON`;
        
    if (zcodeRef.current.value != "") {
      url = `${url}&zcode=${zcodeRef.current.value}`
    }
    

    if (zscodeRef.current.value != "") {
      url = `${url}&zscode=${zscodeRef.current.value}`
    }

    if (kindRef.current.value != "") {
      url = `${url}&kind=${kindRef.current.value}`
    }
 
    console.log("요청 URL:", url);

    try{
      
      //api 호출
      const resp = await fetch(url) ;
      const data = await resp.json() ; 


      console.log("API 응답:", data);
      console.log("아이템 목록:", data.items.item);


      setTotalCount(data.totalCount);
      setTdata(data.items.item) ;
      setCurrentPage(cpage); // 페이지 업데이트
    } catch (err) {
      alert("데이터를 불러오는 데 실패했습니다.");
    } finally {
      setLoading(false); // 로딩 종료
    }
  }

  //select box handel 함수
  const handleKind = () => {
    if (zcodeRef.current.value == "") {
      alert("지역을 선택하세요.") ;
      zcodeRef.current.focus() ;
      kindRef.current.value = "" ;
      return ;
    }
    //console.log(zscodeRef.current.value)
  } 

  const handleZcode = () => {
    // console.log(zcodeRef.current.value)
    setZs(zscode[zcodeRef.current.value])
  } 

  const handleZscode = () => {
    //console.log(zscodeRef.current.value)
  } 

  //useEffect 
  useEffect(() => {
    // console.log("totalCount" , totalCount)
    // console.log("tdata", tdata)
  } , [totalCount, tdata]);

  useEffect(() => {
  setCs(stat); // 최초 로딩 시 상태 설명 데이터 저장
}, []);

  return (
    <div className="flex flex-col mt-10 justfy-center items-center">
      <div className="flex ">
        <TailSelect selRef = {zcodeRef}
                    handleSel ={handleZcode} 
                    dText = "지역 선택" 
                    opv = {Object.keys(zcode)}
                    opt = {Object.values(zcode)}  />
        <TailSelect selRef = {zscodeRef}
                    handleSel ={handleZscode} 
                    dText = "지역 동 선택" 
                    opt = {zs ? Object.keys(zs) : []}
                    opv = {zs ? Object.values(zs): []}  />
        <TailSelect selRef = {kindRef}
                    handleSel ={handleKind} 
                    dText = "충전소 구분" 
                    opv = {Object.keys(kind)}
                    opt = {Object.values(kind)}  />
        <TailButton caption = "검색"
                    color = "blue"
                    onClick ={() => getDataFetch(1)}/>
      </div>
    {/* 로딩 */}
      {loading && <p className="text-center text-gray-600">데이터 불러오는 중...</p>}

      {/* 카드 목록 */}
      {!loading && tdata.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-4">
          {tdata.map((item) => (
            <TailCard3
              key={`${item.statId}-${item.chgerId}`}
              title={item.statNm}
              subtitle={`${item.bnm} (${item.addr}, Tel.${item.busiCall})`}
              content={`${cs[item.stat]}`}
              
            />
          ))}
        </div>
      )}

      {/* 결과 없을 때 */}
      {!loading && tdata.length === 0 && (
        <p className="text-gray-500 mt-6">검색 결과가 없습니다.</p>
      )}

      {/* 페이지네이션 */}
      {!loading && totalPage > 1 && (
        <TailPageNation
          currentPage={currentPage}
          totalPage={totalPage}
          onPageChange={getDataFetch}
        />
      )}
    </div>
  )
}