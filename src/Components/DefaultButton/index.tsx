import type React from "react";
import style from "./style.module.css";

type DefaultButtonProps ={
    icon: React.ReactNode;
    color?: 'green' | 'red';
}

export function DefaultButton({icon, color='green'}:DefaultButtonProps){
    return( 
        <>
            <button className={`${style.button} ${style[color]}`}>{icon}</button>
        </>
    );
}