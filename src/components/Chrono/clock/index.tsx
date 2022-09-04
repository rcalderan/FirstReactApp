import style from './clock.module.scss';
export default function Clock(){
    //<React.Fragment> or <>  </>
    return(
        <>
        <span className={style.clockNumber}>0</span>
        <span className={style.clockNumber}>0</span>
        <span className={style.clockSeparator}>:</span>
        <span className={style.clockNumber}>0</span>
        <span className={style.clockNumber}>0</span>
        </>
    );
}
