import { SxProps } from "@mui/material/";
import { ProjectProps } from "./Projects.types";

export const getContainerStyle = (): SxProps => ({
  marginTop: "10%",
  marginBottom: "10%",
  display: "grid",
  placeItems: "center",
});

export const getContentStyle = (firstImage: ProjectProps): SxProps => ({
  display: "grid",
  gridTemplateAreas: firstImage
    ? `'image title''image content'`
    : `'title image''content image'`,
  gridGap: "20px",
  marginLeft: "2em",
  marginRight: "2em",
  textAlign: "center",
  "@media(max-width: 544px)": {
    gridTemplateAreas: `'title''content''image'`,
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
  textAlign: "justify",
});

export const getOverlineStyle = (): SxProps => ({
  marginTop: "16px",
});
