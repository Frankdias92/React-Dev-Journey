
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react'

interface SidebarProps {
  name: string;
  profileImageSrc: string;
  role: string;
}



export function Sidebar({ name, profileImageSrc, role}:SidebarProps) {

  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://c4.wallpaperflare.com/wallpaper/632/34/549/technology-monitor-alpha-coders-binary-wallpaper-preview.jpg" alt="" />

      
      <div className={styles.profile}>
        <Avatar src={`https://github.com/${profileImageSrc}.png`}/>

        <strong>{name}</strong>
        <span>{role}</span>
      </div>

      <footer className={styles.sidebarfooter}>
        <a  href="/profile">
        <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>

    </aside>
  )
}