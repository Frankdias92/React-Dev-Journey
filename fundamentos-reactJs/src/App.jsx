import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './components/style.css';

export function App() {

  return (
    <>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />

      <main>
        <Post />
        <Post />
        
      </main>
    </div>

    </>
  )
}

export default App
