import { json } from '@sveltejs/kit';
import type { RequestEvent } from './$types';

export function GET({ url }: RequestEvent) {
	const numArr = [];
	for (let i = 0; i < 4; i++) {
		numArr.push(+Math.floor(Math.random() * 10));
	}
	return json({ number: numArr.join('') });
}
