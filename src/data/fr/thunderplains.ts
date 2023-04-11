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
  name: "Plaine foudroyée",
  header: thunderplainsImg,
  monsters: [
    {
      id: "melusine",
      name: "Mélusine",
      image: melusineImg,
    },
    {
      id: "aerouge",
      name: "Aroj",
      image: aerougeImg,
    },
    {
      id: "buer",
      name: "Buer",
      image: buerImg,
    },
    {
      id: "gold-element",
      name: "Elémentaire or",
      image: goldelementImg,
    },
    {
      id: "kusariqqu",
      name: "Kusarine",
      image: kusariqquImg,
    },
    {
      id: "larva",
      name: "Larva",
      image: larvaImg,
    },
    {
      id: "iron-giant",
      name: "Ekarissor",
      image: irongiantImg,
    },
    {
      id: "qactuar",
      name: "Pampa ?",
      image: qactuarImg,
    },
  ],
};
