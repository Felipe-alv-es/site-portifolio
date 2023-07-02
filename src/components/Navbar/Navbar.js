import React, { useState } from "react";
import {
  Box,
  Typography,
  Drawer,
  IconButton,
  Icon,
  Divider,
} from "@mui/material";
import { HashLink } from "react-router-hash-link";
import { getNavbarStyles, getDrawerMenuStyle } from "./Navbar.styles.ts";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiFillHome,
  AiFillDatabase,
  AiFillProject,
  AiFillMessage,
} from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const menuOptions = [
    { text: "Home", icon: <AiFillHome /> },
    { text: "Sobre", icon: <AiFillDatabase /> },
    { text: "Projetos", icon: <AiFillProject /> },
    { text: "Contato", icon: <AiFillMessage /> },
  ];

  return (
    <>
      {isMobile ? (
        <Box
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
          <IconButton
            size="large"
            onClick={() => setIsOpen(isOpen ? false : true)}
          >
            <GiHamburgerMenu />
          </IconButton>
          <Drawer
            PaperProps={{ sx: { background: "#e7e7e7" } }}
            open={isOpen}
            anchor="left"
            onClose={() => setIsOpen(false)}
          >
            <Box sx={getDrawerMenuStyle}>
              <IconButton
                size="large"
                onClick={() => setIsOpen(isOpen ? false : true)}
              >
                <GiHamburgerMenu />
              </IconButton>
              <ul>
                {menuOptions.map((item) => (
                  <>
                    <li key={item.text}>
                      <Icon>{item.icon}</Icon>
                      <HashLink
                        onClick={() => setIsOpen(false)}
                        smooth
                        to={`#${item.text}`}
                      >
                        {item.text}
                      </HashLink>
                    </li>
                    <Divider
                      variant="inset"
                      sx={{ marginLeft: "10px", marginRight: "10px" }}
                    />
                  </>
                ))}
              </ul>
            </Box>
          </Drawer>
        </Box>
      ) : (
        <Box sx={getNavbarStyles}>
          <Typography
            fontFamily={"roboto"}
            variant="h5"
            sx={{ marginLeft: "1em", pointerEvents: "none" }}
          >
            Felipe Alves
          </Typography>
          <ul>
            {menuOptions.map((item) => (
              <li key={item.text}>
                <HashLink smooth to={`#${item.text}`}>
                  {item.text}
                </HashLink>
              </li>
            ))}
          </ul>
        </Box>
      )}
    </>
  );
};

export default Navbar;
