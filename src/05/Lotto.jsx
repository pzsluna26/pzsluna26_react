import TailBall from "../component/TailBall" 
import TailButton from "../component/TailButton"
import {useState} from "react"

export default function Lotto() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6]) // 초기 번호

  const handleClick = () => {
    const nums = generateLottoNumbers()
    setNumbers(nums)
  }

  const generateLottoNumbers = () => {
    const arr = []
    while (arr.length < 6) {
      const rand = Math.floor(Math.random() * 45) + 1
      if (!arr.includes(rand)) arr.push(rand)
    }
    return arr.sort((a, b) => a - b)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <div className="flex gap-2">
        {numbers.map((n, idx) => (
          <TailBall key={idx} n={n} />
        ))}
      </div>
     
        <TailButton caption="로또번호생성" color="blue" onHandle={handleClick} />
     
    </div>
  )
}
