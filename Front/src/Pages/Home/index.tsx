import { Box } from "@mui/material";
import { Infraestructure } from "../../Components/Sections/Infraestructure";

const Home = () => {
    return (
        <Box
            sx={{
                maxWidth: "100vw"
            }}
        >
            <Box sx={{ height: "100vh" }} />
            <Box sx={{ height: "100vh" }} />
            <Infraestructure />
            <Box sx={{ height: "100vh" }} />
        </Box>
    )
}

export default Home;
