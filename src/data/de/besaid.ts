import besaidImg from "../../assets/locations/besaid.png";

import dingoImg from "../../assets/monsters/besaid/dingo.png";
import condorImg from "../../assets/monsters/besaid/condor.png";
import waterflanImg from "../../assets/monsters/besaid/water-flan.png";

export default {
  id: "besaid",
  name: "Insel Besaid",
  header: besaidImg,
  monsters: [
    {
      id: "dingo",
      name: "Dingo",
      image: dingoImg,
    },
    {
      id: "condor",
      name: "Kondorgeier",
      image: condorImg,
    },
    {
      id: "water-flan",
      name: "Wasserpudding",
      image: waterflanImg,
    },
  ],
};
