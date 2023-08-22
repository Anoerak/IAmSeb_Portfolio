import React, { useState } from 'react';

import './SebGPT.css';

const SebGPT = () => {
	const [prompt, setPrompt] = useState('');
	const [answerToDisplay, setAnswerToDisplay] = useState('');
	const [errorToDisplay, setErrorToDisplay] = useState('');
	const [loadingToDisplay, setLoadingToDisplay] = useState(false);

	const handleClick = () => {
		setLoadingToDisplay(true);
		setErrorToDisplay('');
		setAnswerToDisplay('');
		const getAnswer = async () => {
			try {
				const gptResponse = await fetch('https://sebgptapi.sebdevcloud.synology.me/v1/chat/completions', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						max_tokens: 100,
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
				setLoadingToDisplay(false);
				setAnswerToDisplay(gptResponseJson.choices[0].message.content);
			} catch (error) {
				setLoadingToDisplay(false);
				setErrorToDisplay(error.message);
			}
		};
		getAnswer();
	};

	return (
		<div className='OpenAI'>
			<h3>Need something?</h3>
			<p className='subtitle'>
				Well, let's ask my GPT! <br />
			</p>

			<div className='answer'>
				<input
					type='text'
					name='prompt'
					id='prompt'
					placeholder='Your question'
					onChange={(e) => {
						setPrompt(e.target.value);
					}}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							handleClick();
						}
					}}
				/>
				{loadingToDisplay ? <p>Loading...</p> : <p>{errorToDisplay ? 'Error' : <>{answerToDisplay}</>}</p>}
			</div>
			<button
				className='button'
				onClick={() => {
					handleClick();
				}}
			>
				Ask GPT
			</button>
		</div>
	);
};

export default SebGPT;
