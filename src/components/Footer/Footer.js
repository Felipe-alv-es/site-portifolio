import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import ContactForm from "./ContactForm.js";
import { navbarOptions } from "../../assets/utils/navbarOptions.tsx";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/images/Logos/FelitLogo.png";
import {
  getContainerStyles,
  getTitleStyle,
  getSubtitleStyle,
} from "./Footer.styles.ts";

const Footer = () => {
  // const [hasCopied, setHasCopied] = useState(false);

  // const handleOnClick = () => {
  //   return () => {
  //     navigator.clipboard.writeText("felipe.alv14@hotmail.com");
  //     setHasCopied(true);
  //     setTimeout(setHasCopied, 2000, false);
  //   };
  // };

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
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{ width: "35%", height: "fit-content" }}
          component="img"
          src={Logo}
          alt="Man avatar generic image"
        />
        <Box
          sx={{
            padding: "32px",
            "> ul": {
              listStyle: "none",
              "> li": {
                margin: "16px 0px 16px 0px",
                "> *": {
                  textDecoration: "none",
                  color: "white",
                },
              },
            },
          }}
        >
          <Typography
            sx={{
              color: "#089cd4",
              typography: "h6",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            Menu
          </Typography>
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
          <Typography
            sx={{
              color: "#089cd4",
              typography: "h6",
              fontWeight: "bold",
              marginBottom: "16px",
              padding: "32px 0px 0px 0px",
            }}
          >
            Redes Sociais
          </Typography>
          <Box
            sx={{
              "> ul": {
                listStyle: "none",
                "> li": {
                  margin: "16px 0px 16px 0px",
                  ">*": {
                    textDecoration: "none",
                    color: "white",
                  },
                },
              },
            }}
          >
            <ul>
              <li>
                <HashLink>Linkedin</HashLink>
              </li>
              <li>
                <HashLink>WhatsApp</HashLink>
              </li>
              <li>
                <HashLink>Tiktok</HashLink>
              </li>
            </ul>
          </Box>
        </Box>
        <Box sx={{ marginLeft: "16px" }}>
          <Typography
            sx={{
              color: "#089cd4",
              typography: "h6",
              fontWeight: "bold",
              marginBottom: "16px",
              padding: "32px 0px 0px 0px",
            }}
          >
            Contato
          </Typography>
          <Box
            sx={{
              "> ul": {
                listStyle: "none",
                "> li": {
                  margin: "16px 0px 16px 0px",
                  ">*": {
                    textDecoration: "none",
                    color: "white",
                  },
                },
              },
            }}
          >
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
