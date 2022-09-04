import AppForm from '../components/AppForm';
import Chorno from '../components/Chrono';
import List from '../components/List';
import style from './App.module.scss';
function App() {
  return (
    <div className={style.AppStyle}>
      <AppForm />
      <List />
      <Chorno />
    </div>
  );
}

export default App;
