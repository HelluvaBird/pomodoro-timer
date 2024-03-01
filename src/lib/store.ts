import { writable } from 'svelte/store';

export const settings = writable({
	pomodoro: 25,
	short: 5,
	long: 15,
	breaks: 0
});
