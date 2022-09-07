import { ITask } from "../../types/interfaces";
import Item from "./Item";
import style from './list.module.scss';


function List({tasks}: {tasks : ITask[]}){
    
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