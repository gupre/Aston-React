import styles from './Modal.module.css'
import { Button } from "../Button/Button";
import { useModal } from './useModal.tsx';
import type { PropsWithChildren } from 'react';

export function ModalHeader({children}: PropsWithChildren) {
    const {onClose} = useModal()
    return <>
        <div className={styles.header}>
            <h3 className={styles.title}>{children}</h3>                   
            <Button className={styles.close} onClick={onClose}>x</Button>
        </div>
    </>
}