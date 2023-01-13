import type { RequestEvent } from './$types';
import { openai } from '$lib/clients';
import { json } from '@sveltejs/kit';

export async function GET({ url }: RequestEvent) {
	const completion = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt: `Write me an auspicious phrase for Chinese New Year`,
		temperature: 0.9,
		max_tokens: 200
	});

	return json({ phrase: completion.data.choices[0].text });
}
