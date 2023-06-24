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
  maxWidth: "250px",
  minWidth: "150px",
  maxHeight: "250px",
  minHeight: "150px",
  margin: "10px",
  borderRadius: "50%",
  gridArea: "image",
  boxShadow: "3px 3px 3px  #1a1a1a",
  borderWidth: "1px",
  borderColor: "#1a1a1a",
  borderStyle: "solid",
});

export const getIconsStyle = (): SxProps => ({
  gridArea: "icons",
});

export const getTechnicalSkillsStyle = (): SxProps => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  marginTop: "1em",
  justifyContent: "space-between",
});
