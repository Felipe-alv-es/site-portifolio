import React from "react";
import { Fab, SxProps } from "@mui/material/";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
import { BsChevronUp } from "react-icons/bs";

export const getContainerStyle = (scrollValue: number): SxProps => ({
  display: "grid",
  placeItems: "center",
  background: "linear-gradient(to right, #D2E2FB 30%, #86A8D8)",
  position: "relative",
  overflow: "hidden",
  "> div:nth-of-type(2n)": {
    "> img": {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      pointerEvents: "none",
      zIndex: 1,
      transition: "0.5s",
    },
    "> .Mount2": {
      marginBottom: `-${(scrollValue / 2) * 1.2}px`,
    },
    "> .Mount1": {
      marginBottom: `-${(scrollValue / 2) * 1.1}px`,
    },
    "> .Bush2": {
      marginBottom: `-${scrollValue / 2}px`,
    },
    "> .Leaf2": {
      transform: `translateX(${scrollValue / 2}px)`,
    },
    "> .Leaf1": {
      transform: `translateX(-${scrollValue / 2}px)`,
    },
  },
});

export const getSmartphoneStyle = (scrollValue: number): SxProps => ({
  width: "65%",
  bottom: 170,
  transition: "0.5s",
  position: "absolute",
  animation: "0.5s invisibleFrame, 2s swipeIn",
  animationDelay: "0ms, 0.5s",
  transform: `translateY(${scrollValue * 1.5}px)`,
  zIndex: 1,
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

export const getLaptopStyle = (scrollValue: number): SxProps => ({
  width: "65%",
  bottom: 170,
  transition: "0.5s",
  position: "absolute",
  zIndex: 1,
  animation: "0.5s invisibleFrame, 1s slideIn",
  animationDelay: "0ms, 0.5s",
  transform: `translateY(${scrollValue * 1.5}px)`,
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

export const getXiomiNoteStyle = (scrollValue: number): SxProps => ({
  width: "65%",
  bottom: 170,
  transition: "0.5s",
  zIndex: 1,
  position: "absolute",
  animation: "0.5s invisibleFrame, 2s swipeInNotebook",
  animationDelay: "0ms, 0.5s",
  transform: `translateY(${scrollValue * 1.5}px)`,
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

export const getLogoStyle = (scrollValue: number): SxProps => ({
  width: "40%",
  position: "absolute",
  transition: "0.5s",
  zIndex: 1,
  bottom: 370,
  animation: "2s invisibleFrame, 1s swipeInLogo",
  animationDelay: "0ms, 2s",
  transform: `translateY(${scrollValue * 1.5}px)`,
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
  "@media(max-width: 1000px)": {
    top: "25%",
  },
  "@media(max-width: 820px)": {
    top: "20%",
  },
  "@media(max-width: 544px)": {
    top: "10%",
  },
});

export const getSubtitleStyle = (scrollValue: number): SxProps => ({
  typography: "h5",
  color: "white",
  zIndex: 1,
  transition: "0.5s",
  position: "absolute",
  bottom: 360,
  fontWeight: "bold",
  animation: "2s invisibleFrame, 1s swipeInLogo",
  animationDelay: "0ms, 2s",
  whiteSpace: "pre-line",
  textAlign: "center",
  transform: `translateY(${scrollValue * 1.5}px)`,
  "@media(max-width: 1000px)": {
    top: "45%",
    typography: "h5",
    fontWeight: "bold",
  },
  "@media(max-width: 820px)": {
    top: "37%",
    typography: "h5",
    fontWeight: "bold",
  },
  "@media(max-width: 544px)": {
    top: "18%",
    typography: "body2",
    fontWeight: "medium",
    width: "50%",
    whiteSpace: "normal",
  },
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
