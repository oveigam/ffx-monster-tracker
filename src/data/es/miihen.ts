import miihenImg from "../../assets/locations/miihen.png";

import miihenfangImg from "../../assets/monsters/miihen/miihen-fang.png";
import ipiriaImg from "../../assets/monsters/miihen/ipiria.png";
import floatingeyeImg from "../../assets/monsters/miihen/floating-eye.png";
import whiteelementImg from "../../assets/monsters/miihen/white-element.png";
import raldoImg from "../../assets/monsters/miihen/raldo.png";
import vouivreImg from "../../assets/monsters/miihen/vouivre.png";
import bombImg from "../../assets/monsters/miihen/bomb.png";
import dualhornImg from "../../assets/monsters/miihen/dual-horn.png";

export default {
  id: "miihen",
  name: "Camino de Miihen",
  header: miihenImg,
  mosters: [
    {
      id: "miihen-fang",
      name: "Fang de Miihen",
      image: miihenfangImg,
    },
    {
      id: "ipiria",
      name: "Hiperia",
      image: ipiriaImg,
    },
    {
      id: "floating-eye",
      name: "Ojo Flotante",
      image: floatingeyeImg,
    },
    {
      id: "white-element",
      name: "Ente Blanco",
      image: whiteelementImg,
    },
    {
      id: "raldo",
      name: "Petro",
      image: raldoImg,
    },
    {
      id: "vouivre",
      name: "Vihur",
      image: vouivreImg,
    },
    {
      id: "bomb",
      name: "Bom",
      image: bombImg,
    },
    {
      id: "dual-horn",
      name: "Bicornio",
      image: dualhornImg,
    },
  ],
};
