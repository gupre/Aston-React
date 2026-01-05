import { memo } from "react";
import styles from "./PostLengthFilter.module.css";

interface IPostLengthFilterProps {
  value: number;
  onChange: (value: number) => void;
}

export const PostLenghtFilter = memo(({value, onChange}: IPostLengthFilterProps) => {
    return (
      <div className={styles.filter}>
        <label className={styles.label}>
          Минимальная длина заголовка
        </label>

        <input
          type="number"
          min={0}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className={styles.input}
        />
      </div>
    );
})