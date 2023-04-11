import bikanelImg from "../../assets/locations/bikanel.png";

import sandwolfImg from "../../assets/monsters/bikanel/sand-wolf.png";
import alcyoneImg from "../../assets/monsters/bikanel/alcyone.png";
import mushussuImg from "../../assets/monsters/bikanel/mushussu.png";
import zuImg from "../../assets/monsters/bikanel/zu.png";
import sandwormImg from "../../assets/monsters/bikanel/sand-worm.png";
import cactuarImg from "../../assets/monsters/bikanel/cactuar.png";

export default {
  id: "bikanel",
  name: "Bikanel",
  header: bikanelImg,
  monsters: [
    {
      id: "sand-wolf",
      name: "Sand Wolf",
      image: sandwolfImg,
    },
    {
      id: "alcyone",
      name: "Alcyone",
      image: alcyoneImg,
    },
    {
      id: "mushussu",
      name: "Mushussu",
      image: mushussuImg,
    },
    {
      id: "zu",
      name: "Zu",
      image: zuImg,
    },
    {
      id: "sand-worm",
      name: "Sand Worm",
      image: sandwormImg,
    },
    {
      id: "cactuar",
      name: "Cactuar",
      image: cactuarImg,
    },
  ],
};
