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
  name: "Route de Mi'ihen",
  header: miihenImg,
  monsters: [
    {
      id: "miihen-fang",
      name: "Chien de Mi'ihen",
      image: miihenfangImg,
    },
    {
      id: "ipiria",
      name: "Ipiria",
      image: ipiriaImg,
    },
    {
      id: "floating-eye",
      name: "Oeil flottant",
      image: floatingeyeImg,
    },
    {
      id: "white-element",
      name: "Elémentaire blanc",
      image: whiteelementImg,
    },
    {
      id: "raldo",
      name: "Cujo",
      image: raldoImg,
    },
    {
      id: "vouivre",
      name: "Vouivre",
      image: vouivreImg,
    },
    {
      id: "bomb",
      name: "Bombo",
      image: bombImg,
    },
    {
      id: "dual-horn",
      name: "Bicorne",
      image: dualhornImg,
    },
  ],
};
