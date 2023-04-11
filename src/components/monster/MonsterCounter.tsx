import { useComputed } from "@preact/signals";
import type { JSXInternal } from "preact/src/jsx";
import { counts } from "../../state/counts";

const Button = ({ children, ...props }: JSXInternal.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      class="flex h-9 w-9 items-center justify-center rounded-full border border-solid border-slate-800 bg-slate-900 text-white active:bg-slate-950"
      {...props}
    >
      {children}
    </button>
  );
};

const AddIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );
};

const MinusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
    </svg>
  );
};

type Props = {
  id: string;
};

export const MonsterCounter = ({ id }: Props) => {
  const { value } = useComputed(() => counts.value.get(id) ?? Number(localStorage.getItem(id)) ?? 0);

  const add = (operator: 1 | -1) => {
    const count = value + operator;
    if (count >= 0 && count <= 10) {
      const map = new Map(counts.value);
      map.set(id, count);
      counts.value = map;
      localStorage.setItem(id, count.toString());
    }
  };

  return (
    <div class="flex flex-1 items-center gap-1">
      <Button id={`minus ${id}`} onClick={() => add(-1)}>
        <MinusIcon />
      </Button>
      <span class="flex h-11 w-11 items-center justify-center rounded-full  border border-solid border-slate-700 bg-slate-800 font-bold text-white">
        {value}
      </span>
      <Button id={`plus ${id}`} onClick={() => add(1)}>
        <AddIcon />
      </Button>
    </div>
  );
};
