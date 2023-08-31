import React from "react";
import { SxProps, IconButton } from "@mui/material/";

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
  marginTop: "3.5%",
  "> div > div": {
    "> .swiper-slide": {
      transition: "250ms",
      transform: "scale(0.97)",
      marginTop: "2px",
    },
    "> .swiper-slide-active": {
      transition: "250ms",
      transform: "scale(1.01)",
    },
  },
});

export const getSwiperTitleContainerStyle = (): SxProps => ({
  display: "flex",
  width: "100%",
  textAlign: "center",
  justifyContent: "center",
});

export const getTitleStyleaaa = (): SxProps => ({});

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
