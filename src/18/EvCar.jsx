import kind from "./code/kind.json"
import zcode from "./code/zcode.json"
import zscode from "./code/zscode.json"

import TailSelect from "../component/TailSelect"
import TailButton from "../component/TailButton"
import TailCard from "../component/TailCard"
import TailPageNation from "../component/TailPageNation"

import { useRef, useState, useEffect } from "react"
export default function EvCar() {
  //동 지역 변수
  const [zs, SetZs]  = useState([]);
  const [tdata, setTdata] = useState([]) ;
  const [totalCount, setTotalCount] = useState(0) ;
  const perPage = 12 ;

  //select box ref 
  const kindRef = useRef() ;
  const zcodeRef= useRef() ;
  const zscodeRef = useRef();

  // console.log(Object.keys(zcode))

  //datafetch 함수 
  const getDataFetch = async(cpage) => {
    if (zcodeRef.current.value == "") {
      alert("지역을 선택하세요.") ;
      zcodeRef.current.focus() ; 
      SetZs([]) ;
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

    //api 호출
    const resp = await fetch(url) ;
    const data = await resp.json() ; 

    setTotalCount(data.totalCount);
    setTdata(data.items.item) ;

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
    SetZs(zscode[zcodeRef.current.value])
  } 

  const handleZscode = () => {
    //console.log(zscodeRef.current.value)
  } 

  //useEffect 
  useEffect(() => {
    // console.log("totalCount" , totalCount)
    // console.log("tdata", tdata)
  } , [totalCount, tdata]);

  return (
    <div className="flex mt-10">
      <div className="flex gap-4">
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
    </div>
  )
}