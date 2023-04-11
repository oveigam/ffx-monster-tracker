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
  name: "Stille Ebene",
  header: calmImg,
  monsters: [
    {
      id: "skoll",
      name: "Skoll",
      image: skollImg,
    },
    {
      id: "nebiros",
      name: "Nebyros",
      image: nebirosImg,
    },
    {
      id: "flame-flan",
      name: "Flammenpudding",
      image: flameflanImg,
    },
    {
      id: "shred",
      name: "Schott-Panzer",
      image: shredImg,
    },
    {
      id: "anacondaur",
      name: "Heckenschlange",
      image: anacondaurImg,
    },
    {
      id: "ogre",
      name: "Ogre",
      image: ogreImg,
    },
    {
      id: "coeurl",
      name: "Quahl",
      image: coeurlImg,
    },
    {
      id: "chimera-brain",
      name: "Chimära-Hirn",
      image: chimerabrainImg,
    },
    {
      id: "malboro",
      name: "Morbol",
      image: malboroImg,
    },
  ],
};
