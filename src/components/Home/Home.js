import React from "react";
import Navbar from "../Navbar/Navbar";
import laptop from "../../assets/images/CommumImages/HomepageImages/OnlyNote.png";
import phone from "../../assets/images/CommumImages/HomepageImages/OnlyPhone.png";
import xiomiNote from "../../assets/images/CommumImages/HomepageImages/OnlyXiomiNote.png";
import noteBack from "../../assets/images/CommumImages/HomepageImages/HomePageImage.png";
import Logo from "../../assets/images/Logos/felitLogoWhite.png";
import { Box, Typography } from "@mui/material";
import {
  getContainerStyle,
  getSmartphoneStyle,
  getLaptopStyle,
  getXiomiNoteStyle,
  getLogoStyle,
  getSubtitleStyle,
  StyledFabIcon,
} from "./Home.styles.tsx";

const Home = () => {
  return (
    <Box sx={getContainerStyle} id="Home">
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={getSmartphoneStyle}
          component="img"
          src={phone}
          alt="Man avatar generic image"
        />
        <Box
          sx={getLaptopStyle}
          component="img"
          src={laptop}
          alt="Man avatar generic image"
        />
        <Box
          sx={getXiomiNoteStyle}
          component="img"
          src={xiomiNote}
          alt="Man avatar generic image"
        />
        <Box
          sx={getLogoStyle}
          component="img"
          src={Logo}
          alt="Man avatar generic image"
        />
        <Typography sx={getSubtitleStyle}>
          {"A Cada linha de código é um passo em \n direção ao futuro "}
        </Typography>
      </Box>
      <Box
        sx={{ width: "85%", opacity: "0" }}
        component="img"
        src={noteBack}
        alt="Man avatar generic image"
      />
      <StyledFabIcon />
    </Box>
  );
};

export default Home;
