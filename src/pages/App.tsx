import AppForm from '../components/AppForm';
import List from '../components/List';
import style from './App.module.scss';
function App() {
  return (
    <div className={style.AppStyle}>
      <AppForm />
      <List />
    </div>
  );
}

export default App;
