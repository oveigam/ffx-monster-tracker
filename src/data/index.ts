import en from "./en";
import es from "./es";
import fr from "./fr";
import de from "./de";
import it from "./it";

export const dataset = {
  en,
  es,
  fr,
  de,
  it,
};

export type Data = (typeof dataset)["en"];
export type GameLocation = Data[number];
export type Monster = GameLocation["mosters"][number];
