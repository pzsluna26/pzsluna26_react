import FoodCard from "./FoodCard"
import fooddata from "./fooddata.json"
import TailButton from "../component/TailButton";
import { useState } from "react";

export default function FoodMain() {
   const [tag, setTag] = useState([]) ;

  let group = fooddata.map(item => item["운영주체 분류"].replaceAll(' ', ''));
  group = [...new Set(group)];
  console.log(group)
  
  const onClick = (gubun) => {
    console.log(gubun)
    let tm = fooddata.filter(item => item["운영주체 분류"].replaceAll(' ', '') == gubun )
    
    tm = tm.map(item => <FoodCard key={item['사업장명']}
                                  item={item} />)
    setTag(tm);
  }

            
   return (
    <div className="w-full flex flex-col justify-start items-center">
      <div className="w-8/10 bg-amber-100 h-20 mb-10
                      flex justify-center items-center">
         {group.map(item => <TailButton key={item} 
                                        caption={item}
                                        color="blue" 
                                        onClick = {() => onClick(item)} /> )}
                                        {/* 인수가 들어있을 때는 콜백함수써야함 */}
      </div>
      <div className="w-8/10 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {
          tag
        }

      </div>
    </div>
  )
}

