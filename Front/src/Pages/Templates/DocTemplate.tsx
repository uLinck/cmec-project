import { Box } from "@mui/material"
import colors from "../../Styles/colors"

type TDocData = {
  category: string
  title: string
  description: React.ReactNode
  children: React.ReactNode
}

const Doc = (data: TDocData) => {
  return (
    <Box
      sx={{
        borderTopLeftRadius: "20px",
        backgroundColor: colors.neutral80,
        minHeight: "93vh",
        marginTop: "7vh",
        width: "100%",
        fontFamily: "Inter",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
        position: "relative"
      }}
    >
      <Box
        sx={{
          paddingTop: "20px",
          paddingLeft: "20px"
        }}
      >
        <span
          style={{
            color: colors.accent100
          }}
        >
          {data.category}
        </span>
        <h1 style={{ color: colors.neutral0, margin: "0.3em 0" }}>
          {data.title}
        </h1>
        <p
          style={{
            color: colors.neutral40,
            margin: 0,
            fontWeight: "500",
            fontSize: "16px"
          }}
        >
          {data.description}
        </p>
      </Box>

      <Box
        sx={{
          color: colors.neutral0,
          marginTop: "1.5em",
          paddingLeft: "20px"
        }}
      >
        {data.children}
      </Box>
    </Box>
  )
}

export default Doc
