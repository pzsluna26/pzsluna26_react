import {useEffect, useState} from "react"
import TailButton from "../component/TailButton"

export default function MyEffect() {
    const [cnt, setCnt] = useState(0);
    //컴포넌트 생성시 한번
    useEffect(()=>{
        console.log('useEffect[]:',cnt)
    },[]);
    //
    useEffect(()=>{
        console.log('useEffect[cnt]:',cnt)
    },[cnt]);
    //아무것도 없는거
    useEffect(()=>{
        console.log('useEffect:',cnt)
    });

    const handleUp=()=>{
        setCnt(cnt+1);
        console.log("handleUp",cnt)
    }
    const handleDown=()=>{
        setCnt(cnt-1);
        console.log("handleDown",cnt)
    }
  return (
    <div class = "text-2x1 font-bold mt-40">
      MyEffect cnt : {cnt}
      <TailButton caption="👍"
                  color = "orange"
                  onClick={handleUp}/>
    <TailButton caption="😒"
                  color = "blue"
                  onClick={handleDown}/>
    </div>
  )
}
