import { Box } from "@mui/material";
import { Infraestructure } from "../../Components/Sections/Infraestructure";
import { PedagogicalActivities } from "../../Components/Sections/PedagogicalActivities";
import colors from "../../Styles/colors";
import { Header } from "../../Components/Header";
import { UsefulServices } from "../../Components/Sections/UsefulServices";
import { Footer } from "../../Components/Footer";
import { AboutUs } from "../../Components/Sections/AboutUs";
const Home = () => {
  return (
    <Box
      sx={{
        maxWidth: "100vw",
      }}
    >
      <Header />
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
              // Usando uma imagem de fundo com um gradiente para a vinheta
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat", // Impede a repetição da imagem
              backgroundSize: "cover",
            }}
          ></Box>

          <AboutUs />
        </Box>
        <Box id="infraestrutura">
          <Infraestructure />
        </Box>
        <Box sx={{ height: "30vh" }} />
        <Box id="atividades">
          <PedagogicalActivities />
        </Box>
        <Box id="servicos">
          <UsefulServices />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
