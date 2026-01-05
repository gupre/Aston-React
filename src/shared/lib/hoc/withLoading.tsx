import { type ComponentType } from "react"

interface WithLoadingProps {
  isLoading: boolean;
}

export function withLoading<T extends object>(WrappedComponent: ComponentType<T>) {

    return (props: T & WithLoadingProps) => {
        const { isLoading, ...rest } = props;

        if (isLoading) {
            return <div>Загрузка...</div>
        } else {
            return <WrappedComponent {...(rest as T)} />
        }
    }
}