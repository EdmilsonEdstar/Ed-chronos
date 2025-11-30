import type React from "react";
import style from "./Container.module.css"

type ContainerProps ={    // Definir que o componente ou a função Heading, 
    children : React.ReactNode;  // tem um elemento string, neste caso o children
}

export function Container(props: ContainerProps){ // props é para adicionar uma propriedade que recebe o tipo do elemento children(é um atributo da propriedade).
    return( 
        <div className={style.container}>
            <div className={style.content}>
                <section>
                    {props.children}
                </section>
            </div>
        </div>

    )
    // {props.children} serve para atribuir uma valor dentro da tag, ou seja adicionar um children(filho)
    // Também permite adicionar atributos.
}