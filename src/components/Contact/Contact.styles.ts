import { SxProps } from "@mui/material/";

export const getContainerStyle = (): SxProps => ({
  display: "grid",
  placeItems: "center",
  marginLeft: "2em",
  marginRight: "2em",
});

export const getContentStyle = (): SxProps => ({
  width: "100%",
  maxWidth: "770px",
});
