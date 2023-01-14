import { writable } from 'svelte/store';

export const num = writable('');
export const phrase = writable('');
export const horoscope = writable('');
export const previousResults = writable([]);
export const dataLoaded = writable(false);
export const numAppearances = writable('');
