import { Counter } from "./Components/Counter"
import { TimerPadre } from "./Components/TimerPadre"
import { Usuario } from "./Components/Usuario"


function App() {
 

  return (
    <>
      
      <h1>React + typescrit</h1>
      <hr />
      <Counter/>
      <Usuario/>
      <h1>UseEffect  - UseRef</h1>
      <hr />
      <TimerPadre/>
    </>
  )
}

export default App
