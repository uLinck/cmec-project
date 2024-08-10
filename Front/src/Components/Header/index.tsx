import { Button } from "@mui/material"
import { Box } from "@mui/system"
import colors from "../../Styles/colors"
import Search from "../Search"
import logo from "../../Assets/Imgs/LogoWhiteM.svg"
import './index.css'
import { useEffect, useState } from "react"

type THeaderData = {
    bodyQuerySelector: string
}

export const Header = (data: THeaderData) => {
    const [backgroundColor, setBackgroundColor] = useState(colors.neutral80);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                //setBackgroundColor(entry.isIntersecting ? "transparent" : colors.neutral80)
            },
            { threshold: 0.2 }
        )

        const target = document.querySelector(data.bodyQuerySelector);
        if (target) observer.observe(target)

        return () => {
            if (target) observer.unobserve(target)
        }
    }, [])

    return (
        <Box
            sx={{
                top: 0,
                position: "sticky",
                zIndex: 1000,
                backgroundColor: backgroundColor,
                paddingY: "0.8rem",
                paddingX: "3rem",
                color: colors.neutral40,
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid",
                transition: "all 0.3s ease",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "70%",
                    gap: "3rem",
                }}
            >
                <img src={logo} alt="Logo" />
                <Box
                    sx={{
                        display: "flex",
                        gap: "2rem",
                    }}
                >
                    <a href="#" className="nav-item">Início</a>
                    <a href="#" className="nav-item">Quem somos</a>
                    <a href="#" className="nav-item">Infraestrutura</a>
                    <a href="#" className="nav-item">Ativ. Pedagógicas</a>
                    <a href="#" className="nav-item">Serviços</a>
                    <a href="#" className="nav-item">Ver escola</a>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                    width: "30%",
                    gap: "3rem"
                }}
            >
                <Search />
                <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                        textTransform: "none",
                        color: colors.neutral0,
                    }}
                >
                    Contato
                </Button>
            </Box>
        </Box>
    )
}
