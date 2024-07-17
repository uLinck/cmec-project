import { Box } from "@mui/material";
import { getHighlightedText } from "../../Helpers/textHelper";
import { File } from "phosphor-react";
import colors from "../../Styles/colors";

type TSuggestion = {
    icon?: JSX.Element
    description: string
    search: string
}

export const Suggestion = ({ icon = <File size={20} />, description, search }: TSuggestion) => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            color: colors.neutral0,
            gap: "0.5rem",
            paddingY: "0.5rem",
            paddingX: "1rem",
            borderRadius: "0.5rem",
            fontSize: "1.05em",
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
