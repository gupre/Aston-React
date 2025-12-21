import type { ReactNode } from "react"
import styles from "./Button.module.css"

interface IButton {
    onClick?: () => void, 
    children: ReactNode, 
    type?: "submit" | "reset" | "button" | undefined, 
    disabled?: boolean, 
    className?: string
}

export function Button({onClick, children, type = "button", disabled = false, className}: IButton) {
    return (
        <button onClick={onClick} 
                type={type} 
                disabled={disabled} 
                className={`${styles.button} ${className ?? ""}`}
                >
                {children}
        </button>
    )
}