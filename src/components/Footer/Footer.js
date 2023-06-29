import { Box, Button, Icon, Typography, Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";
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
  const [hasCopied, setHasCopied] = useState(false);

  const handleOnClick = () => {
    return () => {
      navigator.clipboard.writeText("felipe.alv14@hotmail.com");
      setHasCopied(true);
      setTimeout(setHasCopied, 2000, false);
    };
  };

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
            © 2023 by Felipe Alves <br /> Criado com
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
        <Button
          sx={getFooterButtonStyle}
          onClick={handleOnClick()}
          variant="outlined"
          size="small"
        >
          <Snackbar open={hasCopied}>
            <Alert>{"Copiado!"}</Alert>
          </Snackbar>
          Email
        </Button>
        <Button
          onClick={() =>
            window.open("https://www.linkedin.com/in/felipe-alves-oliveira/")
          }
          sx={getFooterButtonStyle}
          variant="outlined"
          size="small"
        >
          Linkedin
        </Button>
        <Button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1vi46F-fWSLGxA0448YIl2bifRhM7yIl6/view?usp=sharing"
            )
          }
          sx={getFooterButtonStyle}
          variant="outlined"
          size="small"
        >
          Curriculo
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
