import { useState } from "react"
import { Timer } from "./Timer"

export const TimerPadre = () => {
  const [millisegundos, setmillisegundos] = useState(1000)

  return ( 
    <div>
      
        <span>milisegundos {millisegundos}</span><br/>
        <button onClick={()=>setmillisegundos(1000)}>1000</button>
        <button onClick={()=>setmillisegundos(2000)}>2000</button>

        <Timer milisegundos={millisegundos}/>
    </div>
  )
}
