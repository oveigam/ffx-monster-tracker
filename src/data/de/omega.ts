import omegaImg from "../../assets/locations/omega.png";

import zaurusImg from "../../assets/monsters/omega/zaurus.png";
import floatingdeathImg from "../../assets/monsters/omega/floating-death.png";
import blackelementImg from "../../assets/monsters/omega/black-element.png";
import halmaImg from "../../assets/monsters/omega/halma.png";
import puroborosImg from "../../assets/monsters/omega/puroboros.png";
import spiritImg from "../../assets/monsters/omega/spirit.png";
import macheaImg from "../../assets/monsters/omega/machea.png";
import mastercoeurlImg from "../../assets/monsters/omega/master-coeurl.png";
import mastertonberryImg from "../../assets/monsters/omega/master-tonberry.png";
import varunaImg from "../../assets/monsters/omega/varuna.png";

export default {
  id: "omega",
  name: "Artensammlung",
  header: omegaImg,
  mosters: [
    {
      id: "zaurus",
      name: "Saurus",
      image: zaurusImg,
    },
    {
      id: "floating-death",
      name: "Todesauge",
      image: floatingdeathImg,
    },
    {
      id: "black-element",
      name: "Teilchen Schwarz",
      image: blackelementImg,
    },
    {
      id: "halma",
      name: "Harmer-Panzer",
      image: halmaImg,
    },
    {
      id: "puroboros",
      name: "Pyroboros",
      image: puroborosImg,
    },
    {
      id: "spirit",
      name: "Spiritia",
      image: spiritImg,
    },
    {
      id: "machea",
      name: "Meckye",
      image: macheaImg,
    },
    {
      id: "master-coeurl",
      name: "Elite-Quahl",
      image: mastercoeurlImg,
    },
    {
      id: "master-tonberry",
      name: "Meister Tombery",
      image: mastertonberryImg,
    },
    {
      id: "varuna",
      name: "Varuna",
      image: varunaImg,
    },
  ],
};
