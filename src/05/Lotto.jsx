import TailBall from "../component/TailBall" 
import TailButton from "../component/TailButton"
export default function Lotto() {
  const handleClick = () => {
    console.log("lotto")
  }
  return (
    <div className= "flex flex-col items-center justify-center min-h-screen">
      <div className="flex">
        <TailBall n="2" />
        <TailBall n="34" />
        <TailBall n="45" />
        <TailBall n="23" />
        <TailBall n="11" />
        <TailBall n="9" />
      </div>
         <TailButton caption="로또번호생성"
                  color="blue"
                  onHandle={handleClick}/>
    </div>
  )
}