import { Link } from "react-router-dom"
export default function RouteNav() {
  return (

    <div className="mt-20 w-full flex justify-center items-center">
      <Link to="/">
        <div className="p-4 m-2 font-bold hover:bg-amber-200
                     rounded-3xl bg-amber-100">
          Home
        </div>
      </Link>
      <Link to="/p1/m/m">
        <div className="p-4 m-2 font-bold hover:bg-amber-200
                     rounded-3xl bg-amber-100">
          Page1
        </div>
      </Link>
      <Link to="/p2?item2=m">
        <div className="p-4 m-2 font-bold hover:bg-amber-200
                     rounded-3xl bg-amber-100">
          Page2
        </div>
      </Link>
     
    </div>

  )
}