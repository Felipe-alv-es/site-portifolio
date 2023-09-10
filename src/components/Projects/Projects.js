import React, { useState } from "react";
import LaptopBackground from "../../assets/images/CommumImages/LaptopBackground.png";
import SmartphoneBackground from "../../assets/images/CommumImages/Smartphone.png";
import { Box, Typography, Divider } from "@mui/material";
import { projectsOptions } from "../../assets/utils/projectOptions.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {
  getContainerStyle,
  getTitleStyle,
  getSubtitleStyle,
  getContentStyle,
  getSwiperStyle,
  getSwiperTitleContainerStyle,
  StyledButtonIcon,
  StyledTypography,
  StyledOutlinedButton,
  getOverlayStyle,
  getProjectNameStyle,
} from "./Projects.styles.tsx";

const Projects = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 768;

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const [swiper, setSwiper] = useState();
  const swipePreviousPage = () => swiper.slidePrev();
  const swipeNextPage = () => swiper.slideNext();

  const params = {
    onSwiper: setSwiper,
    slidesPerView: isMobile ? 1.15 : 1.1,
    spaceBetween: isMobile ? "0px" : "-2%",
    centeredSlides: true,
    allowTouchMove: false,
  };

  const [swiperTitle, setSwiperTitle] = useState();
  const swipePreviousTitle = () => swiperTitle.slidePrev();
  const swipeNextTitle = () => swiperTitle.slideNext();

  const paramsTitle = {
    onSwiper: setSwiperTitle,
    slidesPerView: 1,
    allowTouchMove: false,
  };

  function NavNext() {
    swipeNextPage();
    swipeNextTitle();
  }

  function NavPrev() {
    swipePreviousPage();
    swipePreviousTitle();
  }

  return (
    <Box sx={getContainerStyle} id="Projetos">
      <Box sx={{ margin: "0 2em 0 2em" }}>
        <Typography sx={getTitleStyle}>Portfólio</Typography>
        <Typography sx={getSubtitleStyle}>
          Cada projeto, uma jornada singular de aprendizado e evolução
        </Typography>
        <Divider />
      </Box>
      <Box sx={{ m: 4 }} />
      <Box sx={getContentStyle}>
        {isMobile ? (
          <Box
            component="img"
            src={SmartphoneBackground}
            alt="Man avatar generic image"
            sx={{ width: "80%", userSelect: "none" }}
          />
        ) : (
          <Box
            component="img"
            src={LaptopBackground}
            alt="Man avatar generic image"
            sx={{ width: "70%", userSelect: "none" }}
          />
        )}
        <Box sx={getSwiperStyle}>
          <Swiper {...params}>
            {projectsOptions.map((item) => (
              <SwiperSlide
                key={item.id}
                style={{ display: "flex", userSelect: "none" }}
              >
                <Box
                  component="img"
                  src={isMobile ? item.imageSrcMobile : item.imageSrc}
                  alt={item.imageAlt}
                  sx={{
                    width: "100%",
                    borderRadius: "16px",
                  }}
                />
                <Box className="slide-overlay" sx={getOverlayStyle}>
                  <Box sx={{ textAlign: "left", margin: "24px" }}>
                    <Typography sx={getProjectNameStyle}>
                      {item.title}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        marginBottom: "8px",
                        "@media(max-width: 544px)": {
                          marginBottom: "16px",
                        },
                      }}
                    >
                      <StyledTypography>React</StyledTypography>
                      <StyledTypography>TypeScript</StyledTypography>
                      <StyledTypography>JavaScript</StyledTypography>
                    </Box>
                    <StyledOutlinedButton>
                      Ver detalhes do Projeto
                    </StyledOutlinedButton>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
      <Box sx={{ m: 2 }} />
      <Box sx={getSwiperTitleContainerStyle}>
        <Box
          sx={{
            display: "flex",
            width: "30%",
            "@media(max-width: 544px)": {
              width: "70%",
            },
          }}
        >
          <StyledButtonIcon onClick={NavPrev}>
            <BsChevronLeft />
          </StyledButtonIcon>
          <Swiper {...paramsTitle}>
            {projectsOptions.map((item) => (
              <SwiperSlide key={item.id}>
                <Typography
                  variant="h6"
                  color={"#089cd4"}
                  sx={{ userSelect: "none", fontWeight: "bold" }}
                >
                  {item.title}
                </Typography>
              </SwiperSlide>
            ))}
          </Swiper>
          <StyledButtonIcon onClick={NavNext}>
            <BsChevronRight />
          </StyledButtonIcon>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
