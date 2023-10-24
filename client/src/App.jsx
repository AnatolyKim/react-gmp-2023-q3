import { Outlet } from 'react-router-dom';
import styles from './styles.module.css';

function App() {
  return (
    <>
      <Outlet />
      <footer className={styles.footer}></footer>
    </>
  );
}

export default App;