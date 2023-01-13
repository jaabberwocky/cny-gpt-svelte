import { OPENAI_KEY } from '$env/static/private';

import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
	apiKey: OPENAI_KEY
});
const openai = new OpenAIApi(configuration);

export { openai };
