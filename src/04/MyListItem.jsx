import { useState } from "react";

export default function MyListItem({title,imgUrl,content}) {
  // state [세터]변수로 바꿔야함 -> let cnt = 0;
  const [cnt, setCnt] = useState(0);
  const [cntt, setCntt] = useState(0);

  const handleUp=()=>{
    setCnt(cnt + 1);
    console.log(title, cnt)
  }
   const handleDown=()=>{
    (cnt -1) < 0 ? setCnt(0) : setCnt(cnt -1);
    // 마이너스가 안되게 만들기 
    setCntt(cntt + 1);
    console.log(title, cntt)
  }
    // const title = "CSS";
    // const imgUrl ="./img/css.png";
    // const content = "Cascading Style Sheets(CSS)는 HTML이나 XML(XML의 방언인 SVG, XHTML 포함)로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어"
  return (
    <div className="w-full h-50 
                    flex justify-start items-start bg-white
                    border-gray-400 border rounded-xl overflow-hidden ">
      <div className="w-1/4 h-full flex items-start justify-start
                   ">
            <img src={imgUrl}/>
      </div>
      <div className="w-3/4 h-full flex items-start flex-col
                    justify-between
                    p-5">
            <div className="w-full flex flex-col justify-start items-start">
                <h1>{title}</h1>
                <p className="w-full flex flex-col justify-start items-start">{content}</p>
          
            </div>
      <div className="w-full flex justify-end items-center mt-4 space-x-6">
            {/* 좋아요 */}
            <span className="cursor-pointer hover:text-red-500" onClick={handleUp}>
              ❤ 좋아요 <span className="text-xl font-bold ml-1">{cnt}</span>
            </span>

            {/* 싫어요 */}
            <span className="cursor-pointer hover:text-blue-500" onClick={handleDown}>
              😒 싫어요 <span className="text-xl font-bold ml-1">{cntt}</span>
            </span>
      </div>
           
      </div>
    </div>
  )
}
