import style from "./Heading.module.css"

export function Heading(props){ // props é para adicionar uma propriedade
    return <h1 className={style.heading}>{props.children}</h1> 
    // {props.children} serve para atribuir uma valor dentro da tag, ou seja adicionar um children(filho)
    // Também permite adicionar atributos na tag renderizada.
}