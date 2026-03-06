import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";

import laptop from "../../assets/images/CommumImages/HomepageImages/OnlyNote.png";
import phone from "../../assets/images/CommumImages/HomepageImages/OnlyPhone.png";
import xiomiNote from "../../assets/images/CommumImages/HomepageImages/OnlyXiomiNote.png";
import noteBack from "../../assets/images/CommumImages/HomepageImages/HomePageImage.png";
import Logo from "../../assets/images/Logos/felitLogoWhite.png";
import Bush1 from "../../assets/images/BackgroundImages/bush1.webp";
import Bush2 from "../../assets/images/BackgroundImages/bush2.webp";
import leaf1 from "../../assets/images/BackgroundImages/leaf1.webp";
import leaf2 from "../../assets/images/BackgroundImages/leaf2.webp";
import mount1 from "../../assets/images/BackgroundImages/mount1.webp";
import mount2 from "../../assets/images/BackgroundImages/mount2.webp";
import About from "../About/About";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import Home from "../Home/Home.tsx";
import Projects from "../Projects/Projects";

const images = [
  laptop,
  phone,
  xiomiNote,
  noteBack,
  Logo,
  Bush1,
  Bush2,
  leaf1,
  leaf2,
  mount1,
  mount2,
];

function LandingPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    let imagesLoaded = false;
    let minimumTimePassed = false;

    const checkIfReady = () => {
      if (imagesLoaded && minimumTimePassed) {
        setLoaded(true);
      }
    };

    images.forEach((src) => {
      const img = new Image();
      img.src = src;

      img.onload = () => {
        loadedCount++;

        if (loadedCount === images.length) {
          imagesLoaded = true;
          checkIfReady();
        }
      };
    });

    setTimeout(() => {
      minimumTimePassed = true;
      checkIfReady();
    }, 1000);
  }, []);

  if (!loaded) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Home />
      <AboutMe />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default LandingPage;
