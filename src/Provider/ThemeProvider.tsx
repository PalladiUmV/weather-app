import { ReactNode, FC, useState } from "react"
import { Theme, ThemeContext } from "../context/ThemeContext"
import { changeCssRootVariables } from "../model/ChangeCssRootVariables"
import { storage } from "../model/Storage"

interface Props {
    children: ReactNode;
}


export const ThemeProvider: FC<Props> = ({ children, ...props }) => {
    const [theme, setTheme] = useState<Theme>(
        storage.getItem('theme') || Theme.LIGHT
    );
    changeCssRootVariables(theme);
    const changeTheme = (theme: Theme) => {
        storage.setItem('theme', theme);
        setTheme(theme);
        changeCssRootVariables(theme);
    }
    return (
        <ThemeContext.Provider
            value={{
                theme,
                changeTheme,
            }}
            {...props}
        >
            {children}
        </ThemeContext.Provider>
    )
}