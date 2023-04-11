import cavernImg from "../../assets/locations/cavern.png";

import yowieImg from "../../assets/monsters/cavern/yowie.png";
import impImg from "../../assets/monsters/cavern/imp.png";
import darkelementImg from "../../assets/monsters/cavern/dark-element.png";
import nidhoggImg from "../../assets/monsters/cavern/nidhogg.png";
import thornImg from "../../assets/monsters/cavern/thorn.png";
import valahaImg from "../../assets/monsters/cavern/valaha.png";
import epaajImg from "../../assets/monsters/cavern/epaaj.png";
import ghostImg from "../../assets/monsters/cavern/ghost.png";
import tonberryImg from "../../assets/monsters/cavern/tonberry.png";

export default {
  id: "cavern",
  name: "Stolen Fayth Cavern",
  header: cavernImg,
  monsters: [
    {
      id: "yowie",
      name: "Yowie",
      image: yowieImg,
    },
    {
      id: "imp",
      name: "Imp",
      image: impImg,
    },
    {
      id: "dark-element",
      name: "Dark Element",
      image: darkelementImg,
    },
    {
      id: "nidhogg",
      name: "Nidhogg",
      image: nidhoggImg,
    },
    {
      id: "thorn",
      name: "Thorn",
      image: thornImg,
    },
    {
      id: "valaha",
      name: "Valaha",
      image: valahaImg,
    },
    {
      id: "epaaj",
      name: "Epaaj",
      image: epaajImg,
    },
    {
      id: "ghost",
      name: "Ghost",
      image: ghostImg,
    },
    {
      id: "tonberry",
      name: "Tonberry",
      image: tonberryImg,
    },
  ],
};
