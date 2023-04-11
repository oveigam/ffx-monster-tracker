import bikanelImg from "../../assets/locations/bikanel.png";

import sandwolfImg from "../../assets/monsters/bikanel/sand-wolf.png";
import alcyoneImg from "../../assets/monsters/bikanel/alcyone.png";
import mushussuImg from "../../assets/monsters/bikanel/mushussu.png";
import zuImg from "../../assets/monsters/bikanel/zu.png";
import sandwormImg from "../../assets/monsters/bikanel/sand-worm.png";
import cactuarImg from "../../assets/monsters/bikanel/cactuar.png";

export default {
  id: "bikanel",
  name: "Isla Bikanel",
  header: bikanelImg,
  mosters: [
    {
      id: "sand-wolf",
      name: "Lobo del desierto",
      image: sandwolfImg,
    },
    {
      id: "alcyone",
      name: "Halcón",
      image: alcyoneImg,
    },
    {
      id: "mushussu",
      name: "Mushufushu",
      image: mushussuImg,
    },
    {
      id: "zu",
      name: "Zu",
      image: zuImg,
    },
    {
      id: "sand-worm",
      name: "Gusano de arena",
      image: sandwormImg,
    },
    {
      id: "cactuar",
      name: "Cactilio",
      image: cactuarImg,
    },
  ],
};
