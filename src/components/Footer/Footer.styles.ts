import { SxProps } from "@mui/material/";

export const getContainerStyles = (): SxProps => ({
  background: "#1c1c1c",
  borderStyle: "solid",
  borderColor: "#089cd4",
  borderWidth: "5px 0px 0px 0px",
  padding: "3% 20% 10% 20%",
});

export const getTitleStyle = () => ({
  fontWeight: "medium",
  textAlign: "center",
  marginBottom: "16px",
  color: "#e7e7e7",
  typography: "h4",
});

export const getSubtitleStyle = () => ({
  fontWeight: "normal",
  textAlign: "center",
  marginBottom: "32px",
  color: "#e7e7e7",
  typography: "body1",
});
