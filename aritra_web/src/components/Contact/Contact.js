import React from 'react';
import './Contact.scss';
import Fade from 'react-reveal/Fade';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
	return (
		<Fade cascade>
			<main className='Contact' name='Contact' id="Contact">
				<h2>
					<span className='number-heading'>05.</span>Get In Touch
				</h2>
				<p>
					For you my inbox is
					always open!
				</p>
				<ContactForm />
			</main>
		</Fade>
	);
};

export default Contact;
