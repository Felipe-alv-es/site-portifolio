import React, { useState } from "react";
import Laptop from "../../assets/images/CommumImages/Laptop.png";
import { Box, Typography, Divider } from "@mui/material";
import { techSkillsOptions } from "../../assets/utils/projectOptions.tsx";
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
} from "./Projects.styles.tsx";

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
      <Box sx={getContentStyle}>
        <Box
          component="img"
          src={Laptop}
          alt="Man avatar generic image"
          sx={{ width: "70%" }}
        />
        <Box sx={getSwiperStyle}>
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
      <Box sx={getSwiperTitleContainerStyle}>
        <Box sx={{ display: "flex", width: "30%" }}>
          <StyledButtonIcon onClick={NavPrev}>
            <BsChevronLeft />
          </StyledButtonIcon>
          <Swiper {...paramsTitle}>
            {techSkillsOptions.map((item) => (
              <SwiperSlide key={item.id}>
                <Typography variant="h6" color={"#089cd4"}>
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
