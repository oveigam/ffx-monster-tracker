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
  name: "Cueva del barranco",
  header: cavernImg,
  mosters: [
    {
      id: "yowie",
      name: "Yovi",
      image: yowieImg,
    },
    {
      id: "imp",
      name: "Galkimasera",
      image: impImg,
    },
    {
      id: "dark-element",
      name: "Ente oscuro",
      image: darkelementImg,
    },
    {
      id: "nidhogg",
      name: "Sigurd",
      image: nidhoggImg,
    },
    {
      id: "thorn",
      name: "Septa",
      image: thornImg,
    },
    {
      id: "valaha",
      name: "Braha",
      image: valahaImg,
    },
    {
      id: "epaaj",
      name: "Everge",
      image: epaajImg,
    },
    {
      id: "ghost",
      name: "Fantasma",
      image: ghostImg,
    },
    {
      id: "tonberry",
      name: "Tomberi",
      image: tonberryImg,
    },
  ],
};
