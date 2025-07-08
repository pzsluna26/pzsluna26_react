import TailButton from "../component/TailButton";
import { useState, useRef } from "react";

export default function MyRef() {
    let cnt = 0;
    const [scnt, setScnt] = useState(0);
    const rcnt = useRef(0);

    const handleCnt = () => {
        cnt = cnt + 1;
        console.log("컴포넌트 변수 cnt:", cnt);
    };

    const handleScnt = () => {
        setScnt(scnt + 1);
        console.log("State 변수 scnt:", scnt + 1);
    };

    const handleRcnt = () => {
        rcnt.current = rcnt.current + 1;
        console.log("Ref 변수 rcnt:", rcnt.current);
    };

    return (
        <div className="grid grid-cols-3 mt-70">
            <div>
                컴포넌트 변수 : {cnt}
            </div>
            <div>
                State 변수 : {scnt}
            </div>
            <div>
                Ref 변수 : {rcnt.current}
            </div>
            <div>
                <TailButton
                    caption="컴포넌트 변수"
                    color="blue"
                    onClick={handleCnt}
                />
            </div>
            <div>
                <TailButton
                    caption="State 변수"
                    color="orange"
                    onClick={handleScnt}
                />
            </div>
            <div>
                <TailButton
                    caption="Ref 변수"
                    color="lime"
                    onClick={handleRcnt}
                />
            </div>
        </div>
    );
}
