import TailButton from "../component/TailButton"
import TailSelect from "../component/TailSelect"
import zcode from "./code/zcode.json"
import kind from "./code/kind.json"
import zscode from "./code/zscode.json"
import {useRef} from "react";
import {useState} from "react"
// import TailCard from "TailCard"


export default function Ecar() {
    // select box ref
    const zcodeRef = useRef();
    const zscodeRef = useRef();
    const kidRef = useRef();

    // 동,지역 변수 (alert창)
    const [zs, setZs] = useState([]);

    // select box handle 함수
    const handleZcode = () => {
        console.log("선택된 지역:", zcodeRef.current.value);
        if(zcodeRef.current.value == ""){
            alert("지역을 선택해주세요.");
            zcodeRef.current.focus();
            setZs[()];
            return;
        }

        if (zscodeRef.current.value == "" &&
            kidRef.current.value == "") {
                alert("지역 동이나 충전소 구분을선택하세요");
                zscodeRef.current.focus();
            }
            console.log(zcodeRef.current.value)
    }
    const handleZscode = () => {
        console.log("선택된 지역동:", zscodeRef.current.value);
        setZs(zscode[zscodeRef.current.value])
        
    }
    const handleKind = () => {
        console.log("선택된 충전소 구분:", kidRef.current.value);
        console.log(kidRef.current.value)
        
    }
    
    // getDataFetch 함수
    const getDataFetch = async() => {
    const apikey = import.meta.env.VITE_DATA_API;
    const baseUrl = 'http://apis.data.go.kr/B552584/EvCharger/getChargerInfo?'
    const url = `${baseUrl}serviceKey=${apikey}&numOfRows=10&pageNo=1&dataType=JSON`

    const resp = await fetch(url)
    const data = await resp.json();

    setTdata(data.getFestivalKr.item);
    }
    
    //


  return (
    <div className="felx mt-30">
        <div className="flex">
        <TailSelect dText="지역 선택"
                    selRef = {zcodeRef}
                    handleSel = {handleZcode}
                    opv = {Object.keys(zcode)}
                    opt = {Object.values(zcode)}/>
        <TailSelect dText="지역 동 선택"
                    selRef = {zscodeRef}
                    handleSel = {handleZscode}
                    // opt,opv 바꿔주면 key,value값 바뀜
                    // zs가 있으면 - 없으면 -
                    opt = {zs ? Object.keys(zs) : []}
                    opv = {zs ? Object.values(zs) : []}/>
        <TailSelect dText={"충전소 구분 선택"}
                    selRef = {kidRef}
                    handleSel = {handleKind}
                    opv = {Object.keys(kind)}
                    opt = {Object.values(kind)}/>
    
        <TailButton color = "blue"
                    caption = "검색"
                    onClick={getDataFetch}
        />
         </div>
    </div>
  )
}
