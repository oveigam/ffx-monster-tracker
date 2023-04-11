import bikanelImg from "../../assets/locations/bikanel.png";

import sandwolfImg from "../../assets/monsters/bikanel/sand-wolf.png";
import alcyoneImg from "../../assets/monsters/bikanel/alcyone.png";
import mushussuImg from "../../assets/monsters/bikanel/mushussu.png";
import zuImg from "../../assets/monsters/bikanel/zu.png";
import sandwormImg from "../../assets/monsters/bikanel/sand-worm.png";
import cactuarImg from "../../assets/monsters/bikanel/cactuar.png";

export default {
  id: "bikanel",
  name: "Insel Bikanel",
  header: bikanelImg,
  monsters: [
    {
      id: "sand-wolf",
      name: "Sandwolf",
      image: sandwolfImg,
    },
    {
      id: "alcyone",
      name: "Alkyone",
      image: alcyoneImg,
    },
    {
      id: "mushussu",
      name: "Mushu Fushu",
      image: mushussuImg,
    },
    {
      id: "zu",
      name: "Montsaurus",
      image: zuImg,
    },
    {
      id: "sand-worm",
      name: "Sandwurm",
      image: sandwormImg,
    },
    {
      id: "cactuar",
      name: "Kaktor",
      image: cactuarImg,
    },
  ],
};
