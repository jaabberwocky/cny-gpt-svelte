import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const num = writable('');
export const phrase = writable('');
export const horoscope = writable('');
export const previousResults: Writable<Array<{ PrizeCode: string; Date: string }>> = writable([]);
export const dataLoaded = writable(false);
export const numAppearances = writable('');
