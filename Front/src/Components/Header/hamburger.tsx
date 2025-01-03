import { Box, Drawer, IconButton } from "@mui/material";
import { List } from "@phosphor-icons/react";
import { useState } from "react";
import { ContactButton } from ".";
import colors from "../../Styles/colors";
import { NavLinks } from "./navLinks";
import { sxs } from "./sxs";

export const Hamburger = () => {
  const [open, setOpen] = useState(false);

  const toggleBurger = () => (event?: any) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };

  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
      }}
    >
      <IconButton
        edge="start"
        color="inherit"
        aria-label="Abrir menu"
        onClick={toggleBurger()}
      >
        <List color={colors.neutral10} size={32} />
      </IconButton>
      <Drawer
        anchor="right"
        variant="temporary"
        open={open}
        onClose={toggleBurger()}
        PaperProps={{
          sx: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "80vw", sm: "40vw" },
            height: "100vh",
            backgroundColor: colors.neutral80,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box sx={sxs.logo} />
          <NavLinks insideBurger afterNavigationCallback={toggleBurger()} />
          <ContactButton />
        </Box>
      </Drawer>
    </Box>
  );
};
