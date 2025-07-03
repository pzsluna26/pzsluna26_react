import {useState, useEffect} from "react"

export default function BoxOffice() {

    const [tData, setTdata] = useState([]);
    const [tag, setTag] = useState([]);
    const [type, setType] = useState("r1"); 

    // 1. 박스오피스에서 가져오기
    const getFetchData = async () => {
        // 1-2. .env 파일에서 API 키 가져오기 (환경변수)
        const apikey=import.meta.env.VITE_MV_API;
        console.log("apikey", apikey) // 콘솔에 키 출력해보기

        const targetDt= "20250702";
        const url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${targetDt}`;
        //await 는 못내려가게 잡아줌
        const resp = await fetch(url);
        const data = await resp.json();
        setTdata(data.boxOfficeResult.dailyBoxOfficeList);
       
        console.log(data.boxOfficeResult.dailyBoxOfficeList);
    }
    const handleRadioChange = (e) => {
        setType(e.target.value);
    };

    // 7. 폼 제출 시 실행할 함수
    const handleSubmit = (e) => {
        e.preventDefault(); // 기본 제출 막기
        console.log("선택된 유형:", type);
        // 여기서 type 값(r1, r2, r3)을 이용해 필터링하거나 요청할 수 있어요
    };

    // 2. 데이터가채워지고 난 다음!!!!컴포넌트가 처음 화면에 나타났을 때 실행
    useEffect(()=>{
        getFetchData();
    },[]);

    useEffect(()=>{
        let tm = tData.map(item => 
            <tr key ={item.movieCd}>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr> )
            setTag(tm)
    },[tData])

  return (
    <div className="mt-15">
        <h2 className="mt-4 text-2xl font-bold ">일별 박스오피스</h2>
         <form className="mt-5 mb-4">
             <input type="radio" name="r" id="r1" value="r1"checked={type === "r1"}
    onChange={handleRadioChange} />
             <label className="mr-2" for="r1">전체</label>
             <input type="radio" name="r" id="r2" value="r2" checked={type === "r2"}
    onChange={handleRadioChange}/>
             <label className="mr-2" for="r2">상업</label>
            <input type="radio" name="r" id="r3" value="r3" checked={type === "r3"}
    onChange={handleRadioChange}/>
             <label for="r3">독립예술</label>
             <button className="ml-3 border rounded-sm" >조회</button>
        </form>
      
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-6 py-3">순위</th>
              <th className="px-6 py-3">영화명</th>
              <th className="px-6 py-3">개봉일</th>
              <th className="px-6 py-3">일일 관객수</th>
              <th className="px-6 py-3">누적 관객수</th>
            </tr>
          </thead>
          <tbody>
            {tData.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  데이터 로딩 중...
                </td>
              </tr>
            ) : (
              tData.map((item) => (
                <tr
                  key={item.movieCd}
                  className="border-b hover:bg-gray-50 even:bg-gray-50"
                >
                  <td className="px-6 py-3 text-center">{item.rank}</td>
                  <td className="px-6 py-3">{item.movieNm}</td>
                  <td className="px-6 py-3 text-center">{item.openDt}</td>
                  <td className="px-6 py-3 text-right">{item.audiCnt}</td>
                  <td className="px-6 py-3 text-right">{item.audiAcc}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


 // 독립영화 , 전체, 상업영화 분류 label 로 만들어보기 
 // // 1. React 컴포넌트 안에서 form 태그 만들기 (class → className으로 바꾸기)
    //    <form>
    //         <input type="radio" name="r" id="r1" value="r1" checked/>
    //         <label for="r1">전체</label>
    //         <input type="radio" name="r" id="r2" value="r2"/>
    //         <label for="r2">상업</label>
    //         <input type="radio" name="r" id="r3" value="r3"/>
    //         <label for="r3">독립예술</label>
    //         <button>조회</button>
    //    </form>
    

    // // 5. 라디오 버튼 상태를 useState로 관리하기 (초기값 설정)

    // // 6. 라디오 버튼 input에 onChange 이벤트 넣어 상태 변경 처리하기

    // // 7. 버튼 태그 만들고, 클릭 시 폼 제출 이벤트 막기 (preventDefault)

    // // 8. 버튼 클릭 시 현재 선택된 라디오 상태로 원하는 로직 실행하기

    // // 9. 전체 컴포넌트 리턴 안에 form과 input, label, button 렌더링하기
