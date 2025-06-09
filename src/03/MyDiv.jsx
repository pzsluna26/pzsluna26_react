import MyDiv2 from "./MyDiv2"

export default function MyDiv() {
  const x = "div1";
  const y = "div2";
  const z = "div3";
  return (
    <div className="w-2/3 h-3/5 bg-blue-100 flex justify-center items-center
     text-white font-bold p-10 text-2xl flex-col ">
    <div className="w-2/3 flex justify-start mb-5"> 
      {x}
      </div>
      <MyDiv2 a={x} b={y} c={z}/>
    </div>
  )
}
