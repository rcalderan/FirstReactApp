import React from "react";
import AppButton from '../AppButton/index';
import style from './form.module.scss';


class AppForm extends React.Component{
    render(){
        return(
            <form className={style.newTask}>
                <div>
                    <label htmlFor="task"
                    />
                </div>
                <div>
                    <input type="text"
                        name="task" id="task"
                        required
                        placeholder="What do you wanna study?"/>
                </div>
                
                <div>
                    <label htmlFor="task"
                    />
                </div>
                <div>
                    <input type="time"
                        name="task" id="task"
                        required
                        min="00:00:00"
                        max="01:30:00"/>
                </div>
                <AppButton />
            </form>
        )
    }
}

export default AppForm;
