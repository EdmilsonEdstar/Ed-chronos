import "./styles/global.css"
import "./styles/theme.css"
import {Container} from "./Components/Container"
import {Menu} from "./Components/Menu"
import {Logo} from "./Components/Logo"

export function App(){

  return(
  <>
      
    <Container>
        <Logo />
    </Container>

    <Container>
        <Menu />
    </Container>


  </>
  )

}