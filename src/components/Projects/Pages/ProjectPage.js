import React from "react";
import NoteHd from "../../../assets/images/CommumImages/NoteHdScreen.png";
import Footer from "../../Footer/Footer";
import { Box, Button, Typography } from "@mui/material";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
} from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoFigma } from "react-icons/bi";
import { IoMdExit } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { pagesContent } from "../../../assets/utils/projectPagesContent.tsx";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getHeaderStyle,
  StyledChipIcon,
  getPageTitleStyle,
  getContentContainerStyle,
  getDescriptionContainerStyle,
  StyledCloseButton,
  StyledLink,
  getLinksStyle,
  getDescriptionStyle,
  getButtonStyle,
  getLogoStyle,
  getSwiperboxStyle,
} from "./ProjectPage.styles.tsx";

const FictionalMobile = () => {
  const params = {
    autoplay: {
      delay: 5000,
    },
    centeredSlides: true,
    allowTouchMove: false,
    loop: true,
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
    scrollUp();
  }

  const location = useLocation();
  const currentPage = () => {
    switch (location.pathname) {
      case "/fictional-mobile":
        return pagesContent[0];
      case "/fictional-bank":
        return pagesContent[1];
      case "/cripto-store":
        return pagesContent[2];
      case "/alma-ds":
        return pagesContent[3];
      default:
        return pagesContent[0];
    }
  };

  return (
    <>
      <Box sx={getHeaderStyle}>
        <Box>
          <Typography sx={getPageTitleStyle}>
            {currentPage().pageTitle}
          </Typography>
          <StyledChipIcon
            label="React"
            icon={<BiLogoReact color="#089cd4" />}
          />
          <StyledChipIcon
            label="JavaScript"
            icon={<BiLogoJavascript color="#089cd4" />}
          />
          <StyledChipIcon
            label="TypeScript"
            icon={<BiLogoTypescript color={"#089cd4"} />}
          />
        </Box>
        <StyledCloseButton onClick={handleClick} />
      </Box>
      <Box sx={getContentContainerStyle}>
        <Box
          component="img"
          src={NoteHd}
          alt="Man avatar generic image"
          sx={{ width: "85%" }}
        />
        <Box sx={getSwiperboxStyle}>
          <Swiper {...params}>
            {currentPage().imageArray.map((item) => (
              <SwiperSlide key={item.id}>
                <Box
                  component="img"
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  sx={{
                    width: "100%",
                    borderRadius: "4px",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Box sx={getDescriptionContainerStyle}>
          <Box
            component="img"
            src={currentPage().logo}
            alt="Man avatar generic image"
            sx={getLogoStyle}
          />
          <Box>
            <Typography sx={{ typography: "h6", fontWeight: "bold" }}>
              {currentPage().pageTitle}
            </Typography>
            <Typography sx={getLinksStyle}>
              {currentPage().demoLink ? (
                <StyledLink
                  label="Ver Demo"
                  icon={<IoMdExit />}
                  href={currentPage().demoLink}
                  target="_blank"
                />
              ) : null}

              {currentPage().gitHubLink ? (
                <>
                  {" | "}
                  <StyledLink
                    label="Github"
                    icon={<AiFillGithub />}
                    href={currentPage().gitHubLink}
                    target="_blank"
                  />
                </>
              ) : null}
              {currentPage().figmaLink ? (
                <>
                  {" | "}
                  <StyledLink
                    label="Figma"
                    icon={<BiLogoFigma />}
                    href={currentPage().figmaLink}
                    target="_blank"
                  />
                </>
              ) : null}
            </Typography>
          </Box>
        </Box>
        <Typography sx={getDescriptionStyle}>
          {currentPage().pageDescription}
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
