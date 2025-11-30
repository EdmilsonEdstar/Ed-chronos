import type React from "react";
import style from "./Heading.module.css"

type HeadingProps ={    // Definir que o componente ou a função Heading, 
    children : React.ReactNode;  // tem um elemento string, neste caso o children
}

export function Heading(props: HeadingProps){ // props é para adicionar uma propriedade que recebe o tipo do elemento children(é um atributo da propriedade).
    return <h1 className={style.heading}>{props.children}</h1>
    // {props.children} serve para atribuir uma valor dentro da tag, ou seja adicionar um children(filho)
    // Também permite adicionar atributos.
}