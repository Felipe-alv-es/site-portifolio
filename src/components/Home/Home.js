import React from "react";
import {
  Typography,
  Box,
  IconButton,
  Divider,
  Icon,
  Tooltip,
} from "@mui/material";
import { FaLinkedin, FaGithub, FaReact } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
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
  const techSkillsOptions = [
    { text: "React", icon: <FaReact /> },
    { text: "JavaScript", icon: <BiLogoJavascript /> },
    { text: "TypeScript", icon: <BiLogoTypescript /> },
    { text: "NextJs", icon: <SiNextdotjs /> },
    { text: "Html5", icon: <AiFillHtml5 /> },
    { text: "Css3", icon: <IoLogoCss3 /> },
  ];

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
            Sou apaixonado pelo mundo do desenvolvimento e atuo há mais de
            quatro anos no setor de tecnologia. Minha trajetória tem sido uma
            constante busca por aprendizado e aprimoramento, com foco especial
            na área de programação.
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
            href="https://www.linkedin.com/in/felipe-alves-oliveira/"
            target="_blank"
          >
            <FaLinkedin />
          </IconButton>
          <IconButton href="https://github.com/Felipe-alv-es" target="_blank">
            <FaGithub />
          </IconButton>
        </Box>
        <Box sx={getTechnicalSkillsStyle}>
          <Typography fontFamily={"roboto"} variant="overline">
            Habilidades Técnicas
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Box>
            {techSkillsOptions.map((item) => (
              <Tooltip arrow title={item.text}>
                <Icon key={item.text} fontSize="large">
                  {item.icon}
                </Icon>
              </Tooltip>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
