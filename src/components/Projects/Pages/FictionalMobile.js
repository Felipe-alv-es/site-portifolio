import React from "react";
import backImage from "../../../assets/images/CommumImages/wavesBackground.png";
import NoteHd from "../../../assets/images/CommumImages/NoteHdScreen.png";
import FictionalMobileLogo from "../../../assets/images/Logos/FM.png";
import Footer from "../../Footer/Footer";
import { Box, Button, Icon, IconButton, Link, Typography } from "@mui/material";
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
          textAlign: "left",
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
            <Typography
              sx={{
                typography: "overline",
                fontSize: "14px",
                color: "#949494",
                fontWeight: "medium",
                display: "flex",
              }}
            >
              <Link
                sx={{
                  textDecoration: "none",
                  color: "#949494",
                  cursor: "pointer",
                  marginLeft: "4px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Ver Demo
                <Icon
                  sx={{
                    display: "flex",
                    height: "fit-content",
                  }}
                >
                  <AiOutlineClose style={{ height: "16px" }} />
                </Icon>
              </Link>
              {" | "}
              <Link
                sx={{
                  textDecoration: "none",
                  color: "#949494",
                  cursor: "pointer",
                  marginLeft: "4px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Github
                <Icon
                  sx={{
                    display: "flex",
                    height: "fit-content",
                  }}
                >
                  <AiOutlineClose style={{ height: "16px" }} />
                </Icon>
              </Link>

              {" | "}
              <Link
                sx={{
                  textDecoration: "none",
                  color: "#949494",
                  cursor: "pointer",
                  marginLeft: "4px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Figma
                <Icon
                  sx={{
                    display: "flex",
                    height: "fit-content",
                  }}
                >
                  <AiOutlineClose style={{ height: "16px" }} />
                </Icon>
              </Link>
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            width: "100%",
            paddingRight: "50%",
            marginTop: "20px",
            color: "#1a1a1a",
            textAlign: "justify",
          }}
        >
          A loja de celulares online é uma plataforma na qual os usuários podem
          explorar uma variedade de opções, selecionar e comprar os celulares de
          sua escolha. Além disso, é possível verificar especificações técnicas,
          ler avaliações de clientes e aproveitar outras opções disponíveis na
          loja.
        </Typography>
        <Button
          sx={{
            background: "#089cd4",
            color: "#e7e7e7",
            padding: "12px 32px 12px 32px",
            borderRadius: "16px",
            marginTop: "32px",
          }}
        >
          Ver outros projetos
        </Button>
      </Box>
      <Footer />
    </>
  );
};

export default FictionalMobile;
