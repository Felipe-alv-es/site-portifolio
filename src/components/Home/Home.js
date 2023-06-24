import React from "react";
import { Typography, Box, IconButton, Divider, Icon } from "@mui/material";
import { FaLinkedin, FaGithub, FaReact } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import Navbar from "../Navbar/Navbar";
import {
  getContentStyle,
  getContainerStyle,
  getTitleStyle,
  getSubtitleStyle,
  getImageStyle,
  getIconsStyle,
  getTechnicalSkillsStyle,
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
          <IconButton
            fontSize="large"
            href="https://www.linkedin.com/in/felipe-alves-oliveira/"
          >
            <FaLinkedin />
          </IconButton>
          <IconButton href="https://github.com/Felipe-alv-es">
            <FaGithub />
          </IconButton>
        </Box>
        <Box sx={getTechnicalSkillsStyle}>
          <Typography fontFamily={"roboto"} variant="overline">
            Perícias Técnicas
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Icon fontSize="large">
            <FaReact />
          </Icon>
          <Icon fontSize="large">
            <BiLogoJavascript />
          </Icon>
          <Icon fontSize="large">
            <BiLogoTypescript />
          </Icon>
          <Icon fontSize="large">
            <SiNextdotjs />
          </Icon>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
