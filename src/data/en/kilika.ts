import kilikaImg from "../../assets/locations/kilika.png";

import dinonixImg from "../../assets/monsters/kilika/dinonix.png";
import killerbeeImg from "../../assets/monsters/kilika/killer-bee.png";
import yellowelementImg from "../../assets/monsters/kilika/yellow-element.png";
import ragoraImg from "../../assets/monsters/kilika/ragora.png";

export default {
  id: "kilika",
  name: "Kilika",
  header: kilikaImg,
  mosters: [
    {
      id: "dinonix",
      name: "Dinonix",
      image: dinonixImg,
    },
    {
      id: "killer-bee",
      name: "Killer Bee",
      image: killerbeeImg,
    },
    {
      id: "yellow-element",
      name: "Yellow Element",
      image: yellowelementImg,
    },
    {
      id: "ragora",
      name: "Ragora",
      image: ragoraImg,
    },
  ],
};
