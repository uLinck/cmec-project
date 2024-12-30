import { useCallback } from "react";
import { Box } from "@mui/system";
import { sxs } from "./sxs";

type NavLinksProps = {
  insideBurger?: boolean;
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
        <NavLink
          id={section.id}
          name={section.name}
          insideBurger={props.insideBurger}
        />
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
  insideBurger?: boolean;
};

export const NavLink = (section: Section) => {
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
        handleScroll(section.id);
      }}
      className={section.insideBurger ? "nav-item-burger" : "nav-item"}
      aria-label={section.id}
      key={section.id}
    >
      {section.name}
    </a>
  );
};
