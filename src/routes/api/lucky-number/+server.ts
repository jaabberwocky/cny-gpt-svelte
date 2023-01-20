import { json } from '@sveltejs/kit';
import { openai } from '$lib/clients';
import { OPENAI_MODEL_TEMPERATURE } from '$env/static/private';
import type { RequestEvent } from './$types';

export async function GET({ url }: RequestEvent) {
	const completion = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt: `Do not prepend your response with any characters. Provide me with a 4 digit number from 0000 to 9999.`,
		temperature: +OPENAI_MODEL_TEMPERATURE,
		max_tokens: 200
	});

	return json({ number: completion.data.choices[0].text });
}
