import djoseImg from "../../assets/locations/djose.png";

import garmImg from "../../assets/monsters/djose/garm.png";
import simurghImg from "../../assets/monsters/djose/simurgh.png";
import bitebugImg from "../../assets/monsters/djose/bite-bug.png";
import snowflanImg from "../../assets/monsters/djose/snow-flan.png";
import bunyipImg from "../../assets/monsters/djose/bunyip.png";
import basiliskImg from "../../assets/monsters/djose/basilisk.png";
import ochuImg from "../../assets/monsters/djose/ochu.png";

export default {
  id: "djose",
  name: "Camino de Djose",
  header: djoseImg,
  mosters: [
    {
      id: "garm",
      name: "Garmú",
      image: garmImg,
    },
    {
      id: "simurgh",
      name: "Quebrantahuesos",
      image: simurghImg,
    },
    {
      id: "bite-bug",
      name: "Mosquito",
      image: bitebugImg,
    },
    {
      id: "snow-flan",
      name: "Flan de nieve",
      image: snowflanImg,
    },
    {
      id: "bunyip",
      name: "Lasca",
      image: bunyipImg,
    },
    {
      id: "basilisk",
      name: "Basilisco",
      image: basiliskImg,
    },
    {
      id: "ochu",
      name: "Ochú",
      image: ochuImg,
    },
  ],
};
