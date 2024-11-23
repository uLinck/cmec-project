import { Box } from "@mui/material"
import colors from "../../../../../Styles/colors"

type TCard = {
  title: string
  tags: string[]
}
export const Card = ({ title, tags }: TCard) => {
  return (
    <Box
      sx={{
        width: "200px",
        height: "300px",
        background:
          "linear-gradient(172.82deg, #003688 10.63%, #E4ED80 207.01%)",
        borderRadius: "15px"
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <Box
          sx={{
            marginTop: "10px",
            "&::after": {
              content: '""',
              display: "block",
              width: "130px",
              height: "1px",
              backgroundColor: colors.accent80,
              margin: "8px auto 0"
            }
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              color: colors.accent80,
              fontWeight: 400,
              margin: 0,
              textAlign: "center"
            }}
          >
            {title}
          </h3>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "10px",
            fontSize: "20px"
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start"
            }}
          >
            {tags.map(tag => (
              <span
                style={{
                  marginBottom: "2px"
                }}
              >
                {tag}
              </span>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
