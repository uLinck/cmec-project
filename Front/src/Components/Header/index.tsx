import { Box } from "@mui/system";
import "./index.css";
import { sxs } from "./sxs";
import { Hamburger } from "./hamburger";
import { NavLinks } from "./navLinks";
import { useCallback } from "react";
import { Button } from "@mui/material";
import colors from "../../Styles/colors";

export const ContactButton = () => {
  const handleScroll = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return (
    <Button
      variant="outlined"
      color="primary"
      sx={{
        textTransform: "none",
        color: colors.neutral0,
        width: "fit-content",
      }}
      onClick={(e) => {
        e.preventDefault();
        handleScroll("footer");
      }}
    >
      Contato
    </Button>
  );
};

export const Header = () => {
  return (
    <Box sx={sxs.header}>
      <Box sx={sxs.logo} />
      <NavLinks />
      <Box sx={sxs.rightSideContainer}>
        {/* <Search /> */}
        <ContactButton />
      </Box>
      <Hamburger />
    </Box>
  );
};
