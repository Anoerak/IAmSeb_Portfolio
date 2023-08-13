import React, { useState } from 'react';

import './ContactForm.css';

const FORM_ENDPOINT = 'https://public.herotofu.com/v1/f13130f0-396f-11ee-b9b4-c111e90b930c'; // TODO - update to the correct endpoint

const ContactForm = () => {
	const [submitted, setSubmitted] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();

		const inputs = e.target.elements;
		const data = {};

		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i].name) {
				data[inputs[i].name] = inputs[i].value;
			}
		}

		fetch(FORM_ENDPOINT, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Form response was not ok');
				}

				setSubmitted(true);
			})
			.catch((err) => {
				// Submit the form manually
				e.target.submit();
			});
	};

	if (submitted) {
		return (
			<>
				<h2>Thank you!</h2>
				<div>We'll be in touch soon.</div>
			</>
		);
	}

	return (
		<form action={FORM_ENDPOINT} onSubmit={handleSubmit} method='POST'>
			<div className='input__field'>
				<label htmlFor='name'>Name</label>
				<input type='text' placeholder='Your name' name='name' required />
			</div>
			<div className='input__field'>
				<label htmlFor='email'>Email</label>
				<input type='email' placeholder='Email' name='email' required />
			</div>
			<div className='input__field'>
				<label htmlFor='message'>Message</label>
				<textarea placeholder='Your message' name='message' rows={10} cols={10} required />
			</div>
			<input type='hidden' name='honeypot' id='honeypot' />
			<div className='input__field'>
				<button type='submit'> Send a message </button>
			</div>
		</form>
	);
};

export default ContactForm;
