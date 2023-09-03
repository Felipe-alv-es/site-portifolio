import React from "react";
import {
  Typography,
  Box,
  IconButton,
  Divider,
  Icon,
  Tooltip,
  Fab,
} from "@mui/material";
import { FaLinkedin, FaGithub, FaReact } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { BsChevronUp } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";
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
import FelipeAlves from "../../assets/images/CommumImages/FelipeAlves.jpg";
import Figma from "../../assets/images/Icons/Figma.png";

const Home = () => {
  const techSkillsOptions = [
    { text: "React", icon: <FaReact color="#326D7D" /> },
    { text: "TypeScript", icon: <BiLogoTypescript color="#266DAB" /> },
    { text: "JavaScript", icon: <BiLogoJavascript color="#B5AA14" /> },
    { text: "NextJs", icon: <SiNextdotjs color="#51948E" /> },
    { text: "Html5", icon: <AiFillHtml5 color="#9C3F17" /> },
    { text: "Css3", icon: <IoLogoCss3 color="#123075" /> },
  ];

  return (
    <Box sx={getContainerStyle} id="Home">
      <Navbar />
      <Box sx={getContentStyle}>
        <Box sx={getTitleStyle}>
          <Typography
            fontFamily={"roboto"}
            variant="h3"
            sx={{ fontWeight: "bold" }}
          >
            Olá, sou o Felipe, Desenvolvedor Front-End React
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
            sx={{ display: "flex", fontWeight: "bold" }}
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
      <Fab
        sx={{
          position: "fixed",
          bottom: 0,
          right: 0,
          margin: "1em",
        }}
      >
        <HashLink
          smooth
          to={"#Home"}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "4px",
          }}
        >
          <BsChevronUp style={{ height: "50%", width: "50%" }} fill="#1c1c1c" />
        </HashLink>
      </Fab>
    </Box>
  );
};

export default Home;
