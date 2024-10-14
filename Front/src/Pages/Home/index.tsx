import { Box } from "@mui/material";
import { Infraestructure } from "../../Components/Sections/Infraestructure";
import { PedagogicalActivities } from "../../Components/Sections/PedagogicalActivities";
import colors from "../../Styles/colors";
import { Header } from "../../Components/Header";
import { AboutUs } from "../../Components/Sections/AboutUs";

const Home = () => {
  return (
    <Box
      sx={{
        maxWidth: "100vw",
      }}
    >
      <Header />
      <Box sx={{ height: "100vh" }} />
      <Box
        id="body"
        sx={{
          background: `linear-gradient(20deg, ${colors.neutral80} 0%, ${colors.neutral60} 50%, ${colors.primary60} 100%)`,
        }}
      >
        <AboutUs />
        <Infraestructure />
        <Box sx={{ height: "30vh" }} />
        <PedagogicalActivities />
        <Box sx={{ height: "100vh" }} />
      </Box>
    </Box>
  );
};

export default Home;
