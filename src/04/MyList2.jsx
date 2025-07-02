import MyListData2 from './MyListData2.json';
import MyListItem2 from './MyListItem2.jsx';

// export default function MyList2(){
//     console.log(MyListData2)
//   return (
//     <div className="mt-10 w-8/10 grid grid-cols-2 gap-4">
//       {
//         MyListData2.map(item => 
//           <MyListItem2 key={item.title}
//                       title={item.title} 
//                       imgUrl={item.imgUrl} 
//                       content={item.content} />)
//       }
//     </div>
//   )
// }

export default function MyList2(){
  return(
    <div className="mt-10 w-8/10 grid grid-cols-2 gap-4">
      {
      MyListData2.map(item =>
        <MyListItem2 key ={item.title}
                      title ={item.title}
                      imgUrl ={item.imgUrl}
                      content ={item.content} />)
    
      }
    </div>
  )
}