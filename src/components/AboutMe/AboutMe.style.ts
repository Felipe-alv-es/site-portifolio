import { SxProps } from "@mui/material/";

export const getContainerStyle = (): SxProps => ({
  display: "grid",
  placeItems: "center",
  padding: "0% 15% 0 15%",
  marginTop: "10%",
  position: "relative",
  "@media(max-width: 544px)": {
    padding: 0,
  },
  "::after": {
    content: '""',
    borderTopLeftRadius: "70% 100%",
    borderTopRightRadius: "70% 100%",
    position: "absolute",
    top: "-35%",
    height: "25%",
    width: "100%",
    backgroundColor: "#e7e7e7",
    zIndex: 1,
  },
  "::before": {
    content: '""',
    position: "absolute",
    top: "-55%",
    height: "45%",
    width: "100%",
    backgroundColor: "#3a3290",
    zIndex: 1,
  },
  "@media(max-width: 1920px)": {
    "::after": {
      top: "-18%",
    },
    "::before": {
      top: "-45%",
    },
  },
});

export const getContentStyle = (): SxProps => ({
  display: "grid",
  gridTemplateAreas: `'title image''content image''icons image''tech image'`,
  gridGap: "20px",
  marginTop: "10%",
  maxWidth: "900px",
  marginLeft: "2em",
  marginRight: "2em",
  "@media(max-width: 544px)": {
    gridTemplateAreas: `'title image''content content''icons icons''tech tech'`,
    placeItems: "center",
  },
});

export const getTitleStyle = (): SxProps => ({
  gridArea: "title",
  whiteSpace: "pre-wrap",
  "> p": {
    typography: "h4",
    fontWeight: "bold",
  },
  "@media(max-width: 544px)": {
    "> p": {
      typography: "h6",
      fontWeight: "bold",
    },
  },
});

export const getSubtitleStyle = (): SxProps => ({
  minWidth: "296px",
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
  "@media(max-width: 544px)": {
    maxWidth: "none",
    width: "20%",
  },
});

export const getIconsStyle = (): SxProps => ({
  gridArea: "icons",
});

export const getTechnicalSkillsStyle = (): SxProps => ({
  display: "flex",
  alignItems: "center",
  marginTop: "1em",
  justifyContent: "space-between",
  gridArea: "tech",
  "@media(max-width: 544px)": {
    display: "grid",
    gridTemplateAreas: `'skillsTitle''skillsIcons'`,
    placeItems: "center",
  },
});
