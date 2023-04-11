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
  name: "Vergessene Grotte",
  header: cavernImg,
  monsters: [
    {
      id: "yowie",
      name: "Schweigechse",
      image: yowieImg,
    },
    {
      id: "imp",
      name: "Garkimasera",
      image: impImg,
    },
    {
      id: "dark-element",
      name: "Teilchen Duster",
      image: darkelementImg,
    },
    {
      id: "nidhogg",
      name: "Nidhog",
      image: nidhoggImg,
    },
    {
      id: "thorn",
      name: "Sorn",
      image: thornImg,
    },
    {
      id: "valaha",
      name: "Varlaha",
      image: valahaImg,
    },
    {
      id: "epaaj",
      name: "Epehju",
      image: epaajImg,
    },
    {
      id: "ghost",
      name: "Schreckgespenst",
      image: ghostImg,
    },
    {
      id: "tonberry",
      name: "Tombery",
      image: tonberryImg,
    },
  ],
};
