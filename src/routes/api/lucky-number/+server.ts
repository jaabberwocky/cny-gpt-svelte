import { error, json } from '@sveltejs/kit';
import type { RequestEvent } from './$types';

export function GET({ url }: RequestEvent) {
	const obj = {
		number: Math.floor(Math.random() * (9999 - 0 + 1) + 0)
	};
	return json(obj);
}
