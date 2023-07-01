import { SxProps } from "@mui/material/";

export const getContainerStyle = (): SxProps => ({
  display: "grid",
  placeItems: "center",
});

export const getContentStyle = (): SxProps => ({
  display: "grid",
  gridTemplateAreas: `'image title'' image content'`,
  gridGap: "20px",
  marginTop: "10%",
  maxWidth: "900px",
  marginLeft: "2em",
  marginRight: "2em",
  "@media(max-width: 544px)": {
    gridTemplateAreas: `'image''title''content''icons'`,
  },
});

export const getTitleStyle = (): SxProps => ({
  maxWidth: "450px",
  minWidth: "296px",
  gridArea: "title",
});

export const getSubtitleStyle = (): SxProps => ({
  maxWidth: "450px",
  minWidth: "296px",
  gridArea: "content",
});

export const getImageStyle = (): SxProps => ({
  maxWidth: "300px",
  minWidth: "296px",

  height: "500px",
  gridArea: "image",
  borderRadius: "20px",
  overflow: "hidden",
  display: "flex",
  "@media(max-width: 544px)": {
    height: "300px",
  },
});
