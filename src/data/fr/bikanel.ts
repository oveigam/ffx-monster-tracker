import bikanelImg from "../../assets/locations/bikanel.png";

import sandwolfImg from "../../assets/monsters/bikanel/sand-wolf.png";
import alcyoneImg from "../../assets/monsters/bikanel/alcyone.png";
import mushussuImg from "../../assets/monsters/bikanel/mushussu.png";
import zuImg from "../../assets/monsters/bikanel/zu.png";
import sandwormImg from "../../assets/monsters/bikanel/sand-worm.png";
import cactuarImg from "../../assets/monsters/bikanel/cactuar.png";

export default {
  id: "bikanel",
  name: "Ile de Bikanel",
  header: bikanelImg,
  monsters: [
    {
      id: "sand-wolf",
      name: "Loup des sables",
      image: sandwolfImg,
    },
    {
      id: "alcyone",
      name: "Alcyon",
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
      name: "Ver des sables",
      image: sandwormImg,
    },
    {
      id: "cactuar",
      name: "Pampa",
      image: cactuarImg,
    },
  ],
};
