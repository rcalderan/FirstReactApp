import React from "react";
import Item from "./Item";
import style from './list.module.scss';


function List(){
    const tasks=[
        {task:'React', time:'02:00:00'},
        {task:'Javascrypt', time:'01:00:00'},
        {task:'other task', time:'04:00:00'},
    ];
    return (
        <aside className={style.taskList}>
            <h2> Daily Studies</h2>
            <ul>
                {tasks.map((item, index )=>(
                    <Item  key={index}
                        {...item}
                    />

                ))}
            </ul>
        </aside>
    )

}

export default List;