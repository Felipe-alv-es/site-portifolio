import React from "react";
import { BsChevronUp } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";
import Navbar from "../Navbar/Navbar";
import { Box, Fab } from "@mui/material";
import { getContainerStyle } from "./Home.styles.ts";
import laptop from "../../assets/images/CommumImages/HomepageImages/OnlyNote.png";
import phone from "../../assets/images/CommumImages/HomepageImages/OnlyPhone.png";
import xiomiNote from "../../assets/images/CommumImages/HomepageImages/OnlyXiomiNote.png";
import noteBack from "../../assets/images/CommumImages/HomepageImages/HomePageImage.png";

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
            animation: "1.5s invisibleFrame, 2s swipeIn",
            animationDelay: "0ms, 1.5s",
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
            animation: "1s invisibleFrame, 1s slideIn",
            animationDelay: "0ms, 1s",
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
            animation: "2s invisibleFrame, 2s swipeInNotebook",
            animationDelay: "0ms, 1.5s",
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
          sx={{ width: "85%", opacity: "0" }}
          component="img"
          src={noteBack}
          alt="Man avatar generic image"
        />
      </Box>
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
