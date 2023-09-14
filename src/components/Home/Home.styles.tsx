import React from "react";
import backImage from "../../assets/images/CommumImages/wavesBackground.png";
import { Fab, SxProps } from "@mui/material/";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
import { BsChevronUp } from "react-icons/bs";

export const getContainerStyle = (): SxProps => ({
  display: "grid",
  placeItems: "center",
  backgroundImage: `url(${backImage})`,
  backgroundSize: "50% 100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
});

export const getSmartphoneStyle = (): SxProps => ({
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
});

export const getLaptopStyle = (): SxProps => ({
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
});

export const getXiomiNoteStyle = (): SxProps => ({
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
});

export const getLogoStyle = (): SxProps => ({
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
});

export const getSubtitleStyle = (): SxProps => ({
  typography: "h4",
  color: "white",
  zIndex: "2",
  position: "absolute",
  top: "55%",
  fontWeight: "bold",
  animation: "2s invisibleFrame, 1s swipeInLogo",
  animationDelay: "0ms, 2s",
});

export const StyledFabIcon = (props) => {
  return (
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
  );
};
