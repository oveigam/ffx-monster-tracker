import { persistentMap } from "@nanostores/persistent";

export const $monsterCaptures = persistentMap<Record<string, string>>("monsterCaptures", {});

const getMonsterCaptureCount = (monsterId: string) => {
  const value = $monsterCaptures.get()[monsterId];
  const numeric = value ? Number(value) : 0;
  return isNaN(numeric) ? 0 : numeric;
};

export const incrementMonsterCapture = (monsterId: string) => {
  const count = getMonsterCaptureCount(monsterId);
  const newCount = count < 10 ? count + 1 : 10;
  $monsterCaptures.setKey(monsterId, newCount.toString());
};

export const decrementMonsterCapture = (monsterId: string) => {
  const count = getMonsterCaptureCount(monsterId);
  const newCount = count > 0 ? count - 1 : 0;
  $monsterCaptures.setKey(monsterId, newCount.toString());
};
