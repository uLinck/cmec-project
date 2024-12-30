import { Box } from "@mui/system";
import { ReactComponent as BackpackIcon } from "../../../Assets/Imgs/Bolsinha.svg";

export const Backpack = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "block" },
        position: "absolute",
        top: "7%",
        left: "10%",
      }}
    >
      <BackpackIcon width="140px" height="140px" />
    </Box>
  );
};
