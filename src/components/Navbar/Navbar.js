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
                <li>
                  <Icon>
                    <AiFillHome />
                  </Icon>
                  <Link>Home</Link>
                </li>
                <li>
                  <Icon>
                    <AiFillDatabase />
                  </Icon>
                  <Link>Sobre</Link>
                </li>
                <li>
                  <Icon>
                    <AiFillProject />
                  </Icon>
                  <Link>Projetos</Link>
                </li>
                <li>
                  <Icon>
                    <BsFillPeopleFill />
                  </Icon>
                  <Link>Curriculo</Link>
                </li>
                <li>
                  <Icon>
                    <AiFillMessage />
                  </Icon>
                  <Link>Contato</Link>
                </li>
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
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Sobre</Link>
            </li>
            <li>
              <Link>Projetos</Link>
            </li>
            <li>
              <Link>Curriculo</Link>
            </li>
            <li>
              <Link>Contato</Link>
            </li>
          </ul>
        </Box>
      )}
    </>
  );
};

export default Navbar;
