import besaidImg from "../../assets/locations/besaid.png";

import dingoImg from "../../assets/monsters/besaid/dingo.png";
import condorImg from "../../assets/monsters/besaid/condor.png";
import waterflanImg from "../../assets/monsters/besaid/water-flan.png";

export default {
  id: "besaid",
  name: "Isla Besaid",
  header: besaidImg,
  mosters: [
    {
      id: "dingo",
      name: "Dingo",
      image: dingoImg,
    },
    {
      id: "condor",
      name: "Cóndor",
      image: condorImg,
    },
    {
      id: "water-flan",
      name: "Flan de agua",
      image: waterflanImg,
    },
  ],
};
