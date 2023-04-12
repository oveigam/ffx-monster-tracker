import { counts } from "../state/counts";
import type { Lang } from "../util/langs";

function t(language: Lang) {
  switch (language) {
    case "es":
      return "Reiniciar Progreso";
    case "fr":
      return "Réinitialiser la progression";
    case "de":
      return "Fortschritt zurücksetzen";
    case "it":
      return "Reimposta il progresso";
    case "en":
    default:
      return "Reset Progress";
  }
}

type Props = {
  id: string;
  lang: Lang;
};

export const ResetButton = ({ id, lang }: Props) => {
  return (
    <button
      id={id}
      aria-label={id}
      class="rounded-md px-2 py-1 font-bold text-white hover:bg-slate-900 active:bg-slate-950"
      onClick={() => {
        localStorage.clear();
        counts.value = new Map<string, number>();
      }}
    >
      {t(lang)}
    </button>
  );
};
