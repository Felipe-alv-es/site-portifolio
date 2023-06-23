import React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import {
  getContentStyle,
  getContainerStyle,
  getTitleStyle,
  getSubtitleStyle,
  getImageStyle,
  getIconsStyle,
} from "./Home.style.ts";
import FelipeAlves from "../../assets/images/FelipeAlves.jpg";

const Home = () => {
  return (
    <Box sx={getContainerStyle}>
      <Navbar />
      <Box sx={getContentStyle}>
        <Box sx={getTitleStyle}>
          <Typography fontFamily={"roboto"} variant="h3">
            Olá, sou o Felipe, Desenvolvedor Front-End React
          </Typography>
        </Box>
        <Box sx={getSubtitleStyle}>
          <Typography fontFamily={"sans-serif"} variant="subtitle2">
            Apaixonado pelo desenvolvimento, trabalho a mais de quatro anos na
            área de tecnologia, porém sempre aprendendo e me dedicando
            principalmente a área de programação.
          </Typography>
        </Box>
        <Box
          sx={getImageStyle}
          component="img"
          src={FelipeAlves}
          alt="Man avatar generic image"
        />
        <Box sx={getIconsStyle}>
          <IconButton href="https://www.linkedin.com/in/felipe-alves-oliveira/">
            <FaLinkedin />
          </IconButton>
          <IconButton href="https://github.com/Felipe-alv-es">
            <FaGithub />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
