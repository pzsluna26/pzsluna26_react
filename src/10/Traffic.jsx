import {useState, useEffect} from "react"
import TrafficNav from "./TrafficNav";

export default function Traffic() {
  //fetch data
  const [tdata, setTdata]=useState([]);
  
  //대분류
  const[c1, setC1] =useState([]);

  //선택대분류
  const[selC1, setSelC1] = useState();

  //사고유형d


                    //중분류
  const [c2, setC2] = useState([]);
                    //선택중분류
  //const[selC2, setSelC2] = useState();


  //fetch 함수
  const getFetchData = async() =>{
    const baseUrl='https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?'
    const url = `${baseUrl}page=1&perPage=18&serviceKey=${import.meta.env.VITE_DATA_API}`
    console.log(url)

    const resp = await fetch(url);
    const data = await resp.json();
    setTdata(data.data);
    console.log(data.data)

  }

  //컴포넌트가 시작되면 fetch
  //리엑트에서 컴포넌트가 만들어졌을때 맨 처음 한번 실행해줌
  useEffect(()=>{
    getFetchData();
  },[]);
  
  //전체 데이터가 fetch되었을때 대분류 생성
  useEffect(()=>{
    if(tdata.length == 0) return;

    //18개 다 가져오기
    console.log(tdata)

    // 사고유형대분류 만 가져오기
    let tm = tdata.map(item => item['사고유형대분류'])
    console.log(tm)

   // 대분류에서 중복 제거하기(set)
   let uniqueTm = [...new Set(tm)];
   console.log(uniqueTm);
   setC1(uniqueTm);
  },[tdata]);

    //대분류가 선택되었을때
    useEffect(()=>{
        console.log("선택 대분류: " ,selC1)
        if(!tdata || !c1 || !selC1) return;

        // 필터링해서 중분류만 뽑기
        let filtered = tdata.filter(item => item['사고유형대분류'] === selC1);
        let tm = filtered.map(item => item['사고유형중분류']);
        let uniqueTm = [...new Set(tm)];
        setC2(uniqueTm);
    },[selC1])

    //사고유형 생성
    useEffect(()=>{
      console.log("사고유형: ", c2)
    }, [c2])

                    //중분류만 가져오기
                    //let tm2 = tdata.map(item => item['사고유형중분류'])
                    //console.log(tm2)

                    //중분류에서 중복 제거하기(set)
                    //let uniqueTm2 = [...new Set(tm2)];
                    //console.log(uniqueTm2);
                    //setC2(uniqueTm2);

                    //중분류가 선택되었을때
                    //useEffect(()=>{
                      //console.log("선택 중분류: ", selC2)})
                      //if(!tdata || !c2 || !selC2) return;
                      //},[selC2])
  
  return (
    <div className="w-9/10 mt-50 ">
      {c1 && <TrafficNav title="교통사고 대분류" 
                        c={c1}
                        selc={selC1}
                        setSelC1={setSelC1}/>}
      {c2 && <TrafficNav title="사고유형" 
                        c={c2}
                        selc={selC1}
                        setSelC1={setSelC1}/>}                  

    </div>
  )
}
