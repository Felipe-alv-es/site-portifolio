import { SxProps } from "@mui/material/";

export const getContainerStyle = (): SxProps => ({
  marginTop: "10%",
  marginBottom: "10%",
  display: "grid",
  justifyContent: "space-between",
  gridTemplateAreas: `'image title''image content'`,
  padding: "5%",
});

export const getImageStyle = (): SxProps => ({
  width: "700px",
  gridArea: "image",
});

export const getSubtitleStyle = (): SxProps => ({
  maxWidth: "450px",
  minWidth: "360px",
  gridArea: "content",
});

export const getTitleStyle = (): SxProps => ({
  maxWidth: "450px",
  minWidth: "360px",
  gridArea: "title",
});
