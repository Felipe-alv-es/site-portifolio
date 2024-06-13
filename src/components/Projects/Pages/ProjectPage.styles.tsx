import React from "react";
import { Box, Icon, Link, Typography, SxProps } from "@mui/material";

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
  display: "flex",
  flexDirection: "column",
  placeItems: "center",
  padding: "5% 1% 5% 1%",
  "> div:first-of-type": {
    width: "100%",
    paddingTop: "40px",
  },
  ".swiper": {
    paddinTop: "50px",
    paddingBottom: "50px",
  },
  ".swiper-slide": {
    width: "60%",
    borderRadius: "32px",
    "> img": {
      borderRadius: "32px",
      boxShadow: "rgba(0, 0, 0, 0.65) 0px 5px 15px",
    },
  },
});

export const getDescriptionContainerStyle = () => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  marginTop: "16px",
  whiteSpace: "noWrap",
  "@media(max-width: 544px)": {
    textAlign: "center",
    justifyContent: "center",
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
    "@media(max-width: 544px)": {
      flexDirection: "column",
    },
  },
});

export const getDescriptionStyle = () => ({
  width: "100%",
  paddingRight: "50%",
  marginTop: "2%",
  color: "#1a1a1a",
  textAlign: "justify",
  "@media(max-width: 950px)": {
    paddingRight: "30%",
  },
  "@media(max-width: 544px)": {
    padding: "0 10% 0 10%",
    marginTop: "10%",
  },
});

export const getLogoStyle = () => ({
  width: "5%",
  borderRadius: "8px",
  marginRight: "16px",
  "@media(max-width: 544px)": {
    width: "15%",
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
  sx: SxProps;
}
export const StyledLink = React.forwardRef<HTMLDivElement, StyledLinkProps>(
  ({ icon, label, sx, ...props }, ref) => {
    return (
      <Link
        sx={{
          textDecoration: "none",
          color: "#949494",
          cursor: "pointer",
          marginLeft: "4px",
          display: "flex",
          alignItems: "center",
          ...sx,
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
