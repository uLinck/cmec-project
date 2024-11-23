import { Box } from "@mui/material"
import colors from "../../Styles/colors"

type TCalendarioData = {
  children: React.ReactNode
  title: string
  subtitle: string
}
export const CalendarioTemplate = ({
  children,
  title,
  subtitle
}: TCalendarioData) => {
  return (
    <Box
      sx={{
        borderTopLeftRadius: "20px",
        background: "linear-gradient(to bottom, #001f3f, #003366)",
        width: "100%",
        minHeight: "93vh",
        marginTop: "7vh",
        fontFamily: "Inter",
        position: "relative",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Box
        sx={{
          paddingLeft: "20px"
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            color: colors.neutral0
          }}
        >
          <h2
            style={{
              fontWeight: 400,
              fontSize: "28px",
              lineHeight: "30px",
              marginBottom: 0
            }}
          >
            {title}
          </h2>

          <p
            style={{
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "19.2px",
              textAlign: "center"
            }}
          >
            {subtitle}
          </p>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Box
            sx={{
              color: colors.neutral0,
              marginTop: "1.5em",
              paddingLeft: "20px",
              width: "700px",
              display: "flex",
              justifyContent: "space-between",
              gap: "40px",
              flexWrap: "wrap",
              height: "100%"
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
