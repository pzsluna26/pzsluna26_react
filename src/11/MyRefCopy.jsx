import TailButton from "../component/TailButton";
import { useState, useRef } from "react";

export default function MyRef() {
    const n1Ref = useRef();
    const n2Ref = useRef();
    const n3Ref = useRef();
    const opRef = useRef();


    const handleCal = (e) => {
        e.preventDefault(); // 폼 제출 방지 (버튼 누르니까 자기자신을 돔)
        // 계산 로직은 여기에... 
        // n1와 n2를 가져와서 n3 에결과를 넣기
        let n1 = parseInt(n1Ref.current.value);
        let n2 = parseInt(n2Ref.current.value);
        
        switch(opRef.current.value)
        {
            case "+":
                n3Ref.current.value = n1 + n2;
                break;
            case "-":
                n3Ref.current.value = n1 - n2;
                break;
            case "*":
                n3Ref.current.value = n1 * n2;
                break;
            case "/":
                if (n2 !== 0) {
                    n3Ref.current.value = n1 / n2;
                } else {
                    alert("0으로 나눌 수 없습니다.");
                    n3Ref.current.value = "";
                }
                break;
            default:
                alert("잘못된 연산자입니다.");
        }

    };

    return (
        <div className="mt-70 w-9/10 bg-lime-50 flex justify-center items-center mt-12 py-6">
            <form className="flex items-center gap-3">
                <input
                    ref={n1Ref}
                    type="number"
                    name="n1"
                    className="h-14 w-24 p-2 border border-gray-300 rounded"
                    placeholder="n1"
                />
                <select
                    ref={opRef}
                    name="op" defaultValue="*"
                    className="h-14 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2"
                >
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input
                    ref={n2Ref}
                    type="number"
                    name="n2"
                    className="h-14 w-24 p-2 border border-gray-300 rounded"
                    placeholder="n2"
                />
                <TailButton
                    caption="="
                    color="lime"
                    onClick={handleCal}
                />
                <input
                    ref={n3Ref}
                    type="number"
                    name="n3"
                    readOnly
                    className="h-14 bg-lime-200 w-24 p-2 border border-gray-300 rounded"
                    placeholder="n3"
                />
            </form>
        </div>
    );
}
