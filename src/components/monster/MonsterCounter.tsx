import { useComputed } from "@preact/signals";
import type { JSXInternal } from "preact/src/jsx";
import { counts } from "../../state/counts";

const Button = ({ children, ...props }: JSXInternal.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 font-bold text-white" {...props}>
      {children}
    </button>
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
      <Button onClick={() => add(-1)}>-</Button>
      <span class="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 font-bold text-white">
        {value}
      </span>
      <Button onClick={() => add(1)}>+</Button>
    </div>
  );
};
