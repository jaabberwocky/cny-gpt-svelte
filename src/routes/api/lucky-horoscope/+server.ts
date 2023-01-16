import { openai } from '$lib/clients';
import { error, json } from '@sveltejs/kit';
import type { RequestEvent } from './$types';
import { OPENAI_MODEL_TEMPERATURE } from '$env/static/private';

export async function GET({ url }: RequestEvent) {
	const name = url.searchParams.get('name');

	if (!name) {
		throw error(400, { message: 'name not supplied' });
	}
	const completion = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt: `Write me a 75-word auspicious horoscope for Chinese New Year for ${name} in the Year of the Rabbit`,
		temperature: +OPENAI_MODEL_TEMPERATURE,
		max_tokens: 200
	});

	return json({ horoscope: completion.data.choices[0].text });
}
