import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './components/style.css';


const post = [
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
      avatarUrl: './src/assets/images/users/user3.jpg',
      name: 'Emilly Azevedo',
      role: 'Front-End',
    },
    content: [
      { type: 'text', content: "I love spending time with my family, whether it's watching movies together or having a barbecue in the backyard." },
      { type: 'text', content: "It's always great to have moments of togetherness and fun." },
      { type: 'link', content: 'linkedin.com' },
    ],
    publishedAt: new Date('2023-11-22 17:07:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: './src/assets/images/users/user2.jpg',
      name: 'Melissa Costa',
      role: 'Back-End',
    },
    content: [
      { type: 'text', content:  "I'm really excited about the trip I'm planning." },
      { type: 'text', content: "Exploring new places and cultures is one of the best ways to enrich life and create unforgettable memories." },
      { type: 'link', content: 'instagram.com' },
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
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </>
  )
}

export default App
