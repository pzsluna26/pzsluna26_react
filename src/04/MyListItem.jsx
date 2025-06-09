

export default function MyListItem() {
    const title = "CSS";
    const imgUrl ="./img/css.png";
    const content = "Cascading Style Sheets(CSS)는 HTML이나 XML(XML의 방언인 SVG, XHTML 포함)로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어"
  return (
    <div className="w-1/2 h-50 
                    flex justify-start items-start 
                    border-gray-400">
      <div className="w-1/4 h-full flex items-start justify-start
                    bg-pink-200">
            <img src={imgUrl}/>
      </div>
      <div className="w-3/4 h-full flex items-start flex-col
                    bg-blue-200 justify-between
                    p-5">
            <div className="w-full flex flex-col justify-start iems-start">
                <h1>{title}</h1>
                <p className="w-full flex flex-col justify-start iems-start">{content}</p>
            </div>
            <div className="w-full h-4 flex justify-end items-center">
                좋아요
            </div>
      </div>
    </div>
  )
}
