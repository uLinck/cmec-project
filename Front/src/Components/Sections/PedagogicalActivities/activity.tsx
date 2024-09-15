import { Box } from "@mui/material"
import colors from "../../../Styles/colors"

export type TActivityData = {
    icon: JSX.Element
    title: string
    description: string
}

export const Activity = (data: TActivityData) => {
    return (
        <Box
            sx={{
                backgroundColor: colors.primary60,
                padding: "2.5rem",
                gap: "2.5rem",
                color: colors.neutral0,
                maxWidth: "55%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                borderRadius: "2rem",
            }}
        >
            <Box>
                {data.icon}
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <h1 style={{ lineHeight: "0em" }}>{data.title}</h1>
                <p>{data.description}</p>
            </Box>
        </Box>
    )
}
