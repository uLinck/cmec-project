import { Button } from "@mui/material"
import { Box } from "@mui/system"
import colors from "../../Styles/colors"
import Search from "../Search"
import logo from "../../Assets/Imgs/LogoWhiteM.svg"
import './index.css'

export const Header = () => {
    return (
        <Box
            sx={{
                top: 0,
                position: "sticky",
                zIndex: 1000,
                backgroundColor: colors.neutral80,
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
