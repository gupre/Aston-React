import { type ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from './Modal.module.css'
import { ModalContext } from "./ModalContext";

interface IModalProps {
  onClose: () => void;
  children: ReactNode;
}

export function Modal({onClose, children}: IModalProps)  {
    const portalRoot = document.getElementById('portal-root')

    if (!portalRoot) {
        return null
    }
    
    return createPortal(
        <ModalContext.Provider value={{onClose}}>
            <div className={styles.overlay} onClick={onClose}>
                <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                    {children}              
                </div>
            </div>
        </ModalContext.Provider>,
        portalRoot)
}   