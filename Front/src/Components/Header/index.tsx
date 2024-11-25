import { Button } from "@mui/material";
import { Box } from "@mui/system";
import colors from "../../Styles/colors";
import Search from "../Search";
import logo from "../../Assets/Imgs/LogoWhiteM.svg";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CalendarioIcon } from "../../Assets/Imgs/Calendario.svg";

export const Header = () => {
  const navigateTo = useNavigate();
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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
          <a
            href="#!"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("quem-somos");
            }}
            className="nav-item"
          >
            Quem somos
          </a>
          <a
            href="#!"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("infraestrutura");
            }}
            className="nav-item"
          >
            Infraestrutura
          </a>
          <a
            href="#!"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("atividades");
            }}
            className="nav-item"
          >
            Ativ. Pedagógicas
          </a>
          <a
            href="#!"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("servicos");
            }}
            className="nav-item"
          >
            Serviços
          </a>
          <a
            href="https://bit.ly/ver-escola"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item"
          >
            Ver escola
          </a>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          width: "30%",
          gap: "3rem",
        }}
      >
        {/* <Search /> */}
        <Button
          variant="outlined"
          color="primary"
          sx={{
            textTransform: "none",
            color: colors.neutral0,
          }}
          onClick={(e) => {
            e.preventDefault();
            handleScroll("footer");
          }}
        >
          Contato
        </Button>
      </Box>
    </Box>
  );
};
