import React from "react";
import { Typography, Box } from "@mui/material";
import {
  getContentStyle,
  getContainerStyle,
  getTitleStyle,
  getSubtitleStyle,
  getImageStyle,
} from "./About.styles.ts";
import ImagemEscritorio from "../../assets/images/ImagemEscritorio.png";

const About = () => {
  return (
    <Box sx={getContainerStyle} id="Sobre">
      <Box sx={getContentStyle}>
        <Box sx={getTitleStyle}>
          <Typography fontFamily={"roboto"} variant="h5" color={"#089cd4"}>
            Sobre mim
          </Typography>
          <Typography fontFamily={"roboto"} variant="h6" color={"#4F4F4F"}>
            Um entusiasta da programação em busca de aprendizado contínuo.
          </Typography>
        </Box>
        <Box sx={getSubtitleStyle}>
          <Typography
            fontFamily={"Open Sans"}
            variant="body2"
            color={"#4F4F4F"}
          >
            Como um entusiasta em Tech, trabalho há mais de quatro anos na área
            de tecnologia, sempre em constante aprendizado e focado
            principalmente no desenvolvimento de software. <br />
            <br />
            Sou formado em Gestão de Tecnologia da Informação e possuo
            conhecimentos em boas práticas de gestão de equipes, metodologias
            ágeis e governança de TI, com especialização em Desenvolvimento
            Front-End. <br />
            <br />
            Tenho ampla experiência no desenvolvimento web, utilizando
            principalmente as tecnologias React e JavaScript. Além disso, possuo
            conhecimento em outras linguagens de programação, como TypeScript,
            Kotlin, C#, HTML, CSS e Python. <br />
            <br />
            Ao longo da minha carreira, adquiri experiência no desenvolvimento
            de sites, Design System, criação de bibliotecas, além da
            administração de servidores Linux e Windows e execução de testes
            unitários.
          </Typography>
        </Box>
        <Box sx={getImageStyle}>
          <img
            component="img"
            src={ImagemEscritorio}
            alt="Notebook de escritório e um café"
            style={{ alignSelf: "center" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
