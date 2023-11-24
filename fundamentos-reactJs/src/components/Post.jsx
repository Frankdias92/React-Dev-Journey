import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';


export function Post({ key, author, content, publishedAt}) {
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

      <time title='23 de novembro as 17:23' dateTime='2023-11-23 17:24:30'>Publicado há 1h</time>
    </header>


    <div className={styles.content}>
        {author.content}
    </div>


    <form className={styles.commentForm}>
      <strong>Leave a comment</strong>

      <textarea
        placeholder='Leave a comment here'
      />

      <footer>
        <button type='submit'>Send Commit</button>
      </footer>
    </form>

    <div className={styles.commentList} >
      <Comment />
      <Comment />
      <Comment />
    </div>
   </article>
  )
}