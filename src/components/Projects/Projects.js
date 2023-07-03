import React from "react";
import { Box, Typography, IconButton, Divider, Tooltip } from "@mui/material";
import {
  getContainerStyle,
  getImageStyle,
  getSubtitleStyle,
  getTitleStyle,
  getContentStyle,
  getOverlineStyle,
  StyledTitle,
  StyledBody,
  StyledOverline,
} from "./Projects.styles.tsx";
import { FaGithub, FaFigma } from "react-icons/fa";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import WorkInProgress from "../../assets/images/WorkInProgress.png";
import SiteBank from "../../assets/images/SiteBank.jpg";

const Projects = () => {
  const techSkillsOptions = [
    {
      title: "Site de Banco",
      text: "O site do banco é uma plataforma online que permite aos usuários navegar pelas páginas de sua escolha, acessar suas contas existentes, criar uma nova conta e explorar as diversas opções oferecidas pelo banco.",
      imageSrc: SiteBank,
      imageAlt: "Home page from bank Site",
      siteTechnology: "React | TypeScript | Css",
      designButtonHref:
        "https://www.figma.com/file/IckaEZtrblVM49Bn7rvVKi/Site-Portif%C3%B3lio?type=design&node-id=5-2&mode=design&t=atufu4IbXhBXYOkT-4",
      codeButtonHref: "",
      previewButtonHref: "",
      firstImage: "",
    },
    {
      title: "Loja de Celulares",
      text: "A loja de celulares online é uma plataforma na qual os usuários podem explorar uma variedade de opções, selecionar e comprar os celulares de sua escolha. Além disso, é possível verificar especificações técnicas, ler avaliações de clientes e aproveitar outras opções disponíveis na loja.",
      imageSrc: WorkInProgress,
      imageAlt: "Home page from cellphone Store Site",
      siteTechnology: "React | TypeScript | Css",
      designButtonHref: "",
      codeButtonHref: "",
      previewButtonHref: "",
      firstImage: "Right",
    },
    {
      title: "Corretora de Criptomoedas",
      text: "A corretora de criptomoedas é uma plataforma online que oferece aos usuários a possibilidade de acompanhar o mercado de criptomoedas em tempo real. Através dela, é possível acessar informações atualizadas sobre diversas criptomoedas, como cotações, gráficos de desempenho, volumes de negociação e outras estatísticas relevantes.",
      imageSrc: WorkInProgress,
      imageAlt: "Home page from criptoStore Site",
      siteTechnology: "React | TypeScript | Css",
      designButtonHref: "",
      codeButtonHref: "",
      previewButtonHref: "",
      firstImage: "",
    },
  ];

  return (
    <Box sx={getContainerStyle} id="Projetos">
      <Box sx={{ margin: "0 2em 0 2em" }}>
        <Typography
          fontFamily={"roboto"}
          variant="h5"
          color={"#089cd4"}
          sx={{ textAlign: "center" }}
        >
          Portfólio
        </Typography>
        <Typography
          fontFamily={"roboto"}
          variant="h6"
          color={"#4F4F4F"}
          sx={{ marginBottom: "1em", textAlign: "center" }}
        >
          Cada projeto, uma jornada singular de aprendizado e evolução
        </Typography>
        <Divider />
      </Box>
      <Box sx={{ m: 4 }} />
      {techSkillsOptions.map((item) => (
        <>
          <Box sx={getContentStyle(item.firstImage)}>
            <Box sx={getImageStyle}>
              <img
                alt={item.imageAlt}
                src={item.imageSrc}
                style={{ width: "100%" }}
              />
            </Box>
            <Box>
              <Box sx={getTitleStyle}>
                <StyledTitle>{item.title}</StyledTitle>
              </Box>
              <Box sx={getSubtitleStyle}>
                <StyledBody>{item.text}</StyledBody>
              </Box>
              <Box sx={getOverlineStyle}>
                <StyledOverline>{item.siteTechnology}</StyledOverline>
              </Box>
              <Box>
                <IconButton
                  href={item.designButtonHref}
                  target="_blank"
                  size="small"
                  sx={{ borderRadius: "8px" }}
                >
                  Design <FaFigma style={{ marginLeft: "4px" }} />
                </IconButton>
                <IconButton
                  href={item.codeButtonHref}
                  size="small"
                  sx={{ borderRadius: "8px" }}
                >
                  Código <FaGithub style={{ marginLeft: "4px" }} />
                </IconButton>
                <IconButton
                  href={item.previewButtonHref}
                  size="small"
                  sx={{ borderRadius: "8px" }}
                >
                  Demo <BsBoxArrowInUpRight style={{ marginLeft: "4px" }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box sx={{ m: 6 }} />
        </>
      ))}
    </Box>
  );
};

export default Projects;
