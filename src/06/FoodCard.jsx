import bank from "../assets/bank.png";
import busan from "../assets/busan.png";
import market from "../assets/market.png";
import { useState } from "react";


export default function FoodCard({ item }) {
    const [flag , setFalg] = useState(false) ;

    const handleToggle = () => {
    setFalg(!flag) ;
    }

    // 구분에 따라 이미지 선택
    const type = item["구분"]?.trim(); // 공백 제거
    const imageSrc =
        type === "광역지원센터"
            ? busan
            : type === "기초푸드뱅크"
            ? bank
            : type === "기초푸드마켓"
            ? market
            : null;

    return (
        <div className="w-full flex justify-start items-start
                    border rounded-lg border-gray-300">
            <div className="w-1/4 p-4">
                <img src={imageSrc} alt="category icon" />
            </div>
            <div className="w-3/4 flex flex-col justify-between items-start">
                <div className="w-full flex flex-col justify-start items-start">
                    <h1 className="text-xl font-bold">
                        {item["사업장명"]}
                    </h1>
                    <h2 className="text-small font-bold text-gray-600">
                        {item["운영주체명"]}
                    </h2>
                    <p className="h-12 w-full text-left text-small text-gray-400">
                        {item["사업자 소재지"]}
                    </p>
                </div>
                <div className="bg-yellow-100 h-8 mt-4 px-4 text-black text-left hover:cursor-pointer w-full"
                     onClick={handleToggle}>
                    {flag && item["연락처(대표번호)"]}
                </div>
            </div>
                
            
        </div>
    );
}

                