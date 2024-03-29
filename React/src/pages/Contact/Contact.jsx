import React from 'react';
import ContactForm from '@Components/ContactForm/ContactForm';
import GlitchingText from '@Components/GlitchingText/GlitchingText';

import './Contact.css';

function Contact() {
	document.title = 'IamSeb w/ React | Contact';

	return (
		<section id='contact'>
			<GlitchingText text='************' dataValue='Code with Me' className='title1' tags='h2' />
			{/* <h2>Code with Me</h2> */}
			<p>
				✌️ Hey there! <br />
				<br />
				🙏🏻 Thanks for stopping by my digital crib 🛖. If you’ve got a project that needs some coding magic or just want to say hi,
				drop me a line using the form below.
				<br />
				<br />
				I’ll get back to you faster than you can say ‘JavaScript’!
			</p>
			<ContactForm />
		</section>
	);
}

export default Contact;
