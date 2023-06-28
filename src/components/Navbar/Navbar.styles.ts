import { SxProps } from "@mui/material/";

export const getNavbarStyles = (): SxProps => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "center",
  "> ul": {
    display: "flex",
    listStyle: "none",
    alignItems: "center",
    cursor: "pointer",
    "> li": {
      display: "flex",
      "> *": {
        color: "#1a1a1a",
        textDecoration: "none",

        marginRight: "1em",
        marginTop: "5px",
        padding: "15px",
        borderRadius: "5px",
        transition: ".5s",
        ":hover": {
          background: "#DEDEDE",
        },
        ":active": {
          background: "#C4C4C4",
        },
      },
    },
  },
});

export const getDrawerMenuStyle = (): SxProps => ({
  width: "187px", // Verificar como deixar responsivo o Width

  "> ul": {
    listStyle: "none",
    marginTop: "2em",
    "> li": {
      padding: "20px 4%",
      transition: ".5s",
      ":active": {
        background: "#C4C4C4",
      },
      "> *": {
        color: "#1a1a1a",
        textDecoration: "none",
        fontSize: "20px",
        marginLeft: "10px",
        lineHeight: "31px",
      },
    },
  },
});
