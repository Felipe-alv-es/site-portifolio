import { SxProps } from "@mui/material/";
import backImage from "../../assets/images/CommumImages/wavesBackground.png";

export const getContainerStyle = (): SxProps => ({
  display: "grid",
  placeItems: "center",
  backgroundImage: `url(${backImage})`,
  backgroundSize: "50% 100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
});
