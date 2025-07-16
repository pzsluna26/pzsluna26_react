import MyDiv1 from "./MyDiv1"
import { useState, useEffect} from "react"
export default function MyDivMain() {
  const [ n, setN ] = useState(0) ;
  const [ n2, setN2 ] = useState(0) ;

  useEffect(() => {
    setN2(n * 2)
  } , [n]) ;
  return (
    <div className="mt-20 w-2/3 h-4/5 bg-amber-900
                    flex flex-col items-center justify-center
                    p-5 text-2xl
                    text-white font-bold">
      <div className="w-full flex justify-start p-5">
      n={n}, n2={n2}
      </div>
      <MyDiv1 n={n} setN={setN} />
    </div>
  )
}