import { Box } from "@mui/material"
import colors from "../../Styles/colors"

type TDocData = {
    category: string
    title: string
    description: string
    children: React.ReactNode
}

const Doc = (data: TDocData) => {
    return (
        <Box
            sx={{
                borderTopLeftRadius: '20px',
                backgroundColor: colors.neutral80,
                height: '100%',
                maxHeight: '100vh',
                width: '100%',
                fontFamily: 'Inter',
                position: 'relative',
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "10px", // Ajusta a posição para fora do elemento
                    width: "10px",
                    height: "100%",
                    borderTopLeftRadius: '20px', // Aplica o border-radius no pseudo-elemento
                    background: `linear-gradient(to left, ${colors.neutral100}, transparent)`,
                    zIndex: -10,
                },
            }}
        >
            <Box sx={{
                paddingTop: '20px',
                paddingLeft: '20px',
            }}>
                <span
                    style={{
                        color: colors.accent100,
                    }}
                >{data.category}</span>
                <h1 style={{ color: colors.neutral0, margin: '0.3em 0' }}>{data.title}</h1>
                <p style={{ color: colors.neutral40, margin: 0, fontWeight: '500', fontSize: '16px' }}>{data.description}</p>
            </Box>

            <Box sx={{
                color: colors.neutral0,
                marginTop: '1.5em',
                paddingLeft: '20px',
            }}>
                {data.children}
            </Box>
        </Box>
    )
}

export default Doc
