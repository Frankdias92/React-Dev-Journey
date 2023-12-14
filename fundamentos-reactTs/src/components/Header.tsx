import styles from './Header.module.css';
import { CodeSimple } from 'phosphor-react';

export function Header() {
  return (
    <header className={styles.header}>
      <CodeSimple size={32} />
      <strong>CodeJourney</strong>
    </header>
  )
}
