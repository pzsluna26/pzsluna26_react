

export default function TailButtonLine({caption, color, onClick}){
    const bg = {
    blue: "bg-blue-300",
    orange: "bg-orange-300",
    lime: "bg-lime-300"
    };


return (
    <button
      className={`flex p-4 rounded-xl mx-2
                  hover:cursor-pointer hover:font-bold text-black 
                  ${bg[color]}`}
      onClick={onClick}
    >
      {caption}
    </button>
  );
}
