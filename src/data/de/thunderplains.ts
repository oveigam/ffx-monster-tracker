import thunderplainsImg from "../../assets/locations/thunderplains.png";

import melusineImg from "../../assets/monsters/thunderplains/melusine.png";
import aerougeImg from "../../assets/monsters/thunderplains/aerouge.png";
import buerImg from "../../assets/monsters/thunderplains/buer.png";
import goldelementImg from "../../assets/monsters/thunderplains/gold-element.png";
import kusariqquImg from "../../assets/monsters/thunderplains/kusariqqu.png";
import larvaImg from "../../assets/monsters/thunderplains/larva.png";
import irongiantImg from "../../assets/monsters/thunderplains/iron-giant.png";
import qactuarImg from "../../assets/monsters/thunderplains/qactuar.png";

export default {
  id: "thunderplains",
  name: "Donnersteppe",
  header: thunderplainsImg,
  mosters: [
    {
      id: "melusine",
      name: "Mergin",
      image: melusineImg,
    },
    {
      id: "aerouge",
      name: "Garkimalva",
      image: aerougeImg,
    },
    {
      id: "buer",
      name: "Flatterauge",
      image: buerImg,
    },
    {
      id: "gold-element",
      name: "Teilchen Gold",
      image: goldelementImg,
    },
    {
      id: "kusariqqu",
      name: "Kusahrik",
      image: kusariqquImg,
    },
    {
      id: "larva",
      name: "Ralvor",
      image: larvaImg,
    },
    {
      id: "iron-giant",
      name: "Eisengigant",
      image: irongiantImg,
    },
    {
      id: "qactuar",
      name: "Kaktor?",
      image: qactuarImg,
    },
  ],
};
