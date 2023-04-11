import kilikaImg from "../../assets/locations/kilika.png";

import dinonixImg from "../../assets/monsters/kilika/dinonix.png";
import killerbeeImg from "../../assets/monsters/kilika/killer-bee.png";
import yellowelementImg from "../../assets/monsters/kilika/yellow-element.png";
import ragoraImg from "../../assets/monsters/kilika/ragora.png";

export default {
  id: "kilika",
  name: "Insel Kilika",
  header: kilikaImg,
  monsters: [
    {
      id: "dinonix",
      name: "Dino-Salamander",
      image: dinonixImg,
    },
    {
      id: "killer-bee",
      name: "Killerbiene",
      image: killerbeeImg,
    },
    {
      id: "yellow-element",
      name: "Teilchen Gelb",
      image: yellowelementImg,
    },
    {
      id: "ragora",
      name: "Spuckkraut",
      image: ragoraImg,
    },
  ],
};
