import "./styles/global.css"
import "./styles/theme.css"
import {Container} from "./Components/Container"
import {Menu} from "./Components/Menu"
import {Logo} from "./Components/Logo"
import { CountDown } from "./Components/CountDown"
import { DefaultInput } from "./Components/DefaultInput"
import { Cycles } from "./Components/Cycles"
import {DefaultButton} from "./Components/DefaultButton"
import { PlayCircleIcon } from "lucide-react"
import { Footer } from "./Components/Footer"

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
                <DefaultInput type="text" lableText="Insira qualquer texto" id="inputhome" placeholder="qualquer coisa" />
            </div>

            <div className="formrow">
               <label>Lorem ipsum dolor sit amet.</label>
            </div>

            <div className="formrow">
                <Cycles />
            </div>

            <div className="formrow">
               <DefaultButton  icon={<PlayCircleIcon />} color="green" />
            </div>
        </form>
    </Container>

    <Container>
       <Footer />
    </Container>

  </>
  )

}