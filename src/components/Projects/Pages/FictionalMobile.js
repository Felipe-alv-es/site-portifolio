import React from "react";
import backImage from "../../../assets/images/CommumImages/wavesBackground.png";
import { Box, IconButton, Typography } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import { GrReactjs } from "react-icons/gr";
import {
  getHeaderStyle,
  StyledChipIcon,
  getPageTitleStyle,
} from "./FictionalMobile.styles.tsx";

const FictionalMobile = () => {
  return (
    <>
      <Box sx={getHeaderStyle}>
        <Box>
          <Typography sx={getPageTitleStyle}>FICTIONAL MOBILE</Typography>
          <StyledChipIcon label="React" icon={<GrReactjs color="#089cd4" />} />
          <StyledChipIcon
            label="JavaScript"
            icon={<GrReactjs color="#089cd4" />}
          />
          <StyledChipIcon
            label="TypeScript"
            icon={<GrReactjs color="#089cd4" />}
          />
        </Box>
        <IconButton sx={{ width: "fit-content", height: "fit-content" }}>
          <AiOutlineClose color="#e7e7e7" />
        </IconButton>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${backImage})`,
          backgroundSize: "50% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        test
      </Box>
    </>
  );
};

export default FictionalMobile;
