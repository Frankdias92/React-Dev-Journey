import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { TrashSimple, ThumbsUp } from '@phosphor-icons/react';

import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';


interface CommentProps {
  avatarUrl: string;
  name: string;
  content: string[];
  publishedAt?: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, avatarUrl, publishedAt, name, onDeleteComment }: CommentProps ) {
 
 const [likeCount, setLikeCount] = useState(0); 
 

 function handleLikeComment() {
  setLikeCount((state) => {
    return state + 1
  });
 }

  function handleDeleteComment() {
    onDeleteComment(content[0]);
  }

  const publishedDateFormatted = format(new Date(publishedAt || ''), "d 'de' LLLL 'às' HH:mm", {
    locale: ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(new Date(publishedAt || ''), { locale: ptBR });


  return (
    
    <div className={styles.comment}>

      <Avatar hasBorder={false} src={avatarUrl} alt={'Photo of user'} />

      <div className={styles.commentBox} >
        <div className={styles.commentContent} >
          <header>
            <div className={styles.authorAndTime} >
              <strong>{name}</strong>
              <time title={publishedDateFormatted} dateTime='24-11-2023 21:53:30'>
                {publishedDateRelativeToNow}
              </time>
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