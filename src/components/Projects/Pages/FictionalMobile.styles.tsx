import React from "react";
import backImage from "../../../assets/images/CommumImages/wavesBackground.png";
import { Box, Icon, Link, Typography } from "@mui/material";

export const getHeaderStyle = () => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "8px 16px 8px 16px",
  alignItems: "center",
  position: "absolute",
  width: "100%",
  "> div": {
    display: "flex",
    alignItems: "center",
  },
});

export const getPageTitleStyle = () => ({
  color: "#1a1a1a",
  typography: "h5",
  fontWeight: "bold",
  marginRight: "20px",
  "@media(max-width: 544px)": {
    typography: "body1",
    fontWeight: "bold",
  },
});

export const getContentContainerStyle = () => ({
  backgroundImage: `url(${backImage})`,
  backgroundSize: "50% 100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  display: "flex",
  flexDirection: "column",
  placeItems: "center",
  textAlign: "left",
  padding: "32px 32px 32px 32px",
  "@media(max-width: 544px)": {
    padding: "64px 0px 0px 0px",
    "> img": {
      width: "100%",
    },
  },
});

export const getDescriptionContainerStyle = () => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  marginTop: "16px",
  "@media(max-width: 544px)": {
    flexDirection: "column",
    textAlign: "center",
  },
});

export const getLinksStyle = () => ({
  typography: "overline",
  fontSize: "14px",
  color: "#949494",
  fontWeight: "medium",
  display: "flex",
  "> a": {
    marginRight: "4px",
  },
});

export const getDescriptionStyle = () => ({
  width: "100%",
  paddingRight: "50%",
  marginTop: "20px",
  color: "#1a1a1a",
  textAlign: "justify",
  "@media(max-width: 544px)": {
    padding: "0 10% 0 10%",
  },
});

export const getButtonStyle = () => ({
  background: "#089cd4",
  color: "#e7e7e7",
  padding: "12px 32px 12px 32px",
  borderRadius: "16px",
  marginTop: "32px",
  ":hover": {
    background: "#078ABA",
  },
  "@media(max-width: 544px)": {
    marginBottom: "16px",
  },
});

interface StyledChipProps {
  label: string;
  icon: React.ReactNode;
}

export const StyledChipIcon = React.forwardRef<HTMLDivElement, StyledChipProps>(
  ({ icon, label, ...props }, ref) => {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "16px",
          padding: " 0px 12px 0px 12px",
          marginRight: "8px",
          borderStyle: "solid",
          borderColor: "#089cd4",
          borderWidth: "1px",
          "@media(max-width: 544px)": {
            padding: "8px",
          },
        }}
        {...props}
        ref={ref}
      >
        <Typography
          sx={{
            color: "#089cd4",
            typography: "overline",
            fontWeight: "medium",
            fontSize: "16px",
            marginRight: "8px",
            textTransform: "none",
            "@media(max-width: 544px)": {
              display: "none",
            },
          }}
        >
          {label}
        </Typography>
        <Icon>{icon}</Icon>
      </Box>
    );
  }
);

interface StyledLinkProps {
  label: string;
  icon: React.ReactNode;
}
export const StyledLink = React.forwardRef<HTMLDivElement, StyledLinkProps>(
  ({ icon, label, ...props }, ref) => {
    return (
      <Link
        sx={{
          textDecoration: "none",
          color: "#949494",
          cursor: "pointer",
          marginLeft: "4px",
          display: "flex",
          alignItems: "center",
        }}
        {...props}
      >
        {label}
        <Icon
          sx={{
            display: "flex",
            height: "fit-content",
          }}
        >
          {icon}
        </Icon>
      </Link>
    );
  }
);

export const StyledCloseButton = ({ isOpen, ...props }) => (
  <Box
    sx={{
      height: "40px",
      width: "40px",
      padding: "8px",
      margin: "8px 8px 8px 8px",
      borderRadius: "4px",
      justifyContent: "space-between",
      display: "flex",
      flexDirection: "column",

      ":hover": {
        "> :first-of-type": {
          transform: "rotate(-45deg) scale(0.7)",
          translate: "0em 0.25em",
        },
        "> :nth-of-type(2)": {
          translate: "0.30em 0em",
          transform: "rotate(0deg)",
        },
        "> :nth-of-type(3)": {
          transform: "rotate(45deg) scale(0.7)",
          translate: "0em -0.25em",
        },
      },
    }}
    {...props}
  >
    <Box
      {...props}
      sx={{
        width: "100%",
        height: "2px",
        background: "#f3f3f3",
        borderRadius: "4px",
        transition: "ease-out 0.3s",
        transform: "rotate(45deg)",
        translate: "0em 0.70em",
      }}
    />
    <Box
      sx={{
        width: "100%",
        height: "2px",
        background: "#f3f3f3",
        borderRadius: "4px",
        transition: "ease-out 0.3s",
        transform: "rotate(45deg)",
      }}
    />
    <Box
      sx={{
        width: "100%",
        height: "2px",
        background: "#f3f3f3",
        borderRadius: "4px",
        transition: "ease-out 0.3s",
        transform: "rotate(-45deg)",
        translate: "0em -0.70em",
      }}
    />
  </Box>
);
