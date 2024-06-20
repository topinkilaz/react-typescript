
import  { useState } from 'react'
export const Counter = ()=> {
  const [count, setCount] = useState(0)
  const contador=(numero:number):void=>{
    setCount(count+numero)
   
  }
  return (
    
      <div>
      <h3>counter:{count}</h3>
<button onClick={()=>contador(1)}>+1</button>
<button onClick={()=>contador(2)}>+2</button>
<button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}
