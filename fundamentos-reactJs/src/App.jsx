import { Post } from './modules/Post';
import './components/style.css';
import { Header } from './components/Header';

export function App() {

  return (
    <>
    <Header />
      <h1>Wello Word</h1>
      <Post author='Author' content="loren ipsun" />
      <Post author='google' content="some text here :]" />
    </>
  )
}

export default App
