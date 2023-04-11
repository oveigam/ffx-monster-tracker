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
  name: "Dentro Sin",
  header: sinImg,
  monsters: [
    {
      id: "exoray",
      name: "Exoray",
      image: exorayImg,
    },
    {
      id: "wraith",
      name: "Alyadin",
      image: wraithImg,
    },
    {
      id: "gemini-sword",
      name: "Ultra Might",
      image: geminiswordImg,
    },
    {
      id: "gemini-club",
      name: "Ultra Might",
      image: geminiclubImg,
    },
    {
      id: "demonolith",
      name: "Demomonolix",
      image: demonolithImg,
    },
    {
      id: "great-malboro",
      name: "Molboro il Grande",
      image: greatmalboroImg,
    },
    {
      id: "barbatos",
      name: "Barbatos",
      image: barbatosImg,
    },
    {
      id: "adamantoise",
      name: "Adamanthart",
      image: adamantoiseImg,
    },
    {
      id: "behemoth-king",
      name: "king Behemoth",
      image: behemothkingImg,
    },
  ],
};
