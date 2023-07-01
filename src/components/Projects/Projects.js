import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import {
  getContainerStyle,
  getImageStyle,
  getSubtitleStyle,
  getTitleStyle,
  getContentStyle,
  getOverlineStyle,
} from "./Projects.styles.ts";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowInUpRight } from "react-icons/bs";

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

  // refatorar os componentes de typography, pra um styledComponent ja customizado

  return (
    <Box sx={getContainerStyle} id="Projetos">
      <Typography fontFamily={"roboto"} variant="h4">
        Portfólio
      </Typography>
      <Box sx={{ m: 2 }} />
      <Box sx={getContentStyle()}>
        <Box sx={getImageStyle}>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            style={{ width: "100%" }}
          />
        </Box>
        <Box>
          <Box sx={getTitleStyle} color={"#696969"}>
            <Typography fontFamily={"roboto"} variant="h6">
              {bankSite.title}
            </Typography>
          </Box>
          <Box sx={getSubtitleStyle}>
            <Typography fontFamily={"sans-serif"} variant="body2">
              {bankSite.text}
            </Typography>
          </Box>
          <Box sx={getOverlineStyle}>
            <Typography
              fontFamily={"sans-serif"}
              variant="overline"
              fontWeight={"bold"}
            >
              React | TypeScript | Css
            </Typography>
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
          <img
            alt=""
            src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            style={{ width: "100%" }}
          />
        </Box>
        <Box>
          <Box sx={getTitleStyle}>
            <Typography fontFamily={"roboto"} variant="h6" color={"#696969"}>
              {cellphoneSite.title}
            </Typography>
          </Box>
          <Box sx={getSubtitleStyle}>
            <Typography fontFamily={"sans-serif"} variant="body2">
              {cellphoneSite.text}
            </Typography>
          </Box>
          <Box sx={getOverlineStyle}>
            <Typography
              fontFamily={"sans-serif"}
              variant="overline"
              fontWeight={"bold"}
            >
              React | TypeScript | Css
            </Typography>
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
          <img
            alt=""
            src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            style={{ width: "100%" }}
          />
        </Box>
        <Box>
          <Box sx={getTitleStyle}>
            <Typography fontFamily={"roboto"} variant="h6" color={"#696969"}>
              {criptoSite.title}
            </Typography>
          </Box>
          <Box sx={getSubtitleStyle}>
            <Typography fontFamily={"sans-serif"} variant="body2">
              {criptoSite.text}
            </Typography>
          </Box>
          <Box sx={getOverlineStyle}>
            <Typography
              fontFamily={"sans-serif"}
              variant="overline"
              fontWeight={"bold"}
            >
              React | TypeScript | Css
            </Typography>
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
