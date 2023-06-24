import { SxProps } from "@mui/material/";

export const getContainerStyle = (): SxProps => ({
  display: "grid",
  placeItems: "center",
});

export const getContentStyle = (): SxProps => ({
  display: "grid",
  gridTemplateAreas: `'title image''content image''icons image'`,
  gridGap: "20px",
  marginTop: "10%",
  maxWidth: "900px",
  marginLeft: "5%",
  marginRight: "5%",
  "@media(max-width: 544px)": {
    gridTemplateAreas: `'image''title''content''icons'`,
    placeItems: "center",
  },
});

export const getTitleStyle = (): SxProps => ({
  maxWidth: "450px",
  minWidth: "360px",
  gridArea: "title",
});

export const getSubtitleStyle = (): SxProps => ({
  maxWidth: "450px",
  minWidth: "360px",
  gridArea: "content",
});

export const getImageStyle = (): SxProps => ({
  width: "300px",
  height: "300px",
  gridArea: "image",
});
