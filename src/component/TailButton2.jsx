export default function TailButton({ caption, color, onClick }) {
  const bg = {
    blue: "bg-blue-200",
    orange: "bg-orange-200",
    lime: "bg-lime-200",
  };

  return (
    <button
      className={`rounded-xl p-2 w-full mb-1
                  hover:cursor-pointer hover: font-bold text-gray-600 
                  ${bg[color] || "bg-gray-500"}`}
      onClick={onClick}
    >
      {caption}
    </button>
  );
}
