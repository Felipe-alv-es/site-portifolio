import React, { useState } from "react";
import Laptop from "../../assets/images/CommumImages/Laptop.png";
import { Box, Typography, Divider, IconButton } from "@mui/material";
import { techSkillsOptions } from "../../assets/utils/projectOptions.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {
  getContainerStyle,
  getTitleStyle,
  getSubtitleStyle,
} from "./Projects.styles.ts";

const Projects = () => {
  const [swiper, setSwiper] = useState();
  const swipePreviousPage = () => swiper.slidePrev();
  const swipeNextPage = () => swiper.slideNext();

  const params = {
    onSwiper: setSwiper,
    slidesPerView: 1.1,
    spaceBetween: "0px",
    centeredSlides: true,
  };

  const [swiperTitle, setSwiperTitle] = useState();
  const swipePreviousTitle = () => swiperTitle.slidePrev();
  const swipeNextTitle = () => swiperTitle.slideNext();

  const paramsTitle = {
    onSwiper: setSwiperTitle,
    slidesPerView: 1,
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
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Box
          component="img"
          src={Laptop}
          alt="Man avatar generic image"
          sx={{ width: "70%", zIndex: "2" }}
        />
        <Box
          sx={{
            width: "45%",
            position: "absolute",
            marginTop: "3.5%",
            "> div > div": {
              "> .swiper-slide": {
                transition: "250ms",
                transform: "scale(0.95)",
                marginTop: "2px",
              },
              "> .swiper-slide-active": {
                transition: "250ms",
                transform: "scale(1.01)",
              },
            },
          }}
        >
          <Swiper {...params}>
            {techSkillsOptions.map((item) => (
              <SwiperSlide key={item.id}>
                <Box
                  component="img"
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  sx={{ width: "100%", borderRadius: "16px" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
      <Box sx={{ m: 2 }} />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex", width: "30%" }}>
          <IconButton
            onClick={NavPrev}
            sx={{
              background: "#D9D9D9",
              borderRadius: "32px",
              height: "fit-content",
            }}
          >
            <BsChevronLeft />
          </IconButton>
          <Swiper {...paramsTitle}>
            {techSkillsOptions.map((item) => (
              <SwiperSlide key={item.id}>
                <Typography variant="h6" color={"#089cd4"}>
                  {item.title}
                </Typography>
              </SwiperSlide>
            ))}
          </Swiper>
          <IconButton
            onClick={NavNext}
            sx={{
              background: "#D9D9D9",
              borderRadius: "32px",
              height: "fit-content",
            }}
          >
            <BsChevronRight />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
