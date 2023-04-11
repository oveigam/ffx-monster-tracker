import { signal } from "@preact/signals";

export const counts = signal(new Map<string, number>());
