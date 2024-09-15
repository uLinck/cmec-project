import { Fade } from "react-awesome-reveal"
import { Books, CourtBasketball, DesktopTower } from "@phosphor-icons/react"
import { Item } from "./item"
import colors from "../../../Styles/colors"
import Box from '@mui/material/Box';
import { MetlifeIcon, RecreationalSquareIcon } from "../../../Helpers/customIcons";


export const Infraestructure = () => {
    const items = [
        {
            icon: <Books size={60} color={colors.accent100} />,
            title: "Biblioteca",
            description: "Coleção atualizada de recursos didáticos e literários, com acesso à internet."
        },
        {
            icon: <CourtBasketball size={60} color={colors.accent100} />,
            title: "Quadra Poliesportiva",
            description: "Adequada à prática de futsal, vôlei, basquete e diversos outros esportes!"
        },
        {
            icon: <DesktopTower size={60} color={colors.accent100} />,
            title: "Laboratório de informática",
            description: "Parque tecnológico para acesso à internet e desenvolvimento de trabalhos escolares."
        },
        {
            icon: <MetlifeIcon sx={{ fontSize: "60px" }} />,
            title: "Seguro Metlife",
            description: "Cobertura do Seguro Metlife à todos os alunos matriculados."
        },
        {
            icon: <RecreationalSquareIcon sx={{ fontSize: "60px", fill: colors.accent100 }} />,
            title: "Praça recreativa",
            description: "Área destinada a brincadeiras e atividades divertidas para a educação infantil."
        }
    ]

    return (
        <Box
            sx={{
                maxWidth: "100vw",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h1
                style={{
                    color: colors.accent100,
                    marginBottom: "4rem",
                    fontWeight: "normal"
                }}
            >
                Infraestrutura
            </h1>
            <Box
                sx={{
                    width: "1200px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "3rem",
                }}
            >
                <Fade
                    direction="up"
                    cascade
                    damping={0.2}
                    triggerOnce
                >
                    {items.map(item => <Item {...item} />)}
                </Fade>
            </Box>
        </Box >
    )
}
