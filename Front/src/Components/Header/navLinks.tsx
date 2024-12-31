import { useCallback } from "react";
import { Box } from "@mui/system";
import { sxs } from "./sxs";

type NavLinksProps = {
  insideBurger?: boolean;
  afterNavigationCallback?: () => void;
};

export const NavLinks = (props: NavLinksProps) => {
  const navLinks: Section[] = [
    { id: "quem-somos", name: "Quem somos" },
    { id: "infraestrutura", name: "Infraestrutura" },
    { id: "atividades", name: "Ativ. Pedagógicas" },
    { id: "servicos", name: "Serviços" },
  ];

  return (
    <Box sx={props.insideBurger ? sxs.navLinksInsideBurger : sxs.navLinks}>
      {navLinks.map((section) => (
        <NavLink section={section} navLinksProps={props} />
      ))}
      <a
        href="https://bit.ly/ver-escola"
        target="_blank"
        rel="noopener noreferrer"
        className={props.insideBurger ? "nav-item-burger" : "nav-item"}
        aria-label="ver escola"
      >
        Ver escola
      </a>
    </Box>
  );
};

type Section = {
  id: string;
  name: string;
};

type NavLinkProps = {
  section: Section;
  navLinksProps: NavLinksProps;
};

export const NavLink = (props: NavLinkProps) => {
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
    <a
      href="#!"
      onClick={(e) => {
        e.preventDefault();
        handleScroll(props.section.id);
        if (
          props.navLinksProps.insideBurger &&
          props.navLinksProps.afterNavigationCallback
        )
          props.navLinksProps.afterNavigationCallback();
      }}
      className={
        props.navLinksProps.insideBurger ? "nav-item-burger" : "nav-item"
      }
      aria-label={props.section.id}
      key={props.section.id}
    >
      {props.section.name}
    </a>
  );
};
