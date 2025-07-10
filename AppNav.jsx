import {Link} from 'react-router-dom'

export default function AppNav() {
  return (
    <div className='flex justify-center items-center'>
         <Link to="/MyClock">
            <div className="p-4 m-2 border font-bold hover:bg-amber-200
                        border-amber-200 rounded bg-amber-50">
            시계
            </div>
        </Link>
        <Link to="/Lotto">
            <div className="p-4 m-2 border font-bold hover:bg-amber-200
                        border-amber-200 rounded bg-amber-50">
            로또
            </div>
        </Link>
         <Link to="/FoodMain">
            <div className="p-4 m-2 border font-bold hover:bg-amber-200
                        border-amber-200 rounded bg-amber-50">
            푸드
            </div>
        </Link>
        <Link to="/BoxOffice">
            <div className="p-4 m-2 border font-bold hover:bg-amber-200
                        border-amber-200 rounded bg-amber-50">
            영화
            </div>
        </Link>
        <Link to="/Traffic">
            <div className="p-4 m-2 border font-bold hover:bg-amber-200
                        border-amber-200 rounded bg-amber-50">
            사고
            </div>
        </Link>
        <Link to="/Gallery">
            <div className="p-4 m-2 border font-bold hover:bg-amber-200
                        border-amber-200 rounded bg-amber-50">
            사진
            </div>
        </Link>
        <Link to="/Festival2">
            <div className="p-4 m-2 border font-bold hover:bg-amber-200
                        border-amber-200 rounded bg-amber-50">
            축제
            </div>
        </Link>
        <Link to="/Fcst">
            <div className="p-4 m-2 border font-bold hover:bg-amber-200
                        border-amber-200 rounded bg-amber-50">
            일기예보
            </div>
        </Link>
         <Link to="/FcstList">
            <div className="p-4 m-2 border font-bold hover:bg-amber-200
                        border-amber-200 rounded bg-amber-50">
            일기예보2
            </div>
        </Link>
    </div>
  )
}
