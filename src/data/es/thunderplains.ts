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
  name: "Llanura de los Rayos",
  header: thunderplainsImg,
  mosters: [
    {
      id: "melusine",
      name: "Gecko",
      image: melusineImg,
    },
    {
      id: "aerouge",
      name: "Airos",
      image: aerougeImg,
    },
    {
      id: "buer",
      name: "Buel",
      image: buerImg,
    },
    {
      id: "gold-element",
      name: "Ente Dorado",
      image: goldelementImg,
    },
    {
      id: "kusariqqu",
      name: "Kusarik",
      image: kusariqquImg,
    },
    {
      id: "larva",
      name: "Máscara",
      image: larvaImg,
    },
    {
      id: "iron-giant",
      name: "Férreo",
      image: irongiantImg,
    },
    {
      id: "qactuar",
      name: "Cactilio X",
      image: qactuarImg,
    },
  ],
};
