import { Box, Typography } from "@mui/material";
import colors from "../../../Styles/colors";
import { Service } from "./service";
import { Van } from "@phosphor-icons/react";
import { Fade } from "react-awesome-reveal";

export const UsefulServices = () => {
  return (
    <Box
      sx={{
        maxWidth: "100vw",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        paddingY: "30vh",
        paddingX: "1em",
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
        <h1
          style={{
            color: colors.accent100,
            marginBottom: "1rem",
            fontWeight: "normal",
          }}
        >
          Serviços Úteis
        </h1>
        <Typography
          sx={{
            color: colors.neutral0,
            fontSize: { xs: "1em", md: "20px" },
            textIndent: { xs: "20px", md: "40px" },
          }}
        >
          Em nossa escola, disponibilizamos alguns serviços que podem ser úteis
          para o aluno, a fim de que ele tenha uma experiência melhor conosco!
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "fit-content" },
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          marginTop: { xs: "1.5em", md: undefined },
          gap: "3rem",
        }}
      >
        <Fade
          direction="up"
          cascade
          damping={0.2}
          triggerOnce
          style={{ width: "100%" }}
        >
          <Service
            icon={<Van size={60} color={colors.accent100} />}
            name="Van Escolar"
            personName="Severo Tur"
            contacts={["(51) 3432-0212", "(51) 3106-3217", "(51) 9 9125-7619"]}
          />
          <Service
            icon={<Van size={60} color={colors.accent100} />}
            name="Van Escolar"
            personName="Laércio"
            contacts={["(51) 9 9652-4683", "(51) 9 8431-7455"]}
          />
        </Fade>
      </Box>
    </Box>
  );
};
