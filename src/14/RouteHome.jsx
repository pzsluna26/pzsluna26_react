import { Link , useNavigate } from "react-router-dom"
import TailButton2 from "../component/TailButton2"
export default function RouteHome() {
  const navigate = useNavigate() ;
  return (
    <div className="w-full mt-5 flex flex-col justify-center items-center">
      <h1 className="mb-10 text-2xl font-bold text-center">RouteHome</h1>
      
      
      <div className="grid grid-cols-2 gap-3">
        <div>
      <ul className="w-full h-full">
        <Link to="/p1/사과/🍎">
          <li className="p-7.5 rounded-xl  bg-pink-100
                  hover:cursor-pointer hover: font-bold text-gray-600 
                  bg-gray-500 mb-2">
            사과 🍎
          </li>
        </Link>
        <Link to="/p1/당근/🥕">
          <li className="p-7.5 rounded-xl  bg-pink-100
                  hover:cursor-pointer hover: font-bold text-gray-600 
                  bg-gray-500 mb-2">
            당근 🥕
          </li>
        </Link>
        <Link to="/p1/바나나/🍌">
          <li className="p-7.5 rounded-xl bg-pink-100
                  hover:cursor-pointer hover: font-bold text-gray-600 
                  bg-gray-500 mb-1">
            바나나 🍌
          </li>
        </Link>
      </ul>
      </div>
      <div className="w-full h-full grid grid-cols-1 gap-1 " >
        <TailButton caption="사과 🍎"
                        color="lime"
                        onClick={() => navigate('/p2?item1=사과&item2=🍎')} />
        <TailButton caption="당근 🥕"
                        color="lime"
                        onClick={() => navigate('/p2?item1=당근&item2=🥕')} />
        <TailButton caption="바나나 🍌"
                        color="lime"
                        onClick={() => navigate('/p2?item1=바나나&item2=🍌')} />
      </div>
      </div>
    </div>
  )
}