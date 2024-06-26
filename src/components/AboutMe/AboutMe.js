import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import FelipeAlves from "../../assets/images/CommumImages/FelipeAlves.jpg";
import Figma from "../../assets/images/Icons/Figma.png";
import { techSkillsOptions } from "../../assets/utils/techSkillsOptions.tsx";
import {
  Typography,
  Box,
  IconButton,
  Divider,
  Icon,
  Tooltip,
} from "@mui/material";
import {
  getContentStyle,
  getContainerStyle,
  getTitleStyle,
  getSubtitleStyle,
  getImageStyle,
  getIconsStyle,
  getTechnicalSkillsStyle,
} from "./AboutMe.style.ts";

const AboutMe = () => {
  return (
    <Box sx={getContainerStyle} id="Sobre" className="conteiner">
      <Box sx={getContentStyle}>
        <Box sx={getTitleStyle}>
          <Typography fontFamily={"roboto"}>
            {"Olá, sou o Felipe, \nDesenvolvedor Web React"}
          </Typography>
        </Box>
        <Box sx={getSubtitleStyle}>
          <Typography
            variant="subtitle2"
            color={"#4F4F4F"}
            sx={{ fontWeight: "normal" }}
          >
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
            <FaLinkedin color="#0474b4" />
          </IconButton>
          <IconButton href="https://github.com/Felipe-alv-es" target="_blank">
            <FaGithub color="#141414" />
          </IconButton>
          <IconButton
            href="https://www.figma.com/file/IckaEZtrblVM49Bn7rvVKi/Site-Portif%C3%B3lio?type=design&node-id=0%3A1&mode=design&t=MWrf8t55LaFENlq3-1"
            target="_blank"
          >
            <img src={Figma} alt="Figma Icon" style={{ width: "24px" }} />
          </IconButton>
        </Box>
        <Box sx={getTechnicalSkillsStyle}>
          <Typography
            fontFamily={"roboto"}
            variant="overline"
            sx={{ display: "flex", fontWeight: "bold", whiteSpace: "nowrap" }}
          >
            Habilidades Técnicas
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Box>
            {techSkillsOptions.map((item) => (
              <Tooltip arrow title={item.text}>
                <Icon
                  key={item.text}
                  fontSize="large"
                  sx={{ marginRight: "4px" }}
                >
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

export default AboutMe;
