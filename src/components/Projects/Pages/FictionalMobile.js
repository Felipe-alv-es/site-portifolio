import React from "react";
import NoteHd from "../../../assets/images/CommumImages/NoteHdScreen.png";
import FictionalMobileLogo from "../../../assets/images/Logos/FM.png";
import Footer from "../../Footer/Footer";
import { Box, Button, Typography } from "@mui/material";
import { GrReactjs } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoFigma } from "react-icons/bi";
import { IoMdExit } from "react-icons/io";
import {
  getHeaderStyle,
  StyledChipIcon,
  getPageTitleStyle,
  getContentContainerStyle,
  getDescriptionContainerStyle,
  StyleCloseButton,
  StyledLink,
  getLinksStyle,
  getDescriptionStyle,
  getButtonStyle,
} from "./FictionalMobile.styles.tsx";

const FictionalMobile = () => {
  return (
    <>
      <Box sx={getHeaderStyle}>
        <Box>
          <Typography sx={getPageTitleStyle}>Fictional Mobile</Typography>
          <StyledChipIcon label="React" icon={<GrReactjs color="#089cd4" />} />
          <StyledChipIcon
            label="JavaScript"
            icon={<GrReactjs color="#089cd4" />}
          />
          <StyledChipIcon
            label="TypeScript"
            icon={<GrReactjs color="#089cd4" />}
          />
        </Box>
        <StyleCloseButton />
      </Box>
      <Box sx={getContentContainerStyle}>
        <Box
          component="img"
          src={NoteHd}
          alt="Man avatar generic image"
          sx={{ width: "70%" }}
        />
        <Box sx={getDescriptionContainerStyle}>
          <Box
            component="img"
            src={FictionalMobileLogo}
            alt="Man avatar generic image"
            sx={{ width: "80px", borderRadius: "8px", marginRight: "16px" }}
          />
          <Box>
            <Typography sx={{ typography: "h6", fontWeight: "bold" }}>
              Fictional Mobile Store
            </Typography>
            <Typography sx={getLinksStyle}>
              <StyledLink label="Ver Demo" icon={<IoMdExit />} />
              {" | "}
              <StyledLink label="Github" icon={<AiFillGithub />} />
              {" | "}
              <StyledLink label="Figma" icon={<BiLogoFigma />} />
            </Typography>
          </Box>
        </Box>
        <Typography sx={getDescriptionStyle}>
          A loja de celulares online é uma plataforma na qual os usuários podem
          explorar uma variedade de opções, selecionar e comprar os celulares de
          sua escolha. Além disso, é possível verificar especificações técnicas,
          ler avaliações de clientes e aproveitar outras opções disponíveis na
          loja.
        </Typography>
        <Button sx={getButtonStyle}>Ver outros projetos</Button>
      </Box>
      <Footer />
    </>
  );
};

export default FictionalMobile;
