import { Box } from "@mui/material";
import logo from "../../Assets/Imgs/LogoWhiteM.svg";
import colors from "../../Styles/colors";
import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import "./index.css";

export const Footer = () => {
  return (
    <Box
      sx={{
        paddingBottom: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#FF",
      }}
    >
      <img src={logo} alt="Logo" />
      <Box
        sx={{
          display: "flex",
          gap: "3rem",
          marginY: "2rem",
        }}
      >
        <Box
          sx={{
            color: colors.neutral20,
            textAlign: "center",
          }}
        >
          <h3 style={{ color: colors.accent100 }}>Dúvidas frequentes</h3>
          <p style={{ margin: "0.8rem 0 0.8rem 0" }}>Como faço a matrícula?</p>
          <p style={{ margin: "0.8rem 0 0.8rem 0" }}>Tem ensino médio?</p>
          <p style={{ margin: "0.8rem 0 0.8rem 0" }}>Tem ensino infantil?</p>
          <p style={{ margin: "0.8rem 0 0.8rem 0" }}>Como é o colégio?</p>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: colors.neutral20,
          }}
        >
          <h3 style={{ color: colors.accent100 }}>Entre em contato</h3>
          <a
            target="_blank"
            href="https://www.facebook.com/CmecSantaLuzia68/?locale=pt_BR"
            className="facebookLogo"
            rel="noreferrer"
          >
            <FacebookLogo size={42} />
          </a>
          <a
            target="_blank"
            href="https://wa.me/5551985940218"
            className="whatsappLogo"
            rel="noreferrer"
          >
            <WhatsappLogo size={42} />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/cmecsantaluzia/"
            className="instagramLogo"
            rel="noreferrer"
          >
            <InstagramLogo size={42} />
          </a>
          <h4
            style={{
              color: colors.accent80,
              marginBottom: "0",
              lineHeight: "1",
            }}
          >
            Ou ligue para escola:
          </h4>
          <h4
            style={{ color: colors.primary60, marginTop: "0", lineHeight: "2" }}
          >
            (51) 3600-2827
          </h4>
        </Box>
      </Box>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d442545.88328442804!2d-51.31121246392472!3d-29.939467052027947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951973ff91426373%3A0x49750842fa8280f9!2sCMEC%20College%20Santa%20Luzia!5e0!3m2!1sen!2sbr!4v1726445013707!5m2!1sen!2sbr"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Box
        sx={{
          marginY: "2rem",
          borderBottom: "2px solid #FFF",
          width: "10%",
          height: "2px",
        }}
      >
        {" "}
      </Box>
      <p style={{ margin: "0", color: "#FFF" }}>© Colégio CMEC Santa Luzia</p>
    </Box>
  );
};
