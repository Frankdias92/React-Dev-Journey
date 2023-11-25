import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { TrashSimple,ThumbsUp } from '@phosphor-icons/react';

export function Comment(props) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/101531465?v=4.png" />

      <div className={styles.commentBox} >
        <div className={styles.commentContent} >
          <header>
            <div className={styles.authorAndTime} >
              <strong>Franklin</strong>
              <time title='23 de novembro as 17:23' dateTime='2023-11-23 17:24:30'>Publicado há 1h</time>
            </div>

            <button title='Delete comment'>
              <TrashSimple size={20} />
            </button>
          </header>

          <p>{props.content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}