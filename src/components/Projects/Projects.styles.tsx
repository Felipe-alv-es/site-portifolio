import React from "react";
import { SxProps, IconButton, Typography, Button } from "@mui/material/";

export const getContainerStyle = (): SxProps => ({
  marginTop: "10%",
  marginBottom: "10%",
});

export const getTitleStyle = (): SxProps => ({
  textAlign: "center",
  typography: "h5",
  color: "#089cd4",
});

export const getSubtitleStyle = (): SxProps => ({
  marginBottom: "1em",
  textAlign: "center",
  typography: "h6",
  color: "#4F4F4F",
});

export const getContentStyle = (): SxProps => ({
  justifyContent: "center",
  display: "flex",
});
export const getSwiperStyle = (): SxProps => ({
  width: "44.5%",
  position: "absolute",
  marginTop: "5%",
  "> div > div": {
    "> .swiper-slide": {
      transition: "350ms",
      transform: "scale(0.95)",
      marginTop: "2px",
      opacity: "80%",
    },
    "> .swiper-slide-active": {
      transition: "350ms",
      transform: "scale(1.01)",
      opacity: "100%",
    },
    ":hover": {
      ".swiper-slide": {
        transform: "scale(0.90)",
        "@media(max-width: 544px)": {
          transform: "scale(0.89)",
        },
      },
      ".swiper-slide-active": {
        transform: "scale(1.02)",
      },
    },
  },
  "@media(max-width: 544px)": {
    marginTop: "25%",
    width: "72.1%",
  },
});

export const getSwiperTitleContainerStyle = (): SxProps => ({
  display: "flex",
  width: "100%",
  textAlign: "center",
  justifyContent: "center",
});

export const getProjectNameStyle = (): SxProps => ({
  color: "white",
  typography: "h5",
  marginBottom: "4px",
  userSelect: "none",
  "@media(max-width: 544px)": {
    marginBottom: "12px",
  },
});

export const getOverlayStyle = (): SxProps => ({
  height: "100%",
  width: "100%",
  background: "rgba(0,0,0,0.5)",
  position: "fixed",
  borderRadius: "16px",
  opacity: "0",
  transition: "500ms",
  display: "grid",
  placeItems: "end start",
  ":hover": {
    opacity: "100%",
  },
});

export const StyledButtonIcon = (props) => {
  return (
    <IconButton
      sx={{
        background: "#D9D9D9",
        borderRadius: "32px",
        height: "fit-content",
      }}
      {...props}
    />
  );
};

export const StyledTypography = (props) => {
  return (
    <Typography
      sx={{
        borderRadius: "36px",
        background: "#089cd4",
        color: "white",
        padding: "8px",
        fontSize: "12px",
        marginRight: "8px",
        userSelect: "none",
        "@media(max-width: 544px)": {
          padding: "6px",
          fontSize: "12px",
        },
      }}
      {...props}
    />
  );
};

export const StyledOutlinedButton = (props) => {
  return (
    <Button
      variant="outlined"
      sx={{
        color: "white",
        borderColor: "white",
        height: "fit-content",
        borderRadius: "36px",
        textTransform: "none",
        ":hover": {
          borderColor: "white",
        },
      }}
      {...props}
    />
  );
};
