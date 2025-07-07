import { useEffect, useState } from "react";
import TailButton from "../component/TailButton";

export default function TrafficNav({ title, c, selc1, setSelC1 }) {
  const [tag, setTag] = useState([]);

  useEffect(() => {
    if (!c || c.length === 0) return;

    let tm = c.map((item) => (
      <TailButton
        key={item}
        caption={item}
        color={"blue"} // 선택된 버튼 색 다르게 표시
        onClick={() => setSelC1(item)} // 클릭 시 선택값 설정
      />
    ));
    setTag(tm);
  }, [c, selc1, setSelC1]);

  return (
    <div className="flex items-center justify-between">
      <div className="font-bold text-gray-500">{title}</div>
      <div className="flex flex-wrap gap-2">{tag}</div>
    </div>
  );
}
