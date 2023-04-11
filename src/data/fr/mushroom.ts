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
  name: "Route des Mycorocs",
  header: mushroomImg,
  mosters: [
    {
      id: "raptor",
      name: "Raptour",
      image: raptorImg,
    },
    {
      id: "gandarewa",
      name: "Gandharva",
      image: gandarewaImg,
    },
    {
      id: "thunder-flan",
      name: "Flambos de foundre",
      image: thunderflanImg,
    },
    {
      id: "red-element",
      name: "Elémentaire rouge",
      image: redelementImg,
    },
    {
      id: "lamashtu",
      name: "Lanashtu",
      image: lamashtuImg,
    },
    {
      id: "funguar",
      name: "Fungus",
      image: funguarImg,
    },
    {
      id: "garuda",
      name: "Garuda",
      image: garudaImg,
    },
  ],
};
