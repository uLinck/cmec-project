import { Box } from "@mui/material"
import colors from "../../../Styles/colors"
import { Activity, TActivityData } from "./activity"
import { Fade } from "react-awesome-reveal"
import ReforcoEscolar from "../../../Assets/Imgs/ReforcoEscolar.png"
import SistemaSER from "../../../Assets/Imgs/SistemaSER.png"
import RecreioDirigido from "../../../Assets/Imgs/RecreioDirigido.png"

export const PedagogicalActivities = () => {
    const activities: TActivityData[] = [
        {
            icon: <img src={ReforcoEscolar} />,
            title: "Reforço Escolar",
            description: "As turmas do 1º ao 5º ano contam com atividades de reforço escolar para sanar dificuldades apresentadas na aprendizagem.",
        },
        {
            icon: <img src={SistemaSER} />,
            title: "Material Didático: Sistema SER",
            description: "O SER dispõe de materiais didáticos diferenciados, elaborados por renomados autores com o objetivo de promover a formação integral, preparando os alunos para a universidade e os desafios do futuro.Também oferece recursos tecnológicos no Portal SER e uma série de conteúdos que vão além da sala de aula.",
        },
        {
            icon: <img src={RecreioDirigido} />,
            title: "Recreio Dirigido",
            description: "Os alunos contam com acompanhamento de uma recreacionista ao longo do período de intervalo. São ofertadas atividades direcionadas em que os alunos optam para fazer durante este momento."
        },
    ]

    return (
        <Box
            sx={{
                maxWidth: "100vw",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                gap: "7rem",
                paddingX: "5rem",
                overflow: "hidden",
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
                <h1
                    style={{
                        color: colors.accent100,
                        marginBottom: "1rem",
                        fontWeight: "normal"
                    }}
                >
                    Atividades Pedagógicas
                </h1>
                <p
                    style={{
                        color: colors.neutral0,
                        fontSize: "1.3em"
                    }}
                >
                    Na nossa escola, as atividades pedagógicas são planejadas para promover o aprendizado e desenvolvimento dos alunos. Com exercícios interativos, projetos inovadores e jogos educativos, tornamos o ensino eficaz e envolvente. Venha conhecer nosso método!
                </p>
            </Box>
            {
                activities.map(
                    (ac, index) =>
                        <Fade
                            direction={index % 2 == 0 ? "left" : "right"}
                            damping={0.2}
                            triggerOnce
                            style={{
                                display: "flex",
                                justifyContent: index % 2 == 0 ? "start" : "end",
                            }}
                            fraction={0.5}
                            duration={1500}
                        >
                            <Activity {...ac} />)
                        </Fade>
                )
            }
        </Box>
    )
}
