import { SxProps } from "@mui/material/";

export const getNavbarStyles = (): SxProps => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  padding: "1em",
  "> ul": {
    display: "flex",
    listStyle: "none",
    alignItems: "center",
    "> li": {
      marginRight: "1em",
      padding: "6px",
      borderRadius: "5px",
      ":hover": {
        background: "#DEDEDE",
      },
      "> *": {
        color: "#1a1a1a",
        textDecoration: "none",
      },
    },
  },
});
