import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { techSkillsOptions } from "../../assets/utils/projectOptions.tsx";
import Laptop from "../../assets/images/CommumImages/Laptop.png";
import {
  getContainerStyle,
  getTitleStyle,
  getSubtitleStyle,
} from "./Projects.styles.ts";

const Projects = () => {
  return (
    <Box sx={getContainerStyle} id="Projetos">
      <Box sx={{ margin: "0 2em 0 2em" }}>
        <Typography sx={getTitleStyle}>Portfólio</Typography>
        <Typography sx={getSubtitleStyle}>
          Cada projeto, uma jornada singular de aprendizado e evolução
        </Typography>
        <Divider />
      </Box>
      <Box sx={{ m: 4 }} />
      <Box
        sx={{
          background: "lightBlue",
          height: "600px", // Atenção aqui depois
          width: "1000px", // Atenção aqui depois
          display: "grid",
          placeItems: "center",
        }}
      >
        <Box
          sx={{
            background: "lightGreen",
            height: "68%",
            width: "66%",
            translate: "0px -40px",
          }}
        />
        <Box
          sx={{ width: "80%", position: "absolute" }}
          component="img"
          src={Laptop}
          alt="Man avatar generic image"
        />
      </Box>
      {techSkillsOptions.map((item) => (
        <Box></Box>
      ))}
    </Box>
  );
};

export default Projects;
