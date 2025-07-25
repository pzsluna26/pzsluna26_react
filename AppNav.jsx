import {Link} from 'react-router-dom'

export default function AppNav() {
  return (
    <div className='flex justify-center items-center'>
         <Link to="/MyClock">
            <div className="p-3 m-2 border border-transparent font-bold hover:bg-amber-100
                         rounded-2xl bg-white">
            시계
            </div>
        </Link>
        <Link to="/Lotto">
            <div className="p-3 m-2 font-bold hover:bg-amber-100
                         rounded-2xl bg-white">
            로또
            </div>
        </Link>
         <Link to="/FoodMain">
            <div className="p-3 m-2 font-bold hover:bg-amber-100
                         rounded-2xl bg-white">
            푸드
            </div>
        </Link>
        <Link to="/BoxOffice">
            <div className="p-3 m-2 font-bold hover:bg-amber-100
                         rounded-2xl bg-white">
            영화
            </div>
        </Link>
        <Link to="/Traffic">
            <div className="p-3 m-2 font-bold hover:bg-amber-100
                         rounded-2xl bg-white">
            사고
            </div>
        </Link>
        <Link to="/Gallery">
            <div className="p-3 m-2 font-bold hover:bg-amber-100
                        rounded-2xl bg-white">
            사진
            </div>
        </Link>
        <Link to="/Festival2">
            <div className="p-3 m-2 font-bold hover:bg-amber-100
                         rounded-2xl bg-white">
            축제
            </div>
        </Link>
        <Link to="/Fcst">
            <div className="p-3 m-2 font-bold hover:bg-amber-100
                         rounded-2xl bg-white">
            일기예보
            </div>
        </Link>
        <Link to="/MyDivMain">
            <div className="p-3 m-2 font-bold hover:bg-amber-100
                         rounded-2xl bg-white">
            전역변수
            </div>
        </Link>
        <Link to="/EvCar">
            <div className="p-3 m-2 font-bold hover:bg-amber-100
                         rounded-2xl bg-white">
            전기자동차
            </div>
        </Link>
    </div>
  )
}
