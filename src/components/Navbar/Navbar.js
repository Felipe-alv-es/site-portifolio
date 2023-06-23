import React, { useState } from "react";
import { Box, Link, Typography, Drawer, IconButton, Icon } from "@mui/material";
import { getNavbarStyles, getDrawerMenuStyle } from "./Navbar.styles.ts";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiFillHome,
  AiFillDatabase,
  AiFillProject,
  AiFillMessage,
} from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const menuOptions = [
    { text: "Home", icon: <AiFillHome /> },
    { text: "Sobre", icon: <AiFillDatabase /> },
    { text: "Projetos", icon: <AiFillProject /> },
    { text: "Curriculo", icon: <BsFillPeopleFill /> },
    { text: "Contato", icon: <AiFillMessage /> },
  ];

  const handleResize = () => {
    if (window.innerWidth < 665) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

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
                  <li key={item.text}>
                    <Icon>{item.icon}</Icon>
                    <Link>{item.text}</Link>
                  </li>
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
                <Link>{item.text}</Link>
              </li>
            ))}
          </ul>
        </Box>
      )}
    </>
  );
};

export default Navbar;
