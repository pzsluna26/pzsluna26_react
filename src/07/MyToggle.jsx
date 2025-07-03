import MyToggleBox from './MyToggleBox'
import {useState} from "react"

export default function MyToggle() {
   
    return (
        <div className='flex'>
            <MyToggleBox color="blue" caption="blue"/>
            <MyToggleBox color="orange" caption="orange"/>
            <MyToggleBox color="lime" caption="lime"/>
        </div>
  )
}
