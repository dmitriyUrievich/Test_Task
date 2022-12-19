import {useEffect, useState} from "react";
import {timer, userIdx} from "./Utils";
const Time = ({idx}) => {
  const [t, setT] = useState(timer)
  const getTime = (t) => t.toString().padStart(2,'0')
  const minuts = getTime(Math.floor(t / 60))
  const second = getTime(t - minuts * 60)

  useEffect(()=>{
    const interval = setInterval(()=>{
      setT(timer)
      console.log('setTimertimer', timer)
    },1000)
    return ()=>{
      clearInterval(interval)
    }
  },[])
  return (userIdx ===-1?
    <h5 className='text-danger'> {minuts} : {second} <i className="bi bi-hourglass-split"></i></h5>:
    idx === userIdx ?
    <h5> {minuts} : {second} <i className="bi bi-hourglass-split"></i></h5>
    :'')
}
export default Time
