import { SxProps } from "@mui/material/";

export const getContainerStyle = (): SxProps => ({
  marginTop: "10%",
  marginBottom: "10%",
  display: "grid",
  placeItems: "center",
});

export const getContentStyle = (): SxProps => ({
  display: "grid",
  gridTemplateAreas: `'image title''image content'`,
  gridGap: "20px",
  marginLeft: "2em",
  marginRight: "2em",
  "@media(max-width: 544px)": {
    gridTemplateAreas: `'title''content''image'`,
    placeItems: "center",
  },
});

export const getImageStyle = (): SxProps => ({
  maxWidth: "450px",
  gridArea: "image",
  minWidth: "296px",
  position: "relative",
});

export const getTitleStyle = (): SxProps => ({
  maxWidth: "300px",
  minWidth: "296px",
  gridArea: "title",
  marginBottom: "2em",
});

export const getSubtitleStyle = (): SxProps => ({
  maxWidth: "300px",
  minWidth: "296px",
  gridArea: "content",
});
