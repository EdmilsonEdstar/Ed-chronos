import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import "./styles/global.css"
import "./styles/theme.css"
import { Heading } from './Components/Heading.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Heading>Edmilson</Heading>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi commodi cupiditate porro? Vitae ipsam voluptatibus voluptates quaerat veritatis eum officiis soluta sit. Necessitatibus qui at vel aut consectetur tempore aspernatur?
    </p>
  </StrictMode>,
)
