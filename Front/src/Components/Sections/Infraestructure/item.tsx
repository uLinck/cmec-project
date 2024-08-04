import { Box } from "@mui/material"
import colors from "../../../Styles/colors"

type TItemData = {
    icon: JSX.Element
    title: string
    description: string
}

export const Item = ({ icon, title, description }: TItemData) => {
    return (
        <Box
            sx={{
                display: "flex",
                width: "350px",
            }}
        >
            <Box sx={{
                width: "20%",
                display: "flex",
                alignItems: "start"
            }}>
                {icon}
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "80%",
                }}
            >
                <Box sx={{ color: colors.neutral0, fontSize: "1.2rem" }}><strong>{title}</strong></Box>
                <Box sx={{ color: colors.neutral10, fontSize: "0.9rem" }}>{description}</Box>
            </Box>
        </Box>
    )
}
