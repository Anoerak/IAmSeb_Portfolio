import { useEffect, useState } from 'react';

const SebLlamaGPT = (/** @type {string} */ props) => {
	const [prompt, setPrompt] = useState(props);
	const [answer, setAnswer] = useState('');
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		console.log('prompt in hook is: ' + prompt);
		if (prompt === '') {
			return;
		}
		const getAnswer = async () => {
			try {
				const gptResponse = await fetch('https://sebgptapi.sebdevcloud.synology.me/v1/chat/completions', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						messages: [
							{
								role: 'user',
								content: prompt,
							},
						],
					}),
				});

				const gptResponseJson = await gptResponse.json();
				console.log(gptResponseJson.choices[0].message.content);
				setLoading(false);
				setAnswer(gptResponseJson.choices[0].message.content);
			} catch (error) {
				setLoading(false);
				setError(error.message);
			}
		};
		getAnswer();
	}, [prompt]);

	return { answer, error, loading };
};

export default SebLlamaGPT;
