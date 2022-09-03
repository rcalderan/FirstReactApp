import React from "react";
import style from './list.module.scss';

function List(){
    const tasks=[
        {task:'React', time:'02:00:00'},
        {task:'Javascrypt', time:'01:00:00'},
        {task:'other task', time:'04:00:00'},
    ];
    return (
        <aside>
            <h2> Daily Studies</h2>
            <ul>
                {tasks.map((item, index )=>(
                    
                    <li key={index}>
                        <h3>{item.task}</h3>
                        <span>{item.time}</span>
                    </li>

                ))}
            </ul>
        </aside>
    )

}

export default List;