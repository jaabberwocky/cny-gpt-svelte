import { error, json } from '@sveltejs/kit';
import type { RequestEvent } from './$types';

export async function GET({ url }: RequestEvent) {
	const num = url.searchParams.get('number');
	if (!num) {
		throw error(400, { message: 'no number specified' });
	} else if (num.length != 4) {
		throw error(400, { message: 'number supplied is not 4 digits' });
	}
	const bodyToSend = {
		numbers: [num, ''],
		checkCombinations: 'false',
		sortTypeInteger: '2'
	};
	const resp = await fetch(
		'https://www.singaporepools.com.sg/_layouts/15/FourD/FourDCommon.aspx/Get4DNumberCheckResultsJSON',
		{
			method: 'POST',
			body: JSON.stringify(bodyToSend),
			headers: { 'Content-Type': 'application/json' }
		}
	);
	const data = await resp.json();
	return json(data);
}
