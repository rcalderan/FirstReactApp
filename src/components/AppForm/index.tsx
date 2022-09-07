import React from "react";
import { ITask } from "../../types/interfaces";
import AppButton from '../AppButton/index';
import style from './form.module.scss';


class AppForm extends React.Component<{ setTasks: React.Dispatch<React.SetStateAction<ITask[]>>}>{
    state: ITask={
        task:'',
        time:'00:00:00'
    };
    render(){
        //style.newTask or style['inputContainer']
        return(
            <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
                <div className={style['inputContainer']}>
                    <label htmlFor="task"
                    />
                    <input type="text"
                        name="task" id="task"
                        value={this.state.task}
                        onChange={(event)=> this.setState({...this.state, task: event.target.value})}
                        required
                        placeholder="What do you wanna study?"/>
                </div>                
                <div className={style.inputContainer}>
                    <label htmlFor="task"
                    />
                    <input type="time"
                        name="task" id="task"
                        required
                        value={this.state.time}
                        onChange={(event)=>this.setState({...this.state, time: event.target.value })}
                        min="00:00:00"
                        max="01:30:00"/>
                </div>
                <AppButton type="submit" text="Click"/>
            </form>
        )
    }
    addTask(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        this.props.setTasks(oldTasks=> [...oldTasks, this.state] );
    }
}

export default AppForm;
