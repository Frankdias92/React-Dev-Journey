import styles from './Post.module.css';

export function Post() {
  return (
   <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <img className={styles.avatar} src="https://github.com/Frankdias92.png" />
        <div className={styles.authorInfo} >
          <strong>UserName</strong>
          <span>Developer</span>
        </div>
      </div>

      <time title='23 de novembro as 17:23' dateTime='2023-11-23 17:24:30'>Publicado há 1h</time>
    </header>


    <div className={styles.content}>
      <p>preira linha de texto</p>
      <p><a href="#">algum link </a></p>
      <p>💪<a href="#">terceira linha de texto</a></p>
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
   </article>
  )
}