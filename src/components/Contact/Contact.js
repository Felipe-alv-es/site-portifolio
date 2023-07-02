import React from "react";
import { Typography, Box } from "@mui/material";
import { getContainerStyle, getContentStyle } from "./Contact.styles.ts";

export const Contact = () => {
  return (
    <Box sx={getContainerStyle} id="Contato">
      <Box sx={getContentStyle}>
        <Typography fontFamily={"roboto"} variant="h5" color={"#089cd4"}>
          Contato
        </Typography>
        <Typography fontFamily={"roboto"} variant="h6" color={"#4F4F4F"}>
          Fique à vontade para me contatar, não hesite!
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginTop: "2em",
          marginBottom: "2em",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "770px",
        }}
      >
        <Box>
          <Typography fontFamily={"roboto"} variant="h7" color={"#089cd4"}>
            Cidade
          </Typography>
          <Typography
            fontFamily={"roboto"}
            variant="subtitle2"
            color={"#4F4F4F"}
          >
            São Paulo, SP
          </Typography>
        </Box>
        <Box>
          <Typography fontFamily={"roboto"} variant="h7" color={"#089cd4"}>
            Email
          </Typography>
          <Typography
            fontFamily={"roboto"}
            variant="subtitle2"
            color={"#4F4F4F"}
          >
            felipe.alv14@hotmail.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
