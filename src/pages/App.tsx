import { useState } from 'react';
import AppForm from '../components/AppForm';
import Chorno from '../components/Chrono';
import List from '../components/List';
import style from './App.module.scss';
function App() {
  
  const [tasks, setTask] = useState(
    [
        {task:'React', time:'02:00:00'},
        {task:'Javascrypt', time:'01:00:00'},
        {task:'other task', time:'04:00:00'},
    ]
)
  return (
    <div className={style.AppStyle}>
      <AppForm setTasks={ setTask }/>
      <List tasks={tasks}/>
      <Chorno />
    </div>
  );
}

export default App;
