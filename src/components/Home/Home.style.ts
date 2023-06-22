import { SxProps } from "@mui/material/";

export const getContainerStyle = (): SxProps => ({
  display: "grid",
  placeItems: "center",
});

export const getContentStyle = (): SxProps => ({
  display: "grid",
  gridTemplateAreas: `'title image''content image'`,
  gridGap: "20px",
  marginTop: "10%",
  maxWidth: "900px",
  "@media(max-width: 544px)": {
    gridTemplateAreas: `'image''title''content'`,
  },
});

export const getTitleStyle = (): SxProps => ({
  maxWidth: "500px",
  minWidth: "300px",
  background: "red",
  gridArea: "title",
});

export const getSubtitleStyle = (): SxProps => ({
  maxWidth: "500px",
  minWidth: "300px",
  background: "green",
  gridArea: "content",
});

export const getImageStyle = (): SxProps => ({
  maxWidth: "200px",
  minWidth: "150px",
  maxHeight: "200px",
  minHeight: "150px",
  margin: "10px",
  borderRadius: "300px",
  gridArea: "image",
});
