import { counts } from "../state/counts";

export const ResetButton = () => {
  return (
    <button
      class="rounded-md px-2 py-1 font-bold text-white hover:bg-slate-900 active:bg-slate-950"
      onClick={() => {
        localStorage.clear();
        counts.value = new Map<string, number>();
      }}
    >
      Reset Progress
    </button>
  );
};
