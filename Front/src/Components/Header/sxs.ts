import colors from "../../Styles/colors";
import logo from "../../Assets/Imgs/LogoWhiteM.svg";
import logoSmall from "../../Assets/Imgs/LogoWhiteSM.svg";

export const sxs = {
  header: {
    maxWidth: "100vw",
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
    gap: "3rem",
    justifyContent: { xs: "space-between", md: "center" },
  },
  navLinks: {
    display: { xs: "none", md: "flex" },
    alignItems: "center",
    width: "70%",
    gap: "2rem",
  },
  navLinksInsideBurger: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    width: "100%",
  },
  logo: {
    content: { xs: `url(${logoSmall})`, md: `url(${logo})` },
  },
  rightSideContainer: {
    display: { xs: "none", md: "flex" },
    alignItems: "center",
    justifyContent: "end",
    width: "30%",
    gap: "3rem",
  },
} as const;
