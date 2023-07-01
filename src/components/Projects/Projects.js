import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
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
import WorkInProgress from "../../assets/images/WorkInProgress.png";

const Projects = () => {
  const bankSite = {
    title: "Site de Banco",
    text: "Apaixonado pelo desenvolvimento, trabalho a mais de quatro anos na área de tecnologia, porém sempre aprendendo e me dedicando principalmente a área de programação.",
  };

  const cellphoneSite = {
    title: "Loja de Celulares",
    text: "Apaixonado pelo desenvolvimento, trabalho a mais de quatro anos na área de tecnologia, porém sempre aprendendo e me dedicando principalmente a área de programação.",
  };

  const criptoSite = {
    title: "Corretora de Criptomoedas",
    text: "Apaixonado pelo desenvolvimento, trabalho a mais de quatro anos na área de tecnologia, porém sempre aprendendo e me dedicando principalmente a área de programação.",
  };

  const technologyOfSite = "React | TypeScript | Css";

  return (
    <Box sx={getContainerStyle} id="Projetos">
      <Typography fontFamily={"roboto"} variant="h4">
        Portfólio
      </Typography>
      <Box sx={{ m: 2 }} />
      <Box sx={getContentStyle()}>
        <Box sx={getImageStyle}>
          <img alt="" src={WorkInProgress} style={{ width: "100%" }} />
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
          <img alt="" src={WorkInProgress} style={{ width: "100%" }} />
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
          <img alt="" src={WorkInProgress} style={{ width: "100%" }} />
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
