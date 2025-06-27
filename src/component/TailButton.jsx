export default function TailButton({ caption, color, onClick }) {
  const bg = {
    blue: "bg-blue-800",
    orange: "bg-orange-800",
    lime: "bg-lime-800",
  };

  return (
    <button
      className={`p-4 rounded-xl mx-2
                  hover:cursor-pointer hover:font-bold text-white
                  ${bg[color] || "bg-gray-500"}`}
      onClick={onClick}
    >
      {caption}
    </button>
  );
}
