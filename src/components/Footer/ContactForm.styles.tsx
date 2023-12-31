import React from "react";
import { TextField, Typography } from "@mui/material";

export const getTextfieldContainerStyle = () => ({
  display: "flex",
  margin: "8px",
  "> :first-child": { width: "100%", marginRight: "16px" },
  "> :last-child": {
    width: "100%",
    marginLeft: "16px",
  },
  "@media(max-width: 544px)": {
    flexDirection: "column",
    "> :first-child": { width: "100%", marginRight: "0px" },
    "> :last-child": {
      width: "100%",
      marginLeft: "0px",
    },
  },
});

export const getButtonStyle = () => ({
  justifyContent: "center",
  display: "flex",
  "> button": {
    background: "#089cd4",
    color: "white",
    borderRadius: "32px",
    textTransform: "none",
    padding: "12px 24px 12px 24px",
    fontSize: "16px",
    marginTop: "24px",
    fontWeight: "normal",
    width: "50%",
    ":hover": {
      background: "#078ABA",
      "> span": {
        transform: "translateY(-10%)",
        animation: "floater 1.5s infinite",
        transition: "ease 0.5s",
      },
    },
    ":disabled": {
      color: "#666666",
    },
    "> span": {
      display: "flex",
      marginLeft: "8px",
      "@keyframes floater": {
        "0%": { transform: "translateY(-10%);transition: ease 0.5s" },
        "50%": { transform: "translateY(10%);transition: ease 0.5s" },
      },
    },
  },
});

export const getRecaptchaContainerStyle = () => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "16px",
});

export const StyledButtonIcon = (props) => {
  return (
    <Typography sx={{ color: "#e7e7e7", fontWeight: "medium" }} {...props} />
  );
};

export const StyledTextField = (props) => {
  return (
    <TextField
      fullWidth
      sx={{
        background: "#e7e7e7",
        borderRadius: "32px",
        borderStyle: "none",
        "> div": {
          borderRadius: "32px",
          color: "#1a1a1a",
        },
      }}
      {...props}
    />
  );
};

export const StyledTextFieldMessage = (props) => {
  return (
    <TextField
      multiline
      minRows={"10"}
      placeholder="Escreva aqui sua mensagem"
      sx={{
        width: "100%",
        borderStyle: "none",
        background: "#e7e7e7",
        borderRadius: "32px",
        "> div": {
          borderRadius: "32px",
        },
      }}
      {...props}
    />
  );
};
