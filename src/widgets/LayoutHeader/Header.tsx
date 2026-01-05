import { useState } from 'react';
import { ThemeSwitcher } from '../../features/ThemeSwitcher';
import { Button } from '../../shared/ui/Button/Button';
import { Modal } from '../../shared/ui/Modal/index';
import styles from './Header.module.css';

export function Header() {
    const [openModal, setOpenModal] = useState(false)
    const titleModal = "О проекте"
    const contentModal = `
      Это демонстрационное приложение для работы с постами и комментариями. 
      Цель проекта — показать базовые принципы работы React, контекстов, модальных окон и компонентов UI.
      Здесь реализованы:
      просмотр, добавление и редактирование постов,
      комментирование и обсуждение постов,
      смена светлой и тёмной темы,
      управление интерфейсом через модальные окна и кнопки.
      `;
    const author = "Автор: Анастасия Фёдорова"
    
    return (
        <header className={styles.header}>
           <h1 className={styles.title}>Посты и комментарии</h1> 
           <nav className={styles.nav}>
             <Button onClick={() => setOpenModal(!openModal)}>{titleModal}</Button>
             <ThemeSwitcher />
           </nav>
           {openModal && 
            <Modal onClose={() => setOpenModal(!openModal)}>
              <Modal.Header>{titleModal}</Modal.Header>
              <Modal.Body>
                {contentModal}
              </Modal.Body>
              <Modal.Footer>{author}</Modal.Footer>
            </Modal>}
        </header>
    )
}