import calmImg from "../../assets/locations/calm.png";

import skollImg from "../../assets/monsters/calm/skoll.png";
import nebirosImg from "../../assets/monsters/calm/nebiros.png";
import flameflanImg from "../../assets/monsters/calm/flame-flan.png";
import shredImg from "../../assets/monsters/calm/shred.png";
import anacondaurImg from "../../assets/monsters/calm/anacondaur.png";
import ogreImg from "../../assets/monsters/calm/ogre.png";
import coeurlImg from "../../assets/monsters/calm/coeurl.png";
import chimerabrainImg from "../../assets/monsters/calm/chimera-brain.png";
import malboroImg from "../../assets/monsters/calm/malboro.png";

export default {
  id: "calm",
  name: "Piana della bonaccia",
  header: calmImg,
  monsters: [
    {
      id: "skoll",
      name: "Scoor",
      image: skollImg,
    },
    {
      id: "nebiros",
      name: "Nebiros",
      image: nebirosImg,
    },
    {
      id: "flame-flan",
      name: "Budino di fiamme",
      image: flameflanImg,
    },
    {
      id: "shred",
      name: "Shred",
      image: shredImg,
    },
    {
      id: "anacondaur",
      name: "Anacondar",
      image: anacondaurImg,
    },
    {
      id: "ogre",
      name: "Hoga",
      image: ogreImg,
    },
    {
      id: "coeurl",
      name: "Iaguaro",
      image: coeurlImg,
    },
    {
      id: "chimera-brain",
      name: "Chimera Brain",
      image: chimerabrainImg,
    },
    {
      id: "malboro",
      name: "Molboro",
      image: malboroImg,
    },
  ],
};
