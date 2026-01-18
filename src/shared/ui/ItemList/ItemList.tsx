import type { ReactNode } from "react"
import styles from "./ItemList.module.css";

interface ItemListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  keyExtractor: (item: T) => string | number;
}

export function ItemList<T>({items, renderItem, keyExtractor}: ItemListProps<T>) {
    return (
        <div className={styles.list}>
            {items.map(item => (
                <div key={keyExtractor(item)} className={styles.item}>
                    {renderItem(item)}
                </div>
            ))}
        </div>
    )
}