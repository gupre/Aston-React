import styles from './Footer.module.css'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.item}>Учебный проект </div>
            <div className={styles.item}>React + TypeScript</div>
            <div className={styles.item}>Автор: Анастасия</div>
            <div className={styles.item}>2025</div>
        </footer>
    )
}