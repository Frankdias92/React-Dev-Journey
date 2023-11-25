import { Post, PostType } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './components/style.css';



const post: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Frankdias92.png',
      name: 'Franklin Macedo',
      role: 'Developer',
    },
    content: [
      { type: 'text', content: 'Fala turma!' },
      { type: 'text', content: 'aqui vai a segunda linha' },
      { type: 'link', content: 'google.com' },
    ],
    publishedAt: new Date('2023-11-24 23:28:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Frankdias92.png',
      name: 'Someone',
      role: 'Front-End',
    },
    content: [
      { type: 'text', content: 'Fala turma!' },
      { type: 'text', content: 'aqui vai a segunda linha' },
      { type: 'link', content: 'google.com' },
    ],
    publishedAt: new Date('2023-11-22 17:07:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/Frankdias92.png',
      name: 'someone else',
      role: 'Back-End',
    },
    content: [
      { type: 'text', content: 'Fala turma!' },
      { type: 'text', content: 'aqui vai a segunda linha' },
      { type: 'link', content: 'google.com' },
    ],
    publishedAt: new Date('2023-11-16 17:07:00'),
  },
]

export function App() {
  return (
    <>
      <Header />
    
      <div className={styles.wrapper}>
        <Sidebar />
    
        <main>
          {post.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>

    </>
  )
}

export default App
