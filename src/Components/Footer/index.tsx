import style from "./style.module.css"

export function Footer(){
    return(
        <footer className={style.footer}>
            <a href="">Entenda comom funciona a técnica de pomodoro</a>
            <a href="">Ed-Chonos &copy; {new Date().getFullYear()} Feito com React js por Edmilson António</a>
        </footer>
    )
}