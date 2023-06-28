import { Box, Button, Icon, Typography } from "@mui/material";
import React from "react";
import {
  getContainerStyles,
  getSubtitleStyle,
  getFooterContentStyle,
  getFooterButtonStyle,
} from "./Footer.styles.ts";
import { FaReact } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";

const Footer = () => {
  return (
    <Box sx={getContainerStyles} id="Contato">
      <Box sx={getFooterContentStyle}>
        <Typography fontFamily={"roboto"} variant="h5" color={"#e7e7e7"}>
          Obrigado pela atenção!
        </Typography>
        <Box sx={getSubtitleStyle}>
          <Typography
            fontFamily={"sans-serif"}
            variant="subtitle2"
            color={"#e7e7e7"}
          >
            © 2023 by Felipe alves <br /> Criado com
            <Icon fontSize="small">
              <FaReact />
            </Icon>
            <Icon fontSize="small">
              <BiLogoJavascript />
            </Icon>
            <Icon fontSize="small">
              <BiLogoTypescript />
            </Icon>
            <Icon fontSize="small">
              <IoLogoCss3 />
            </Icon>
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography fontFamily={"roboto"} variant="h5" color={"#e7e7e7"}>
          Venha conversar!
        </Typography>
        <Typography
          fontFamily={"sans-serif"}
          variant="subtitle2"
          color={"#e7e7e7"}
        >
          Segue meu E-mail e Currículo <br />
        </Typography>
        <Button sx={getFooterButtonStyle} variant="outlined" size="small">
          Email
        </Button>
        <Button sx={getFooterButtonStyle} variant="outlined" size="small">
          Linkedin
        </Button>
        <Button sx={getFooterButtonStyle} variant="outlined" size="small">
          Curriculo
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
