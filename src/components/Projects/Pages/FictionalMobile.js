import React from "react";
import backImage from "../../../assets/images/CommumImages/wavesBackground.png";
import NoteHd from "../../../assets/images/CommumImages/NoteHdScreen.png";
import FictionalMobileLogo from "../../../assets/images/Logos/FM.png";
import Footer from "../../Footer/Footer";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import { GrReactjs } from "react-icons/gr";
import {
  getHeaderStyle,
  StyledChipIcon,
  getPageTitleStyle,
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
        <IconButton sx={{ width: "fit-content", height: "fit-content" }}>
          <AiOutlineClose color="#e7e7e7" />
        </IconButton>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${backImage})`,
          backgroundSize: "50% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          display: "flex",
          flexDirection: "column",
          placeItems: "center",
          padding: "32px",
        }}
      >
        <Box
          component="img"
          src={NoteHd}
          alt="Man avatar generic image"
          sx={{ width: "70%" }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            marginTop: "16px",
          }}
        >
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
            <Typography sx={{ typography: "overline", fontSize: "12px" }}>
              Ver Demo | Github | Figma
            </Typography>
          </Box>
        </Box>
        <Typography>
          A loja de celulares online é uma plataforma na qual os usuários podem
          explorar uma variedade de opções, selecionar e comprar os celulares de
          sua escolha. Além disso, é possível verificar especificações técnicas,
          ler avaliações de clientes e aproveitar outras opções disponíveis na
          loja.
        </Typography>
        <Button>Ver outros projetos</Button>
      </Box>
      <Footer />
    </>
  );
};

export default FictionalMobile;
