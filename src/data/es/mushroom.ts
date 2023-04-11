import mushroomImg from "../../assets/locations/mushroom.png";

import raptorImg from "../../assets/monsters/mushroom/raptor.png";
import gandarewaImg from "../../assets/monsters/mushroom/gandarewa.png";
import thunderflanImg from "../../assets/monsters/mushroom/thunder-flan.png";
import redelementImg from "../../assets/monsters/mushroom/red-element.png";
import lamashtuImg from "../../assets/monsters/mushroom/lamashtu.png";
import funguarImg from "../../assets/monsters/mushroom/funguar.png";
import garudaImg from "../../assets/monsters/mushroom/garuda.png";

export default {
  id: "mushroom",
  name: "Senda de las Rocas Hongo",
  header: mushroomImg,
  monsters: [
    {
      id: "raptor",
      name: "Raptor",
      image: raptorImg,
    },
    {
      id: "gandarewa",
      name: "Gandarva",
      image: gandarewaImg,
    },
    {
      id: "thunder-flan",
      name: "Flan eléctrico",
      image: thunderflanImg,
    },
    {
      id: "red-element",
      name: "Ente rojo",
      image: redelementImg,
    },
    {
      id: "lamashtu",
      name: "Ramashu",
      image: lamashtuImg,
    },
    {
      id: "funguar",
      name: "Fungo",
      image: funguarImg,
    },
    {
      id: "garuda",
      name: "Garuda",
      image: garudaImg,
    },
  ],
};
