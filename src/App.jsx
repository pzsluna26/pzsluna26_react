import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GroupText from './01/GroupText'
import MyClock from './02/MyClock'
import MyDiv from './03/MyDiv'
import MyListItem from './04/MyListItem'
import MyList from './04/MyList.jsx'
import Lotto from './05/Lotto.jsx'

function App() {
  return (
      <div className="w-full xl:w-4/5 h-screen bg-white mx-auto
                   flex flex-col justify-start items-start">
                     {/*
                        w-full         : 너비 100%
                        min-h-20       : 최소 높이 5rem (20 * 0.25rem = 5rem)
                        flex           : Flexbox
                        justify-between: 양쪽 끝 정렬
                        items-center   : 수직 중앙 정렬
                        bg-blue-200    : 연한 파란 배경
                      */}
          
      <header className="w-full min-h-20 flex justify-between 
                        items-center bg-blue-200 ">
          <div className="flex ml-10">
            <img src={reactLogo} alt="React logo" /> +
            <img src ={viteLogo} alt="vite logo" />
            {/* <img src ="vite.svg"/> */}
          </div>
          <GroupText/>
      </header>
      <main className="w-full flex-grow flex flex-col justify-start 
                      items-center overflow-y-auto py-10 ">
                      {/*
                        w-full         : 너비 100%
                        flex-grow      : 남은 공간 모두 차지
                        flex           : Flexbox
                        flex-col       : 세로 방향 정렬
                        justify-start  : 위쪽 정렬
                        items-center   : 수평 가운데 정렬
                        overflow-y-auto: 수직 스크롤 자동
                        py-10          : 상하 패딩 2.5rem
                      */} 
          
          {/* <MyList/> */}
          <Lotto/>

      </main>
      <footer className="w-full min-h-20 flex justify-center items-center
                         bg-blue-400 text-white">
      k-digital 2025 2기 FrontEnd
      </footer>
    </div>
  );
}

export default App;
