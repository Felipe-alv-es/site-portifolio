import React, { useState } from "react";
import Navbar from "../Navbar/Navbar.js";
import laptop from "../../assets/images/CommumImages/HomepageImages/OnlyNote.png";
import phone from "../../assets/images/CommumImages/HomepageImages/OnlyPhone.png";
import xiomiNote from "../../assets/images/CommumImages/HomepageImages/OnlyXiomiNote.png";
import noteBack from "../../assets/images/CommumImages/HomepageImages/HomePageImage.png";
import Logo from "../../assets/images/Logos/felitLogoWhite.png";
import Bush1 from "../../assets/images/BackgroundImages/bush1.png";
import Bush2 from "../../assets/images/BackgroundImages/bush2.png";
import leaf1 from "../../assets/images/BackgroundImages/leaf1.png";
import leaf2 from "../../assets/images/BackgroundImages/leaf2.png";
import mount1 from "../../assets/images/BackgroundImages/mount1.png";
import mount2 from "../../assets/images/BackgroundImages/mount2.png";
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
  const [scrollValue, setScrollValue] = useState(0);

  document.addEventListener("scroll", function () {
    const value = window.scrollY;
    setScrollValue(value);
  });

  return (
    <Box sx={getContainerStyle(scrollValue)} id="Home">
      <Navbar />
      <Box
        sx={{ width: "85%", opacity: "0" }}
        component="img"
        src={noteBack}
        alt="Man avatar generic image"
      />
      <Box>
        <Box
          component="img"
          className="Mount2"
          src={mount2}
          alt="Man avatar generic image"
        />
        <Box
          component="img"
          className="Mount1"
          src={mount1}
          alt="Man avatar generic image"
        />
        <Box
          component="img"
          className="Bush2"
          src={Bush2}
          alt="Man avatar generic image"
        />

        <Box
          className="logoContainer"
          sx={{
            display: "flex",
            justifyContent: "center",
            top: 0,
          }}
        >
          <Box
            sx={getSmartphoneStyle(scrollValue)}
            component="img"
            src={phone}
            alt="Man avatar generic image"
          />
          <Box
            sx={getXiomiNoteStyle(scrollValue)}
            component="img"
            src={xiomiNote}
            alt="Man avatar generic image"
          />
          <Box
            sx={getLaptopStyle(scrollValue)}
            component="img"
            src={laptop}
            alt="Man avatar generic image"
          />

          <Box
            sx={getLogoStyle(scrollValue)}
            component="img"
            src={Logo}
            alt="Man avatar generic image"
          />
          <Typography sx={getSubtitleStyle(scrollValue)}>
            {"A cada linha de código, um passo em \n direção ao futuro "}
          </Typography>
        </Box>

        <Box component="img" src={Bush1} alt="Man avatar generic image" />
        <Box
          component="img"
          className="Leaf2"
          src={leaf2}
          alt="Man avatar generic image"
        />
        <Box
          component="img"
          className="Leaf1"
          src={leaf1}
          alt="Man avatar generic image"
        />
      </Box>
      <StyledFabIcon />
    </Box>
  );
};

export default Home;
