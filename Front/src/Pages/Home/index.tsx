import { Box, Button } from "@mui/material";
import { Infraestructure } from "../../Components/Sections/Infraestructure";
import { PedagogicalActivities } from "../../Components/Sections/PedagogicalActivities";
import colors from "../../Styles/colors";
import { Header } from "../../Components/Header";
import { UsefulServices } from "../../Components/Sections/UsefulServices";
import { Footer } from "../../Components/Footer";
import { AboutUs } from "../../Components/Sections/AboutUs";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CalendarioIcon } from "../../Assets/Imgs/Calendario.svg";
const Home = () => {
  const navigateTo = useNavigate();
  return (
    <Box
      sx={{
        maxWidth: "100vw",
      }}
    >
      <Header />
      <button
        style={{
          padding: 0,
          borderRadius: "50px",
          margin: 0,
          display: "flex",
          background: "transparent",
          justifyContent: "center",
          position: "fixed",
          border: "none",
          bottom: "20px",
          left: 20,
          cursor: "pointer",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          zIndex: 9999,
        }}
        onClick={() => navigateTo("modulo/calendario/infantil/pre-quinto")}
      >
        <CalendarioIcon display={"flex"} />
      </button>
      <Box
        id="body"
        sx={{
          background: `linear-gradient(20deg, ${colors.neutral80} 0%, ${colors.neutral60} 50%, ${colors.primary60} 100%)`,
        }}
      >
        <Box id="quem-somos">
          <Box
            sx={{
              height: "60vh",
              backgroundImage: `url(/BannerImg.jpg), radial-gradient(circle, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8))`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></Box>

          <AboutUs />
        </Box>
        <Box id="infraestrutura">
          <Infraestructure />
        </Box>
        <Box id="atividades">
          <PedagogicalActivities />
        </Box>
        <Box id="servicos">
          <UsefulServices />
        </Box>
        <Box id="footer">
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
