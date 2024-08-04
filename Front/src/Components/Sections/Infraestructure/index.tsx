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
            description: "Ao se matricularem, todos os nossos alunos recebem automaticamente a cobertura do Seguro Metlife."
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
                backgroundColor: colors.neutral100,
                maxWidth: "100vw",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    paddingY: "60vh",
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
                >
                    {items.map(item => <Item {...item} />)}
                </Fade>
            </Box>
        </Box>
    )
}
