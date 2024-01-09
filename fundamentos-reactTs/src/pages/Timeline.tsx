import { Post, PostType } from "../components/Post"
import { useEffect, useState } from 'react';
import { getProfileFromStorage } from '../../src/storage/storageutil';


const Timeline: React.FC = () => {
  const [profile, setProfile] = useState(getProfileFromStorage());

  useEffect(() => {
    setProfile(getProfileFromStorage());
  }, []);


  const post: PostType[] = [
    {
      id: 1,
      author: {
        avatarUrl: `https://github.com/${profile.profileImage}.png`,
        name: profile.name,
        role: profile.role,
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
        avatarUrl: 'https://img.freepik.com/fotos-gratis/sorrindo-alegremente-feminino-com-cabelo-loiro-vestido-casualmente-olhando-com-satisfacao_176420-15187.jpg',
        name: 'Emilly Azevedo',
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
        avatarUrl: 'https://img.freepik.com/fotos-gratis/alegre-mulher-envelhecida-media-com-cabelos-cacheados_1262-20859.jpg',
        name: 'Melissa Costa',
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
  
  
  return (
  <>
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
  </>
  )
}

export {Timeline};