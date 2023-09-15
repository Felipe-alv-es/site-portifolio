import { Box, Icon, Typography } from "@mui/material";
import React from "react";

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
