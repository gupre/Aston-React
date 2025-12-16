import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
           <h1 className={styles.item}>Посты и комментарии</h1> 
        </header>
    )
}