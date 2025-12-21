import { useTheme } from "../shared/lib/theme/useTheme";
import { Button } from "../shared/ui/Button/Button";

export function ThemeSwitcher() {
    const {theme, toggleTheme} = useTheme()

    return <Button className={theme} onClick={toggleTheme}>Сменить тему</Button>
}   