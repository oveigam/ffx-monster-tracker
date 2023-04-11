import kilikaImg from "../../assets/locations/kilika.png";

import dinonixImg from "../../assets/monsters/kilika/dinonix.png";
import killerbeeImg from "../../assets/monsters/kilika/killer-bee.png";
import yellowelementImg from "../../assets/monsters/kilika/yellow-element.png";
import ragoraImg from "../../assets/monsters/kilika/ragora.png";

export default {
  id: "kilika",
  name: "Ile de Kilika",
  header: kilikaImg,
  mosters: [
    {
      id: "dinonix",
      name: "Dinonyx",
      image: dinonixImg,
    },
    {
      id: "killer-bee",
      name: "Abeille tueuse",
      image: killerbeeImg,
    },
    {
      id: "yellow-element",
      name: "Elémentaire jaune",
      image: yellowelementImg,
    },
    {
      id: "ragora",
      name: "Balsamine",
      image: ragoraImg,
    },
  ],
};
