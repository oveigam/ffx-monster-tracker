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
  name: "Via micorocciosa",
  header: mushroomImg,
  monsters: [
    {
      id: "raptor",
      name: "Raptor",
      image: raptorImg,
    },
    {
      id: "gandarewa",
      name: "Gandharva",
      image: gandarewaImg,
    },
    {
      id: "thunder-flan",
      name: "Budino di tuono",
      image: thunderflanImg,
    },
    {
      id: "red-element",
      name: "Elemento rosso",
      image: redelementImg,
    },
    {
      id: "lamashtu",
      name: "Ramashut",
      image: lamashtuImg,
    },
    {
      id: "funguar",
      name: "FungOngo",
      image: funguarImg,
    },
    {
      id: "garuda",
      name: "Garuda",
      image: garudaImg,
    },
  ],
};
