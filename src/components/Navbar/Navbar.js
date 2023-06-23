import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { getNavbarStyles } from "./Navbar.styles.ts";

const Navbar = () => {
  return (
    <Box sx={getNavbarStyles}>
      <Typography fontFamily={"roboto"} variant="h5">
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
  );
};

export default Navbar;
