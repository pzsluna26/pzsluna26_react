import { FaAngleRight } from "react-icons/fa6";

export default function MyDiv3({ x, y, z }) {
  return (
    <div className="w-2/3 h-4/5 bg-blue-400 flex justify-start items-center
                    text-white font-bold p-10 text-2xl flex-col">
      {x} <FaAngleRight className="text-4xl" />
      {y} <FaAngleRight className="text-4xl" />
      {z}
    </div>
  );
}
