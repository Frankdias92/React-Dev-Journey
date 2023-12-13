import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { TrashSimple, ThumbsUp } from '@phosphor-icons/react';


interface CommentProps {
  avatarUrl: string;
  name: string;
  content: string[];
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, avatarUrl, name, onDeleteComment }: CommentProps ) {
 
 const [likeCount, setLikeCount] = useState(0); 
 

 function handleLikeComment() {
  setLikeCount((state) => {
    return state + 1
  });
 }

  function handleDeleteComment() {
    onDeleteComment(content[0]);
  }

  return (
    
    <div className={styles.comment}>

      <Avatar hasBorder={false} src={avatarUrl} alt={'Photo of user'} />

      <div className={styles.commentBox} >
        <div className={styles.commentContent} >
          <header>
            <div className={styles.authorAndTime} >
              <strong>{name}</strong>
              <time title='23 de novembro as 17:23' dateTime='2023-11-23 17:24:30'>Publicado há 1h</time>
            </div>

            <button onClick={handleDeleteComment} title='Delete comment'>
              <TrashSimple size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}