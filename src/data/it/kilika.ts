import kilikaImg from "../../assets/locations/kilika.png";

import dinonixImg from "../../assets/monsters/kilika/dinonix.png";
import killerbeeImg from "../../assets/monsters/kilika/killer-bee.png";
import yellowelementImg from "../../assets/monsters/kilika/yellow-element.png";
import ragoraImg from "../../assets/monsters/kilika/ragora.png";

export default {
  id: "kilika",
  name: "Isola Kilika",
  header: kilikaImg,
  monsters: [
    {
      id: "dinonix",
      name: "Deinonychus",
      image: dinonixImg,
    },
    {
      id: "killer-bee",
      name: "Ape Killer",
      image: killerbeeImg,
    },
    {
      id: "yellow-element",
      name: "Elemento giallo",
      image: yellowelementImg,
    },
    {
      id: "ragora",
      name: "Balsamiko",
      image: ragoraImg,
    },
  ],
};
