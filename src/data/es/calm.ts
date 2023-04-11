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
  name: "Llanura de la Calma",
  header: calmImg,
  mosters: [
    {
      id: "skoll",
      name: "Dole",
      image: skollImg,
    },
    {
      id: "nebiros",
      name: "Véspida",
      image: nebirosImg,
    },
    {
      id: "flame-flan",
      name: "Flan de llamas",
      image: flameflanImg,
    },
    {
      id: "shred",
      name: "Shred",
      image: shredImg,
    },
    {
      id: "anacondaur",
      name: "Dracmón",
      image: anacondaurImg,
    },
    {
      id: "ogre",
      name: "Ogro",
      image: ogreImg,
    },
    {
      id: "coeurl",
      name: "Bengal",
      image: coeurlImg,
    },
    {
      id: "chimera-brain",
      name: "Quimera negra",
      image: chimerabrainImg,
    },
    {
      id: "malboro",
      name: "Molbol",
      image: malboroImg,
    },
  ],
};
