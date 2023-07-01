import { SxProps } from "@mui/material/";

export const getContainerStyles = (): SxProps => ({
  background: "#1c1c1c",
  padding: "1em 2em 1em 2em",
  display: "grid",
  placeItems: "center",
  gridTemplateAreas: `'footerContent contats'`,
  "@media(max-width: 544px)": {
    gridTemplateAreas: `'footerContent''contats'`,
    placeItems: "normal",
  },
});

export const getFooterContentStyle = (): SxProps => ({
  gridArea: "footerContent",
  "@media(max-width: 544px)": {
    marginBottom: "1em",
  },
});

export const getSubtitleStyle = (): SxProps => ({
  "> h6 > span": {
    marginLeft: "10px",
  },
});

export const getFooterButtonStyle = (): SxProps => ({
  color: "#e7e7e7",
  borderColor: "#e7e7e7",
  marginTop: "4px",
  marginRight: "4px",
  borderRadius: "20px",
  ":hover": {
    borderColor: "#A8A8A8",
  },
});
