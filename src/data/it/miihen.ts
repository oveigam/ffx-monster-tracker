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
  name: "Via Mihen",
  header: miihenImg,
  monsters: [
    {
      id: "miihen-fang",
      name: "Mihen Phang",
      image: miihenfangImg,
    },
    {
      id: "ipiria",
      name: "Ipiria",
      image: ipiriaImg,
    },
    {
      id: "floating-eye",
      name: "Occhio fluttuante",
      image: floatingeyeImg,
    },
    {
      id: "white-element",
      name: "Elemento bianco",
      image: whiteelementImg,
    },
    {
      id: "raldo",
      name: "Rarth",
      image: raldoImg,
    },
    {
      id: "vouivre",
      name: "Vivre",
      image: vouivreImg,
    },
    {
      id: "bomb",
      name: "Piros",
      image: bombImg,
    },
    {
      id: "dual-horn",
      name: "Bikorno",
      image: dualhornImg,
    },
  ],
};
