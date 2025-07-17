import TailButton from "../component/TailButton"
import { useAtom } from "jotai"
import { cntAtom, cntAtom2 } from "./CntAtom"
export default function MyDiv3() {
  const [n, setN] = useAtom(cntAtom) ;
  // "나는 cntAtom이라는 전역 상태(atom)를 사용해서,
  // n이라는 변수에 그 값을 넣고, setN이라는 함수로 그 값을 바꿀 수 있게 만들었어."

  return (
    <div className="mb-3 w-full h-full bg-blue-300
                    flex flex-col justify-center items-center
                    p-3 text-2xl
                    text-white font-bold">
      <div className="w-full pt-1 h-2/5 flex items-start justify-start font-bold text-xl text-white">
        MyDiv3
      </div>                
      <div className="w-7/10 h-4/5 grid grid-cols-2">
      <TailButton  caption = "증가"
                            color = "white" 
                            onClick = {() => setN(n + 1)} />
      <TailButton  caption = "감소"
                            color = "white" 
                            onClick = {() => setN(n - 1)} />
      </div>
    </div>
  )
}