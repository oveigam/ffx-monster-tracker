import sinImg from "../../assets/locations/sin.png";

import exorayImg from "../../assets/monsters/sin/exoray.png";
import wraithImg from "../../assets/monsters/sin/wraith.png";
import geminiswordImg from "../../assets/monsters/sin/gemini-sword.png";
import geminiclubImg from "../../assets/monsters/sin/gemini-club.png";
import demonolithImg from "../../assets/monsters/sin/demonolith.png";
import greatmalboroImg from "../../assets/monsters/sin/great-malboro.png";
import barbatosImg from "../../assets/monsters/sin/barbatos.png";
import adamantoiseImg from "../../assets/monsters/sin/adamantoise.png";
import behemothkingImg from "../../assets/monsters/sin/behemoth-king.png";

export default {
  id: "sin",
  name: "Sin",
  header: sinImg,
  monsters: [
    {
      id: "exoray",
      name: "Exoray",
      image: exorayImg,
    },
    {
      id: "wraith",
      name: "Spectre",
      image: wraithImg,
    },
    {
      id: "gemini-sword",
      name: "Gemini",
      image: geminiswordImg,
    },
    {
      id: "gemini-club",
      name: "Gemini",
      image: geminiclubImg,
    },
    {
      id: "demonolith",
      name: "Démonolithe",
      image: demonolithImg,
    },
    {
      id: "great-malboro",
      name: "Morbol",
      image: greatmalboroImg,
    },
    {
      id: "barbatos",
      name: "Barbatos",
      image: barbatosImg,
    },
    {
      id: "adamantoise",
      name: "Adamankhelone",
      image: adamantoiseImg,
    },
    {
      id: "behemoth-king",
      name: "Méga Behemoth",
      image: behemothkingImg,
    },
  ],
};
