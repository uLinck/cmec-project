import { Box } from "@mui/material";
import colors from "../../../Styles/colors";
import { ReactComponent as BackpackIcon } from "../../../Assets/Imgs/Bolsinha.svg";

export const AboutUs = () => {
  return (
    <Box
      sx={{
        maxWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "7rem",
        paddingX: "4rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignSelf: "center",
          width: "60%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "7%",
            left: "10%",
          }}
        >
          <BackpackIcon width="140px" height="140px" />
        </Box>
        <h1
          style={{
            color: colors.accent100,
            marginBottom: "0rem",
            fontWeight: "normal",
          }}
        >
          Quem Somos?
        </h1>
        <p
          style={{
            color: colors.neutral0,
            marginBottom: "4rem",
            fontSize: "24px",
            fontWeight: "normal",
            width: "40vw",
            textIndent: "40px"
          }}
        >
          O Colégio Santa Luzia busca integrar-se à comunidade no processo de
          construção da cidadania, promovendo valores éticos como liberdade,
          respeito à diversidade e à individualidade, e proporcionando um ensino
          diferenciado e de excelência.
        </p>
      </Box>
    </Box>
  );
};
