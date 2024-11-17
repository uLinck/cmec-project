import { Box, Button } from "@mui/material";
import colors from "../../../Styles/colors";
import { ReactComponent as BackpackIcon } from "../../../Assets/Imgs/Bolsinha.svg";
import { ReactComponent as InstituicaoIcon } from "../../../Assets/Imgs/InstituicaoIcon.svg";
import { ReactComponent as CooperativaIcon } from "../../../Assets/Imgs/CooperativaIcon.svg";
import { ReactComponent as VerEscolaIcon } from "../../../Assets/Imgs/VerEscolaIcon.svg";
import { Fade } from "react-awesome-reveal";

const styledButton = {
  textTransform: "none",
  display: "flex",
  justifyContent: "start",
  width: "100%",
  fontSize: 23,
  background: colors.neutral80,
  color: colors.accent80,
  borderRadius: "10px",
  marginBottom: "10px",
  "&:hover": {
    backgroundColor: colors.neutral60,
  },
};

export const AboutUs = () => {
  return (
    <Box
      sx={{
        maxWidth: "100vw",
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
            textIndent: "40px",
          }}
        >
          O Colégio Santa Luzia busca integrar-se à comunidade no processo de
          construção da cidadania, promovendo valores éticos como liberdade,
          respeito à diversidade e à individualidade, e proporcionando um ensino
          diferenciado e de excelência.
        </p>
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "200px",
          top: "10%",
          left: "80%",
        }}
      >
        <Fade direction="right" cascade damping={0.2} triggerOnce>
          <Button
            variant="contained"
            startIcon={<InstituicaoIcon display={"flex"} />}
            sx={styledButton}
          >
            Instituição
          </Button>
          <Button
            variant="contained"
            startIcon={<CooperativaIcon display={"flex"} />}
            sx={styledButton}
          >
            Cooperativa
          </Button>
          <Button
            variant="contained"
            startIcon={<VerEscolaIcon display={"flex"} />}
            sx={styledButton}
            onClick={() =>
              window.open(
                "https://bit.ly/ver-escola",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Ver escola
          </Button>
        </Fade>
      </Box>
    </Box>
  );
};
