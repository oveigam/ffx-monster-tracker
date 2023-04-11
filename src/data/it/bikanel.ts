import bikanelImg from "../../assets/locations/bikanel.png";

import sandwolfImg from "../../assets/monsters/bikanel/sand-wolf.png";
import alcyoneImg from "../../assets/monsters/bikanel/alcyone.png";
import mushussuImg from "../../assets/monsters/bikanel/mushussu.png";
import zuImg from "../../assets/monsters/bikanel/zu.png";
import sandwormImg from "../../assets/monsters/bikanel/sand-worm.png";
import cactuarImg from "../../assets/monsters/bikanel/cactuar.png";

export default {
  id: "bikanel",
  name: "Isola Bikanel",
  header: bikanelImg,
  monsters: [
    {
      id: "sand-wolf",
      name: "Lupo del deserto",
      image: sandwolfImg,
    },
    {
      id: "alcyone",
      name: "Alcione",
      image: alcyoneImg,
    },
    {
      id: "mushussu",
      name: "MushuHushu",
      image: mushussuImg,
    },
    {
      id: "zu",
      name: "Zuu",
      image: zuImg,
    },
    {
      id: "sand-worm",
      name: "Anellidus",
      image: sandwormImg,
    },
    {
      id: "cactuar",
      name: "Kyactus",
      image: cactuarImg,
    },
  ],
};
