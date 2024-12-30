import { Box, Button, Typography } from "@mui/material";
import colors from "../../../Styles/colors";
import { ReactComponent as InstituicaoIcon } from "../../../Assets/Imgs/InstituicaoIcon.svg";
import { ReactComponent as CooperativaIcon } from "../../../Assets/Imgs/CooperativaIcon.svg";
import { ReactComponent as VerEscolaIcon } from "../../../Assets/Imgs/VerEscolaIcon.svg";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import { Backpack } from "./backpack";

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
  const navigateTo = useNavigate();
  return (
    <Box
      sx={{
        maxWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        gap: { xs: undefined, md: "7rem" },
        paddingX: { xs: "1em", md: "4rem" },
        overflow: "hidden",
        position: "relative",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignSelf: "center",
          width: { xs: "100%", md: "60%" },
        }}
      >
        <Backpack />
        <h1
          style={{
            color: colors.accent100,
            marginBottom: "0rem",
            fontWeight: "normal",
          }}
        >
          Quem Somos?
        </h1>
        <Typography
          sx={{
            color: colors.neutral0,
            marginTop: { xs: "0.7em", md: undefined },
            marginBottom: "2rem",
            fontSize: { xs: "18px", md: "20px" },
            fontWeight: "normal",
            width: { xs: "100%", md: "40vw" },
            textIndent: { xs: "20px", md: "40px" },
          }}
        >
          O Colégio Santa Luzia busca integrar-se à comunidade no processo de
          construção da cidadania, promovendo valores éticos como liberdade,
          respeito à diversidade e à individualidade, e proporcionando um ensino
          diferenciado e de excelência.
        </Typography>
      </Box>
      <Box
        sx={{
          position: { xs: undefined, md: "absolute" },
          width: "200px",
          top: { xs: undefined, md: "10%" },
          left: { xs: undefined, md: "80%" },
        }}
      >
        <Fade direction="right" cascade damping={0.2} triggerOnce>
          <Button
            variant="contained"
            startIcon={<InstituicaoIcon display={"flex"} />}
            sx={styledButton}
            onClick={() => navigateTo("modulo/colaboradores/instituicao")}
          >
            Instituição
          </Button>
          <Button
            variant="contained"
            startIcon={<CooperativaIcon display={"flex"} />}
            sx={styledButton}
            onClick={() => navigateTo("modulo/colaboradores/cooperativa")}
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
                "noopener,noreferrer",
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
