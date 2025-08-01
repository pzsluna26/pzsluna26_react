import TailBall from "../component/TailBall" 
import TailButton from "../component/TailButton"
import {useState} from "react"


export default function Lotto() {
 
    const[lottoTag, setLottoTag] = useState([]);
    const HandleClick = () => {
        // 로또 번호 생성 버튼이 눌러지면 배열을 항상 초기화
        let num = [];

        // 중복되지 않는 7개 숫자
        while(num.length < 7){
            let n = Math.floor(Math.random()*45)+1; //1~45  
            if(!num.includes(n)) num.push(n);
            
        } console.log(num)

        // 보너스
        let bounus = num.splice(-1);
        
        // num배열 정렬
        num.sort((a,b) => a-b);

        // 화면 출력 배열
        let lotto = [...num, '+', ...bounus];

        // 배열 순회 => map(콜백함수) lotto의 갯수랑 같음
                                        // 콘솔오류: 맵이기때문에 키값줘야함
        lotto = lotto.map(item => item == '+' ? <span className = "font-bold text-3xl" key={`n${item}`}>{item}</span>
                                                : <TailBall key={`n${item}`} n={item}/>);

        console.log(lotto)
        setLottoTag(lotto)
  }

  return (
    <div className="mt-60 -full flex flex-col justify-center items-center">
        <div className="flex justify-center items-center space-x-2">
            {lottoTag} 
        </div>
        <div className = "mt-15"> 
            <TailButton caption="로또번호생성"
                  color="blue"
                  onClick={HandleClick}/>
        </div>
    </div>
  )
}


// 실습 포인트 : 데이터를 만들고, 랜더링하려면 state 변수를 써야함!
// 해결 해야할 것 
// 1. 테일볼 사이드 간격 띄우기
// 2. 버튼 스타일 고치기
// 구분이 광역이면 부산시
// 푸드카드 만들고, 이미지, 글자 나오게하기 클릭하면 글자가 보이고, 아니면 아놉이고 onoff 전화버놓