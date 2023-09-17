import React from "react";
import NoteHd from "../../../assets/images/CommumImages/NoteHdScreen.png";
import FictionalMobileLogo from "../../../assets/images/Logos/FM.png";
import Footer from "../../Footer/Footer";
import { Box, Button, Typography } from "@mui/material";
import { GrReactjs } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoFigma } from "react-icons/bi";
import { IoMdExit } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectsOptions } from "../../../assets/utils/projectOptions.tsx";
import { useNavigate } from "react-router-dom";
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
  const demoLink = "https://fictionalmobile.netlify.app";
  const gitHubLink = "https://github.com/Felipe-alv-es/smartphone-store";
  const figmaLink =
    "https://www.figma.com/file/IckaEZtrblVM49Bn7rvVKi/Site-Portif%C3%B3lio?type=design&node-id=55-27&mode=design&t=q47AFgMoONL1wXYO-4";

  const params = {
    autoplay: {
      delay: 5000,
    },
    centeredSlides: true,
    allowTouchMove: false,
    loop: true,
  };

  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

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
        <StyleCloseButton onClick={handleClick} />
      </Box>
      <Box sx={getContentContainerStyle}>
        <Box
          component="img"
          src={NoteHd}
          alt="Man avatar generic image"
          sx={{ width: "70%" }}
        />
        <Box
          sx={{
            width: "43%",
            position: "absolute",
            transform: "translateY(23%)",
          }}
        >
          <Swiper {...params}>
            {projectsOptions.map((item) => (
              <SwiperSlide key={item.id}>
                <Box
                  component="img"
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  sx={{
                    width: "100%",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
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
              <StyledLink
                label="Ver Demo"
                icon={<IoMdExit />}
                href={demoLink}
                target="_blank"
              />
              {" | "}
              <StyledLink
                label="Github"
                icon={<AiFillGithub />}
                href={gitHubLink}
                target="_blank"
              />
              {" | "}
              <StyledLink
                label="Figma"
                icon={<BiLogoFigma />}
                href={figmaLink}
                target="_blank"
              />
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
        <Button sx={getButtonStyle} onClick={handleClick}>
          Ver outros projetos
        </Button>
      </Box>
      <Footer />
    </>
  );
};

export default FictionalMobile;
