import style from "./style.module.css";

type DefaultInputProps ={
    id: string;
    lableText: string;
    type: 'text' | 'number';
    placeholder: 'text' | 'number';
}

export function DefaultInput(props: DefaultInputProps){
    return( 
        <>
            <label htmlFor={props.id}>{props.lableText}</label>
            <input className={style.inputhome} type={props.type} id={props.id} placeholder={props.placeholder} />
        </>
    );
}