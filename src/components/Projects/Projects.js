import React from "react";
import { Box, Typography } from "@mui/material";
import {
  getContainerStyle,
  getImageStyle,
  getSubtitleStyle,
  getTitleStyle,
  getContentStyle,
} from "./Projects.styles.ts";

const Projects = () => {
  return (
    <Box sx={getContainerStyle} id="Projetos">
      <Box sx={getImageStyle}>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          style={{ width: "100%" }}
        />
      </Box>
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

          <Typography fontFamily={"sans-serif"} variant="subtitle2">
            Apaixonado pelo desenvolvimento, trabalho a mais de quatro anos na
            área de tecnologia, porém sempre aprendendo e me dedicando
            principalmente a área de programação.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
