import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GroupText from './01/GroupText'
import MyClock from './02/MyClock'
import MyDiv from './03/MyDiv'
import Lotto from './05/Lotto'
import FoodMain from './06/FoodMain'
import MyList2 from './04/MyList2.jsx'
import MyToggle from './07/MyToggle.jsx'
import MyToggleBox from './07/MyToggleBox.jsx'
import MyEffect from './08/MyEffect.jsx'
import Traffic from './10/Traffic.jsx'
import MyRef from './11/MyRef.jsx'
import MyRefCopy from './11/MyRefCopy.jsx'
import BoxOffice from './09/BoxOffice.jsx'
import Gallery from './12/Gallery.jsx'
import Gallery2 from './12/Gallery2.jsx'
import Festival2 from './13/Festival2.jsx'
import Fcst from './15/Fcst'
import FcstList from './15/FcstList'
// import RouteMain from './14/RouteMain.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppNav from '../AppNav.jsx'

function App() {
  return (
   
       <BrowserRouter>
      <div className="w-full xl:w-4/5 h-screen bg-white mx-auto flex flex-col justify-start items-start">
        <header className="w-full min-h-20 flex justify-between items-center bg-blue-200 ">
          <div className="flex ml-10">
            <img src={reactLogo} alt="React logo" /> +
            <img src={viteLogo} alt="vite logo" />
          </div>
          <div>
            <AppNav />
          </div>
          <GroupText />
        </header>

        <main className="w-full flex flex-col justify-start items-center overflow-y-auto flex-grow mb-8">
          {/* <MyClock/> */}
          {/* <MyList2/> */}
          {/* <Lotto/> */}
          {/* <FoodMain2/> */}
          {/* <MyToggle/> */}
          {/* <MyEffect/> */}
          {/* <Traffic/> */}
          {/* <MyRef/> */}
          {/* <BoxOffice/> */}
          {/* <MyRefCopy/> */}
          {/* <Gallery/> */}
          {/* <Gallery2/> */}
          {/* <Festival2/> */}
          {/* <RouteMain/> */}
          {/* <Fcst/> */}

         <Routes>
           <Route path="/MyClock" element={<MyClock/>} />
           <Route path="/Lotto" element={<Lotto />} />
           <Route path="/FoodMain" element={<FoodMain />} />
           <Route path="/BoxOffice" element={<BoxOffice />} />
           <Route path="/Traffic" element={<Traffic />} />
           <Route path="/Gallery" element={<Gallery />} />
           <Route path="/Festival2" element={<Festival2 />} />
           <Route path="/Fcst" element={<Fcst />} />
           <Route path="/FcstList" element={<FcstList />} />
         </Routes> 
        </main>

        <footer className="w-full min-h-20 flex justify-center items-center bg-blue-400 text-white">
          k-digital 2025 2기 FrontEnd
        </footer>
      </div>
     </BrowserRouter>
    
  )
}

export default App
