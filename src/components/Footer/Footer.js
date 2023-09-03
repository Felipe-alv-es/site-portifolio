import React from "react";
import { Box, Divider, Link, Typography } from "@mui/material";
import ContactForm from "./ContactForm.js";
import { navbarOptions } from "../../assets/utils/navbarOptions.tsx";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/images/Logos/FelitLogo.png";
import {
  getContainerStyles,
  getTitleStyle,
  getSubtitleStyle,
  getFooterMenuStyle,
  getListStyle,
  getlistTitleStyle,
} from "./Footer.styles.ts";

const Footer = () => {
  return (
    <Box sx={getContainerStyles}>
      <Typography sx={getTitleStyle}>Fale Comigo</Typography>
      <Typography sx={getSubtitleStyle}>
        Sobrou alguma dúvida? Preencha os campos abaixo com os seguintes dados
        que em breve entraremos em contato.
      </Typography>
      <ContactForm />
      <Box sx={{ m: 5 }} />
      <Divider sx={{ background: "white" }} />
      <Box sx={getFooterMenuStyle}>
        <Box
          sx={{ width: "35%", height: "fit-content" }}
          component="img"
          src={Logo}
          alt="Man avatar generic image"
        />
        <Box sx={getListStyle}>
          <Typography sx={getlistTitleStyle}>Menu</Typography>
          <ul>
            {navbarOptions.map((item) => (
              <li key={item.text}>
                <HashLink smooth to={`#${item.text}`}>
                  {item.text}
                </HashLink>
              </li>
            ))}
          </ul>
        </Box>
        <Box>
          <Typography sx={getlistTitleStyle}>Meus Links</Typography>
          <Box sx={getListStyle}>
            <ul>
              <li>
                <HashLink>Linkedin</HashLink>
              </li>
              <li>
                <HashLink>Github</HashLink>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener"
                  href="https://drive.google.com/file/d/1vovf9y0WnbG-WpydjwhkRl1Vz1eBJJ-r/view?usp=sharing"
                >
                  Curriculo
                </Link>
              </li>
            </ul>
          </Box>
        </Box>
        <Box>
          <Typography sx={getlistTitleStyle}>Contato</Typography>
          <Box sx={getListStyle}>
            <ul>
              <li>
                <HashLink>{"(11) 98166-9996"}</HashLink>
              </li>
              <li>
                <HashLink>felipe.alv14@hotmail.com</HashLink>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
