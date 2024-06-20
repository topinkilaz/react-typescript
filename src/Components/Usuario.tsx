import { useState } from "react"

interface User{
    uid:string;
    name:string;
}



export const Usuario = () => {
    const[user, setUser]=useState<User>({
        uid:'654654',
        name:'santiago',
    })

    const login=()=>{
        setUser({
            uid:'4545',
            name:'juan'
        })
            
      
    }
  return (
    <>
    <div className=" mt-5">Usuario:UseState</div>
    <button  onClick={login}>Login</button>
    <pre>{JSON.stringify(user)}</pre>
    </>
  
  )
}
