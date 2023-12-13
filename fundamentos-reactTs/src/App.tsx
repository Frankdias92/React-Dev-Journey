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
      { type: 'text', content: "Just finished reading a great book that completely captivated me." },
      { type: 'text', content: "There's something so satisfying about getting lost in a good story and discovering new perspectives." },
      { type: 'link', content: <a href="https://www.linkedin.com/in/franklinmacedodias/">Linkedin</a> },
    ],
    publishedAt: new Date('2023-11-24 23:28:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: './src/assets/images/users/user3.jpg',
      name: 'Someone',
      role: 'Front-End',
    },
    content: [
      { type: 'text', content:  "I love spending time with my family, whether it's watching movies together or having a barbecue in the backyard." },
      { type: 'text', content: "It's always great to have moments of togetherness and fun." },
      { type: 'link', content: 'facebook.com' },
    ],
    publishedAt: new Date('2023-11-22 17:07:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: './src/assets/images/users/user2.jpg',
      name: 'someone else',
      role: 'Back-End',
    },
    content: [
      { type: 'text', content:  "I'm really excited about the trip I'm planning." },
      { type: 'text', content: " Exploring new places and cultures is one of the best ways to enrich life and create unforgettable memories." },
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
