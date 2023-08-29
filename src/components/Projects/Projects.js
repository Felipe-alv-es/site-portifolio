import React from "react";
import { Box, Typography, IconButton, Divider, Tooltip } from "@mui/material";
import { FaGithub, FaFigma } from "react-icons/fa";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { techSkillsOptions } from "../../assets/utils/projectOptions.tsx";
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

const Projects = () => {
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
                <Tooltip arrow title={item.tooltipCode}>
                  <IconButton
                    href={item.codeButtonHref}
                    target="_blank"
                    size="small"
                    sx={{ borderRadius: "8px" }}
                  >
                    Código <FaGithub style={{ marginLeft: "4px" }} />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow title={item.tooltipDemo}>
                  <IconButton
                    href={item.previewButtonHref}
                    target="_blank"
                    size="small"
                    sx={{ borderRadius: "8px" }}
                  >
                    Demo <BsBoxArrowInUpRight style={{ marginLeft: "4px" }} />
                  </IconButton>
                </Tooltip>
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
