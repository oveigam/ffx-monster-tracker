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
  name: "Interior de Sinh",
  header: sinImg,
  monsters: [
    {
      id: "exoray",
      name: "Amanita",
      image: exorayImg,
    },
    {
      id: "wraith",
      name: "Caronte",
      image: wraithImg,
    },
    {
      id: "gemini-sword",
      name: "Gigante",
      image: geminiswordImg,
    },
    {
      id: "gemini-club",
      name: "Gigante",
      image: geminiclubImg,
    },
    {
      id: "demonolith",
      name: "Monolito diabólico",
      image: demonolithImg,
    },
    {
      id: "great-malboro",
      name: "Gran molbol",
      image: greatmalboroImg,
    },
    {
      id: "barbatos",
      name: "Barbatos",
      image: barbatosImg,
    },
    {
      id: "adamantoise",
      name: "Adamantaimai",
      image: adamantoiseImg,
    },
    {
      id: "behemoth-king",
      name: "Rey Bégimo",
      image: behemothkingImg,
    },
  ],
};
