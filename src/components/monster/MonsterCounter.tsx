import { signal, useComputed } from "@preact/signals";

const counts = signal(new Map<string, number>());

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
    <div class="flex flex-1 gap-2">
      <button onClick={() => add(-1)}>-</button>
      <span>{value}</span>
      <button onClick={() => add(1)}>+</button>
    </div>
  );
};
