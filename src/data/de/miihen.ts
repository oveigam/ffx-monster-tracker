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
  name: "Mi'ihen-Straße",
  header: miihenImg,
  monsters: [
    {
      id: "miihen-fang",
      name: "Mi'ihen-Dingo",
      image: miihenfangImg,
    },
    {
      id: "ipiria",
      name: "Zuck-Echse",
      image: ipiriaImg,
    },
    {
      id: "floating-eye",
      name: "Schwebauge",
      image: floatingeyeImg,
    },
    {
      id: "white-element",
      name: "Teilchen Weiß",
      image: whiteelementImg,
    },
    {
      id: "raldo",
      name: "Raldo-Panzer",
      image: raldoImg,
    },
    {
      id: "vouivre",
      name: "Vivel",
      image: vouivreImg,
    },
    {
      id: "bomb",
      name: "Bomber",
      image: bombImg,
    },
    {
      id: "dual-horn",
      name: "Doppelhorn",
      image: dualhornImg,
    },
  ],
};
