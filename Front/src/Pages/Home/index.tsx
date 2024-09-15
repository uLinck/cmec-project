import { Box } from "@mui/material";
import { Infraestructure } from "../../Components/Sections/Infraestructure";
import { UsefulServices } from "../../Components/Sections/UsefulServices";

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
            <UsefulServices />
        </Box>
    )
}

export default Home;
