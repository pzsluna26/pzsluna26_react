import { FaAngleRight } from "react-icons/fa6";
import MyDiv3 from './MyDiv3'; // MyDiv3 컴포넌트 import

export default function MyDiv2(props) {
 
  return (
    <div className="w-2/3 h-[60%] bg-blue-300 flex justify-start
                    text-white font-bold p-10 text-2xl items-center flex-col">
      <div className="w-[90%] flex justify-start mb-5">
        {props.a} <FaAngleRight className="text-4x1"/> {props.b}
      </div>
      <MyDiv3 x={props.a} y={props.b} z={props.c}/>
    </div>
  );
}
