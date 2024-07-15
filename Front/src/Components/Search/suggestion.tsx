import { Box } from "@mui/material";
import { getHighlightedText } from "../../Helpers/textHelper";
import colors from "../../Styles/colors";

type TSuggestion = {
    icon: JSX.Element
    description: string
    search: string
}

export const Suggestion = ({ icon, description, search }: TSuggestion) => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "start",
            color: colors.neutral0,
            gap: "0.5rem",
            padding: "0.8rem 0.5rem",
            borderRadius: "0.5rem",
            transition: "background-color 0.2s ease",
            ":hover": {
                backgroundColor: colors.neutral60,
                cursor: "pointer"
            }
        }}>
            {icon}
            {getHighlightedText(description, search)}
        </Box>
    )
}
