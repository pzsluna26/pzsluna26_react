import TailButtonLine from "../component/TailButtonLine";
import { useState } from "react";

export default function MyToggleBox({ color, caption }) {
  const [flag, setFlag] = useState(false);

  const onClick = () => {
    setFlag(!flag); // 클릭 시 상태 반전
  };

  const bgColor = {
    blue: "bg-blue-100",
    orange: "bg-orange-100",
    lime: "bg-lime-100"
  };

  return (
    <div className={`${flag ? bgColor[color] : "bg-white"} 
                    rounded-xl flex mt-65 border mr-5 justify-center border-gray-300
                    items-center flex-col p-6 mb-10 transition duration-300`}>
      <div className="font-bold text-xl mb-6">{caption}</div>

      <TailButtonLine
        caption={`Toggle ${color}`}
        color={color}
        onClick={onClick}
      />
    </div>
  );
}
