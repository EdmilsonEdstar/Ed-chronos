import style from "./style.module.css"
import { HistoryIcon, SettingsIcon, SunIcon, TimerIcon } from "lucide-react";


export function Menu(){ 
    return( 
        <nav className={style.menu}>
            <a href="#" className={style.menuLink}>
                <TimerIcon/>
            </a>
            <a href="#" className={style.menuLink}>
                <HistoryIcon/>
            </a>
            <a href="#" className={style.menuLink}>
                <SettingsIcon/>
            </a>
            <a href="#" className={style.menuLink}>
                <SunIcon/>
            </a>
        </nav>

    )
}