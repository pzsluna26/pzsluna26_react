import { useState } from "react";
export default function MyListItem2 ({title, imgUrl, content}) {
  const [likeCnt, setLikeCnt] = useState(0);
  const [dislikeCnt, setDislikeCnt] = useState(0);

  const handleUp = () => {
    setLikeCnt(likeCnt+1);
    console.log(title,likeCnt)
  }
  const handleDown = () => {
    (dislikeCnt - 1) < 0 ? setDislikeCnt(0) : setDislikeCnt(dislikeCnt - 1) ;
    console.log(title,dislikeCnt)
  }
  
   return (
    <div className="w-full h-50
                    flex justify-start items-start
                    border rounded-xl overflow-hidden
                    border-gray-400 ">
      <div className="w-1/4 h-full                 
                      flex items-start justify-start">
        <img src={imgUrl} />
      </div>
      <div className="w-3/4 h-full  p-5
                      flex flex-col justify-between items-start">
       <div className="w-full flex flex-col justify-start items-start">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="w-full flex justify-start items-start">
            {content}
          </p>
       </div>
       <div className="w-full h-4 flex justify-end items-center">
        <span className="mx-4 cursor-pointer hover:font-bold"
              onClick={handleDown}>👎싫어요</span>
        <span className="text-2xl font-bold">{dislikeCnt}</span>
        <span className="mx-4 cursor-pointer hover:font-bold"
              onClick={handleUp}>❤️좋아요</span>
        <span className="text-2xl font-bold">{likeCnt}</span>
       </div>                 
      </div>
    </div>
   )
}