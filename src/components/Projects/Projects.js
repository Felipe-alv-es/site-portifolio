import React from "react";
import { Box, Typography, IconButton, Divider } from "@mui/material";
import {
  getContainerStyle,
  getImageStyle,
  getSubtitleStyle,
  getTitleStyle,
  getContentStyle,
  getOverlineStyle,
  StyledTitle,
  StyledBody,
  StyledOverline,
} from "./Projects.styles.tsx";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import workInProgress from "../../assets/images/workinProgress.png";

const Projects = () => {
  const bankSite = {
    title: "Site de Banco",
    text: "O site do banco é uma plataforma online que permite aos usuários navegar pelas páginas de sua escolha, acessar suas contas existentes, criar uma nova conta e explorar as diversas opções oferecidas pelo banco.",
  };

  const cellphoneSite = {
    title: "Loja de Celulares",
    text: "A loja de celulares online é uma plataforma na qual os usuários podem explorar uma variedade de opções, selecionar e comprar os celulares de sua escolha. Além disso, é possível verificar especificações técnicas, ler avaliações de clientes e aproveitar outras opções disponíveis na loja.",
  };

  const criptoSite = {
    title: "Corretora de Criptomoedas",
    text: "A corretora de criptomoedas é uma plataforma online que oferece aos usuários a possibilidade de acompanhar o mercado de criptomoedas em tempo real. Através dela, é possível acessar informações atualizadas sobre diversas criptomoedas, como cotações, gráficos de desempenho, volumes de negociação e outras estatísticas relevantes.",
  };

  const technologyOfSite = "React | TypeScript | Css";

  return (
    <Box sx={getContainerStyle} id="Projetos">
      <Box sx={{ margin: "0 2em 0 2em" }}>
        <Typography
          fontFamily={"roboto"}
          variant="h5"
          color={"#089cd4"}
          sx={{ textAlign: "center" }}
        >
          Portfólio
        </Typography>
        <Typography
          fontFamily={"roboto"}
          variant="h6"
          color={"#4F4F4F"}
          sx={{ marginBottom: "1em", textAlign: "center" }}
        >
          Cada projeto, uma jornada singular de aprendizado e evolução
        </Typography>
        <Divider />
      </Box>
      <Box sx={{ m: 2 }} />
      <Box sx={getContentStyle()}>
        <Box sx={getImageStyle}>
          <img alt="" src={workInProgress} style={{ width: "100%" }} />
        </Box>
        <Box>
          <Box sx={getTitleStyle}>
            <StyledTitle>{bankSite.title}</StyledTitle>
          </Box>
          <Box sx={getSubtitleStyle}>
            <StyledBody>{bankSite.text}</StyledBody>
          </Box>
          <Box sx={getOverlineStyle}>
            <StyledOverline>{technologyOfSite}</StyledOverline>
          </Box>
          <Box>
            <IconButton
              href="https://www.linkedin.com/in/felipe-alves-oliveira/"
              target="_blank"
              size="small"
            >
              Código <FaGithub style={{ marginLeft: "4px" }} />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/felipe-alves-oliveira/"
              target="_blank"
              size="small"
            >
              Demo <BsBoxArrowInUpRight style={{ marginLeft: "4px" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box sx={{ m: 6 }} />
      <Box sx={getContentStyle({ firstImage: true })}>
        <Box sx={getImageStyle}>
          <img alt="" src={workInProgress} style={{ width: "100%" }} />
        </Box>
        <Box>
          <Box sx={getTitleStyle}>
            <StyledTitle>{cellphoneSite.title}</StyledTitle>
          </Box>
          <Box sx={getSubtitleStyle}>
            <StyledBody>{cellphoneSite.text}</StyledBody>
          </Box>
          <Box sx={getOverlineStyle}>
            <StyledOverline>{technologyOfSite}</StyledOverline>
          </Box>
          <Box>
            <IconButton
              href="https://www.linkedin.com/in/felipe-alves-oliveira/"
              target="_blank"
              size="small"
            >
              Código <FaGithub style={{ marginLeft: "4px" }} />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/felipe-alves-oliveira/"
              target="_blank"
              size="small"
            >
              Demo <BsBoxArrowInUpRight style={{ marginLeft: "4px" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box sx={{ m: 6 }} />
      <Box sx={getContentStyle()}>
        <Box sx={getImageStyle}>
          <img alt="" src={workInProgress} style={{ width: "100%" }} />
        </Box>
        <Box>
          <Box sx={getTitleStyle}>
            <StyledTitle>{criptoSite.title}</StyledTitle>
          </Box>
          <Box sx={getSubtitleStyle}>
            <StyledBody>{criptoSite.text}</StyledBody>
          </Box>
          <Box sx={getOverlineStyle}>
            <StyledOverline>{technologyOfSite}</StyledOverline>
          </Box>
          <Box>
            <IconButton
              href="https://www.linkedin.com/in/felipe-alves-oliveira/"
              target="_blank"
              size="small"
            >
              Código <FaGithub style={{ marginLeft: "4px" }} />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/felipe-alves-oliveira/"
              target="_blank"
              size="small"
            >
              Demo <BsBoxArrowInUpRight style={{ marginLeft: "4px" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
