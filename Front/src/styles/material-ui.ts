import { createTheme } from "@mui/system";
import colors from "./colors";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: colors.primary80,
            light: colors.primary60,
            dark: colors.primary100,
            contrastText: colors.neutral0
        },
        secondary: {
            main: colors.accent100,
            light: colors.accent80,
            dark: colors.accent100,
            contrastText: colors.neutral0
        },
    }
})

export default theme
