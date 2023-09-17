import React from "react";
import backImage from "../../../assets/images/CommumImages/wavesBackground.png";
import { Box, Icon, IconButton, Link, Typography } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";

export const getHeaderStyle = () => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "8px 16px 8px 16px",
  background: "#089cd4",
  alignItems: "center",
  "> div": {
    display: "flex",
    alignItems: "center",
  },
});

export const getPageTitleStyle = () => ({
  color: "#e7e7e7",
  typography: "h5",
  fontWeight: "medium",
  marginRight: "20px",
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
  padding: "32px",
});

export const getDescriptionContainerStyle = () => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  marginTop: "16px",
});

export const getLinksStyle = () => ({
  typography: "overline",
  fontSize: "14px",
  color: "#949494",
  fontWeight: "medium",
  display: "flex",
});

export const getDescriptionStyle = () => ({
  width: "100%",
  paddingRight: "50%",
  marginTop: "20px",
  color: "#1a1a1a",
  textAlign: "justify",
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
          background: "#e7e7e7",
          borderRadius: "16px",
          padding: " 0px 12px 0px 12px",
          marginRight: "4px",
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

export const StyleCloseButton = (props) => {
  return (
    <IconButton sx={{ width: "fit-content", height: "fit-content" }} {...props}>
      <AiOutlineClose color="#e7e7e7" />
    </IconButton>
  );
};
