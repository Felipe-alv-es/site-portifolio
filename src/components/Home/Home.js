import React from "react";
import { BsChevronUp } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";
import Navbar from "../Navbar/Navbar";
import { Box, Fab, Typography } from "@mui/material";
import { getContainerStyle } from "./Home.styles.ts";
import laptop from "../../assets/images/CommumImages/HomepageImages/OnlyNote.png";
import phone from "../../assets/images/CommumImages/HomepageImages/OnlyPhone.png";
import xiomiNote from "../../assets/images/CommumImages/HomepageImages/OnlyXiomiNote.png";
import noteBack from "../../assets/images/CommumImages/HomepageImages/HomePageImage.png";
import Logo from "../../assets/images/Logos/felitLogoWhite.png";

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
          sx={{
            width: "85%",
            position: "absolute",
            animation: "0.5s invisibleFrame, 2s swipeIn",
            animationDelay: "0ms, 0.5s",
            "@keyframes swipeIn": {
              "0%": {
                transform: "rotate(-90deg)",
                opacity: "0",
              },
              "50%": {
                opacity: "0",
              },
              "-100%": {
                transform: "rotate(0deg)",
                opacity: "100",
              },
            },
            "@keyframes invisibleFrame": {
              "0%": {
                opacity: "0",
              },
              "100%": {
                opacity: "0",
              },
            },
          }}
          component="img"
          src={phone}
          alt="Man avatar generic image"
        />
        <Box
          sx={{
            width: "85%",
            position: "absolute",
            zIndex: 1,
            animation: "0.5s invisibleFrame, 1s slideIn",
            animationDelay: "0ms, 0.5s",
            "@keyframes slideIn": {
              "0%": {
                transform: "translateY(-100%)",
                width: "50%",
                opacity: "0",
              },
              "-100%": {
                transform: "translateY(0)",
                width: "100%",
                opacity: "100",
              },
            },
            "@keyframes invisibleFrame": {
              "0%": {
                opacity: "0",
              },
              "100%": {
                opacity: "0",
              },
            },
          }}
          component="img"
          src={laptop}
          alt="Man avatar generic image"
        />
        <Box
          sx={{
            width: "85%",
            position: "absolute",
            animation: "0.5s invisibleFrame, 2s swipeInNotebook",
            animationDelay: "0ms, 0.5s",
            "@keyframes swipeInNotebook": {
              "0%": {
                transform: "rotate(90deg)",
                opacity: "0",
              },
              "50%": {
                opacity: "0",
              },
              "-100%": {
                transform: "rotate(0deg)",
                opacity: "100",
              },
            },
            "@keyframes invisibleFrame": {
              "0%": {
                opacity: "0",
              },
              "100%": {
                opacity: "0",
              },
            },
          }}
          component="img"
          src={xiomiNote}
          alt="Man avatar generic image"
        />
        <Box
          sx={{
            width: "50%",
            position: "absolute",
            zIndex: "2",
            top: "30%",
            animation: "2s invisibleFrame, 1s swipeInLogo",
            animationDelay: "0ms, 2s",
            "@keyframes swipeInLogo": {
              "0%": {
                transform: "translateX(-100%)",
                opacity: "0",
              },
              "-100%": {
                transform: "translateX(0)",
                opacity: "100",
              },
            },
            "@keyframes invisibleFrame": {
              "0%": {
                opacity: "0",
              },
              "100%": {
                opacity: "0",
              },
            },
          }}
          component="img"
          src={Logo}
          alt="Man avatar generic image"
        />
        <Typography
          variant="h4"
          sx={{
            color: "white",
            zIndex: "2",
            position: "absolute",
            top: "55%",
            fontWeight: "bold",
            animation: "2s invisibleFrame, 1s swipeInLogo",
            animationDelay: "0ms, 2s",
          }}
        >
          {"Faço programa bem daora, me contrata ai :("}
        </Typography>
      </Box>
      <Box
        sx={{ width: "85%", opacity: "0" }}
        component="img"
        src={noteBack}
        alt="Man avatar generic image"
      />
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
