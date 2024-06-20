import { useEffect, useRef, useState } from "react"

type arg={
  milisegundos:number
}
export const Timer = ({milisegundos}:arg) => {
  
    const [segundos ,setSegundos]=useState(0)
    const ref=useRef<number>();
  useEffect(() => {
    ref.current && clearInterval(ref.current);
   ref.current=setInterval(()=>setSegundos( a => a + 1), milisegundos);

  }, [milisegundos])
  
 

  return (
    <>

    <h4>Timer: <small>{segundos}</small></h4>
    


    </>
  )
}
