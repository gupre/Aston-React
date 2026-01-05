import type { PropsWithChildren } from 'react';
import styles from './Modal.module.css';

export function ModalBody({ children }: PropsWithChildren) {
  return <div className={styles.content}>{children}</div>;
}
