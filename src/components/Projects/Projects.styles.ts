import { SxProps } from "@mui/material/";

export const getContainerStyle = (): SxProps => ({
  marginTop: "10%",
  marginBottom: "10%",
  display: "grid",
  justifyContent: "space-between",
  gridTemplateAreas: `'image title''image content'`,
  padding: "2%",
  "@media(max-width: 544px)": {
    gridTemplateAreas: `'title''content''image'`,
    placeItems: "center",
  },
});

export const getContentStyle = (): SxProps => ({
  marginLeft: "1em",
  "@media(max-width: 544px)": {
    marginLeft: "0em",
  },
});

export const getImageStyle = (): SxProps => ({
  maxWidth: "700px",
  gridArea: "image",
  minWidth: "350px",
  position: "relative",
  "@media(max-width: 544px)": {
    width: "350px",
  },
});

export const getTitleStyle = (): SxProps => ({
  maxWidth: "450px",
  minWidth: "360px",
  gridArea: "title",
  marginBottom: "2em",
});

export const getSubtitleStyle = (): SxProps => ({
  maxWidth: "450px",
  minWidth: "360px",
  gridArea: "content",
  marginBottom: "2em",
});
