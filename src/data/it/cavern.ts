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
  name: "Grotta del crepaccio",
  header: cavernImg,
  monsters: [
    {
      id: "yowie",
      name: "Yowie",
      image: yowieImg,
    },
    {
      id: "imp",
      name: "Galkimasera",
      image: impImg,
    },
    {
      id: "dark-element",
      name: "Elemento scuro",
      image: darkelementImg,
    },
    {
      id: "nidhogg",
      name: "Heg",
      image: nidhoggImg,
    },
    {
      id: "thorn",
      name: "Son",
      image: thornImg,
    },
    {
      id: "valaha",
      name: "Varaha",
      image: valahaImg,
    },
    {
      id: "epaaj",
      name: "Epej",
      image: epaajImg,
    },
    {
      id: "ghost",
      name: "Fantasma",
      image: ghostImg,
    },
    {
      id: "tonberry",
      name: "Tomberry",
      image: tonberryImg,
    },
  ],
};
