import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://c4.wallpaperflare.com/wallpaper/632/34/549/technology-monitor-alpha-coders-binary-wallpaper-preview.jpg" alt="" />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/Frankdias92.png" />

        <strong>UserName</strong>
        <span>Developer</span>
      </div>

      <footer className={styles.sidebarfooter}>
        <a  href="#">
        <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>

    </aside>
  )
}