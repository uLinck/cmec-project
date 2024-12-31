import { Box, Typography } from "@mui/material";
import colors from "../../../Styles/colors";
import { TActivityData } from "./activity";
import ReforcoEscolar from "../../../Assets/Imgs/ReforcoEscolar.png";
import SistemaSER from "../../../Assets/Imgs/SistemaSER.png";
import RecreioDirigido from "../../../Assets/Imgs/RecreioDirigido.png";
import { Cards, CardsMobile } from "./cards";

export const PedagogicalActivities = () => {
  const activities: TActivityData[] = [
    {
      icon: <img src={ReforcoEscolar} alt="Reforço Escolar" />,
      title: "Reforço Escolar",
      description:
        "As turmas do 1º ao 5º ano contam com atividades de reforço escolar para sanar dificuldades apresentadas na aprendizagem.",
    },
    {
      icon: <img src={SistemaSER} alt="Material Didático: Sistema Ser" />,
      title: "Material Didático: Sistema SER",
      description:
        "O SER dispõe de materiais didáticos diferenciados, elaborados por renomados autores com o objetivo de promover a formação integral, preparando os alunos para a universidade e os desafios do futuro.Também oferece recursos tecnológicos no Portal SER e uma série de conteúdos que vão além da sala de aula.",
    },
    {
      icon: <img src={RecreioDirigido} alt="Recreio Dirigido" />,
      title: "Recreio Dirigido",
      description:
        "Os alunos contam com acompanhamento de uma recreacionista ao longo do período de intervalo. São ofertadas atividades direcionadas em que os alunos optam para fazer durante este momento.",
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "7rem",
        paddingX: { xs: "1em", md: "5rem" },
        overflow: "hidden",
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
          Atividades Pedagógicas
        </h1>
        <Typography
          sx={{
            color: colors.neutral0,
            fontSize: { xs: "1em", md: "20px" },
            textIndent: { xs: "20px", md: "40px" },
          }}
        >
          Na nossa escola, as atividades pedagógicas são planejadas para
          promover o aprendizado e desenvolvimento dos alunos. Com exercícios
          interativos, projetos inovadores e jogos educativos, tornamos o ensino
          eficaz e envolvente. Venha conhecer nosso método!
        </Typography>
      </Box>
      {Cards(activities)}
      {CardsMobile(activities)}
    </Box>
  );
};
