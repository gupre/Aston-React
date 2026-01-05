import { createContext } from "react";

export interface IModalContextValue {
    onClose: () => void;
}

export const ModalContext = createContext<IModalContextValue | null>(null);