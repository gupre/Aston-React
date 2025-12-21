import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from './Modal.module.css'
import { Button } from "../Button/Button";

interface IModalProps {
  title?: string;
  onClose: () => void;
  children: ReactNode;
}


export function Modal({title, onClose, children}: IModalProps) {
    const portalRoot = document.getElementById('portal-root')

    if (!portalRoot) {
        return null
    }
    return createPortal(
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{title}</h3>                   
                    <Button className={styles.close} onClick={onClose}>x</Button>
                </div>
                <div className={styles.content}>
                    {children}
                </div>                
            </div>
        </div>,
        portalRoot)
}   