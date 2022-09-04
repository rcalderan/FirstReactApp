import React from "react";
import AppButton from '../AppButton/index';
import style from './form.module.scss';


class AppForm extends React.Component{
    render(){
        //style.newTask or style['inputContainer']
        return(
            <form className={style.newTask}>
                <div className={style['inputContainer']}>
                    <label htmlFor="task"
                    />
                </div>
                <div>
                    <input type="text"
                        name="task" id="task"
                        required
                        placeholder="What do you wanna study?"/>
                </div>
                
                <div className={style.inputContainer}>
                    <label htmlFor="task"
                    />
                </div>
                <div className={style.inputContainer}>
                    <input type="time"
                        name="task" id="task"
                        required
                        min="00:00:00"
                        max="01:30:00"/>
                </div>
                <AppButton text="Click"/>
            </form>
        )
    }
}

export default AppForm;
