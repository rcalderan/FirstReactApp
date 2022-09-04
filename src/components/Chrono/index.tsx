import AppButton from "../AppButton";
import Clock from "./clock";
import style from './Chrono.module.scss';

export default function Chorno(){
    return(
        <div className={style.chrono}>
            <p className={style.tittle}>Select a card and start chrono</p>
            <div className={style.clockWrapper}>
                <Clock />
            </div>
            <AppButton text="Start" />
        </div>
    );
} 
