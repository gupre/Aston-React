import { useContext } from "react";
import { ModalContext } from "./ModalContext";

export const useModal = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error('Modal.<..> must be used inside Modal');
    }

    return context
}