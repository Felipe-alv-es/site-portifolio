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
      transition: "0.2s",
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
  width: "55%",
  bottom: 450,
  transition: "0.2s",
  position: "absolute",
  animation: "0.5s invisibleFrame, 2s swipeIn",
  animationDelay: "0ms, 0.5s",
  transform: `translateY(${scrollValue * 1.5}px)`,
  zIndex: 1,
  "@media(max-width: 1920px)": {
    bottom: 240,
    width: "65%",
  },
  "@media(max-width: 1440px)": {
    bottom: 160,
    width: "65%",
  },
  "@media(max-width: 1360px)": {
    bottom: 140,
    width: "65%",
  },
  "@media(max-width: 950px)": {
    bottom: 110,
  },
  "@media(max-width: 768px)": {
    bottom: 90,
  },
  "@media(max-width: 544px)": {
    bottom: 50,
  },
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
  width: "55%",
  bottom: 450,
  transition: "0.2s",
  position: "absolute",
  zIndex: 1,
  animation: "0.5s invisibleFrame, 1s slideIn",
  animationDelay: "0ms, 0.5s",
  transform: `translateY(${scrollValue * 1.5}px)`,
  "@media(max-width: 1920px)": {
    bottom: 240,
    width: "65%",
  },
  "@media(max-width: 1440px)": {
    bottom: 160,
    width: "65%",
  },
  "@media(max-width: 1360px)": {
    bottom: 140,
    width: "65%",
  },
  "@media(max-width: 950px)": {
    bottom: 110,
  },
  "@media(max-width: 768px)": {
    bottom: 90,
  },
  "@media(max-width: 544px)": {
    bottom: 50,
  },
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
  width: "55%",
  bottom: 450,
  transition: "0.2s",
  zIndex: 1,
  position: "absolute",
  animation: "0.5s invisibleFrame, 2s swipeInNotebook",
  animationDelay: "0ms, 0.5s",
  transform: `translateY(${scrollValue * 1.5}px)`,
  "@media(max-width: 1920px)": {
    bottom: 240,
    width: "65%",
  },
  "@media(max-width: 1440px)": {
    bottom: 160,
    width: "65%",
  },
  "@media(max-width: 1360px)": {
    bottom: 140,
    width: "65%",
  },
  "@media(max-width: 950px)": {
    bottom: 110,
  },
  "@media(max-width: 768px)": {
    bottom: 90,
  },
  "@media(max-width: 544px)": {
    bottom: 50,
  },
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
  width: "30%",
  bottom: 800,
  position: "absolute",
  transition: "0.2s",
  zIndex: 1,
  animation: "2s invisibleFrame, 1s swipeInLogo",
  animationDelay: "0ms, 2s",
  transform: `translateY(${scrollValue * 1.5}px)`,
  "@media(max-width: 1920px)": {
    bottom: 500,
    width: "40%",
  },
  "@media(max-width: 1440px)": {
    bottom: 350,
  },
  "@media(max-width: 1360px)": {
    bottom: 370,
  },
  "@media(max-width: 950px)": {
    bottom: 250,
  },
  "@media(max-width: 768px)": {
    bottom: 220,
  },
  "@media(max-width: 544px)": {
    bottom: 110,
  },
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

export const getSubtitleStyle = (scrollValue: number): SxProps => ({
  bottom: 800,
  typography: "h5",
  color: "white",
  zIndex: 1,
  transition: "0.2s",
  position: "absolute",
  fontWeight: "bold",
  animation: "2s invisibleFrame, 1s swipeInLogo",
  animationDelay: "0ms, 2s",
  whiteSpace: "pre-line",
  textAlign: "center",
  transform: `translateY(${scrollValue * 1.5}px)`,
  "@media(max-width: 1920px)": {
    bottom: 490,
  },
  "@media(max-width: 1440px)": {
    bottom: 350,
  },
  "@media(max-width: 1360px)": {
    bottom: 340,
  },
  "@media(max-width: 950px)": {
    bottom: 220,
    typography: "h6",
    fontWeight: "bold",
  },
  "@media(max-width: 768px)": {
    bottom: 190,
    fontSize: "16px",
  },
  "@media(max-width: 544px)": {
    bottom: 100,
    fontSize: "8px",
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
