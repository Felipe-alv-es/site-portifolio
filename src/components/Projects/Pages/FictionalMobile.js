import React from "react";
import { Box, Icon, IconButton, Typography } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import { GrReactjs } from "react-icons/gr";

const FictionalMobile = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "8px 16px 8px 16px",
        background: "#089cd4",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          sx={{
            color: "#e7e7e7",
            typography: "h5",
            fontWeight: "medium",
            marginRight: "32px",
          }}
        >
          FICTIONAL MOBILE
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            background: "#e7e7e7",
            borderRadius: "16px",
            padding: " 0px 12px 0px 12px",
            marginRight: "4px",
          }}
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
            React
          </Typography>
          <Icon>
            <GrReactjs color="#089cd4" />
          </Icon>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            background: "#e7e7e7",
            borderRadius: "16px",
            padding: " 0px 12px 0px 12px",
            marginRight: "4px",
          }}
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
            JavaScript
          </Typography>
          <Icon>
            <GrReactjs color="#089cd4" />
          </Icon>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            background: "#e7e7e7",
            borderRadius: "16px",
            padding: " 0px 12px 0px 12px",
          }}
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
            TypeScript
          </Typography>
          <Icon>
            <GrReactjs color="#089cd4" />
          </Icon>
        </Box>
      </Box>
      <IconButton sx={{ width: "fit-content", height: "fit-content" }}>
        <AiOutlineClose color="#e7e7e7" />
      </IconButton>
    </Box>
  );
};

export default FictionalMobile;
