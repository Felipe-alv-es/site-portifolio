import React from "react";
import { Typography, Box } from "@mui/material";
import {
  getContentStyle,
  getContainerStyle,
  getTitleStyle,
  getSubtitleStyle,
  getImageStyle,
} from "./About.styles.ts";
import programming from "../../assets/images/programming.png";

const About = () => {
  return (
    <Box sx={getContainerStyle} id="Sobre">
      <Box sx={getContentStyle}>
        <Box sx={getTitleStyle}>
          <Typography fontFamily={"roboto"} variant="h4">
            Sobre mim
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
          src={programming}
          alt="Man avatar generic image"
        />
      </Box>
    </Box>
  );
};

export default About;
