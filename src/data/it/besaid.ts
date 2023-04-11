import besaidImg from "../../assets/locations/besaid.png";

import dingoImg from "../../assets/monsters/besaid/dingo.png";
import condorImg from "../../assets/monsters/besaid/condor.png";
import waterflanImg from "../../assets/monsters/besaid/water-flan.png";

export default {
  id: "besaid",
  name: "Isola Besaid",
  header: besaidImg,
  monsters: [
    {
      id: "dingo",
      name: "Dingo",
      image: dingoImg,
    },
    {
      id: "condor",
      name: "Condor",
      image: condorImg,
    },
    {
      id: "water-flan",
      name: "Budino d'acqua",
      image: waterflanImg,
    },
  ],
};
