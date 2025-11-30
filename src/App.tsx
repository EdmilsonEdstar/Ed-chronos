import { TimerIcon } from 'lucide-react'
import {Heading} from './Components/Heading'
import "./styles/global.css"
import "./styles/theme.css"

export function App(){

  return(
  <>
    <div>
          <Heading>
              Olá mundo 
              <button type="button" aria-label="kkk">
                  <TimerIcon/>
              </button>
          </Heading>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ut quae amet. Porro blanditiis culpa debitis totam mollitia illum sapiente dolore velit delectus nostrum quae, fugiat reprehenderit ipsa eum veritatis!
          </p>
    </div>
  </>
  )

}