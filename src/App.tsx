import "./styles/global.css"
import "./styles/theme.css"
import {Container} from "./Components/Container"
import {Menu} from "./Components/Menu"
import {Logo} from "./Components/Logo"
import { CountDown } from "./Components/CountDown"

export function App(){

  return(
  <>
      
    <Container>
        <Logo />
    </Container>

    <Container>
        <Menu />
    </Container>

    <Container>
        <CountDown />
    </Container>

    <Container>
        <form action="" className="form">
            <div className="formrow">
               <label htmlFor="input">Task</label>
               <input type="text" id="input" />
            </div>
            <div className="formrow">
               <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="formrow">
               <p>Clip</p>
               <p>0 0 0 0 0 </p>
            </div>
            <div className="formrow">
               <button>Enviar</button>
            </div>
        </form>
    </Container>


  </>
  )

}