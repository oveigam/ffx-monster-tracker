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
  name: "Djose-Straße",
  header: djoseImg,
  monsters: [
    {
      id: "garm",
      name: "Isegrim",
      image: garmImg,
    },
    {
      id: "simurgh",
      name: "Sturzgeier",
      image: simurghImg,
    },
    {
      id: "bite-bug",
      name: "Beißgeschmeiß",
      image: bitebugImg,
    },
    {
      id: "snow-flan",
      name: "Schneepudding",
      image: snowflanImg,
    },
    {
      id: "bunyip",
      name: "Barnip-Panzer",
      image: bunyipImg,
    },
    {
      id: "basilisk",
      name: "Basilisk",
      image: basiliskImg,
    },
    {
      id: "ochu",
      name: "Küsschen",
      image: ochuImg,
    },
  ],
};
