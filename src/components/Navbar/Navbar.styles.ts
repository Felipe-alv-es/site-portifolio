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
      alignItems: "center",
      ":hover": {
        "> span": {
          opacity: "100",
          transition: "1s",
        },
      },
      ":active": {
        "> a": {
          transition: ".5s",
          color: "#089cd4",
          borderRadius: "32px",
        },
      },
      "> a": {
        color: "#e7e7e7",
        textDecoration: "none",
        fontWeight: "bold",
        padding: "16px 8px 16px 8px",
        fontSize: "20px",
      },
      "> span": {
        opacity: "0",
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
