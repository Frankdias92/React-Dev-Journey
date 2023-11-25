import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';


export function Post({ author, publishedAt, content}) {
  const [comments, setComments] = useState([
    'You are Rock! 🤘'
  ]);
  
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
    locale: ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true});

  function handleNewComment() {
    event.preventDefault();

    // const newCommentText = event.target.comment.value;

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  };

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }


  return (
   <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <Avatar src={author.avatarUrl} alt={author.name}/>
        <div className={styles.authorInfo} >
          <strong>{author.name}</strong>
          <span>{author.role}</span>
        </div>
      </div>

      <time title={publishedDateFormatted} dateTime='24-11-2023 21:53:30'>
        {publishedDateRelativeToNow}
      </time>
    </header>


    <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'text') {
            return <p>{line.content}</p>
          } else if (line.type === 'link') {
            return <p><a href="#">{line.content}</a></p>
          }
        })}
    </div>


    <form onSubmit={handleNewComment} className={styles.commentForm}>
      <strong>Leave a comment</strong>

      <textarea
        name='comment'
        placeholder='Leave a comment here'
        value={newCommentText}
        onChange={handleNewCommentChange}
      />

      <footer>
        <button type='submit'>Send Commit</button>
      </footer>
    </form>

    <div className={styles.commentList} >
      {comments.map(comment => {
        return <Comment content={comment}/>
      })}
    </div>
   </article>
  )
}