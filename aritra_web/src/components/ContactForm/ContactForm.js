import React, { useState } from 'react';
import './ContactForm.scss';
import Fade from 'react-reveal/Fade';

const ContactForm = props => {
	const [status, updateStatus] = useState('');
	const [name, updateName] = useState('');
	const [phone, updatePhone] = useState('');
	const [email, updateEmail] = useState('');
	const [message, updateMessage] = useState('');

	const submitForm = event => {
		event.preventDefault();
		const form = event.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				updateStatus('SUCCESS');
			} else {
				updateStatus('ERROR');
			}
		};
		xhr.send(data);
	};


	return (
		<Fade bottom distance='60px'>
			<form
				className='ContactForm'
				onSubmit={submitForm}
				action={'https://formspree.io/f/mdopgljw'}
				method={'POST'}>
				<label>Name:</label>
				<input
					type='text'
					name='name'
					onChange={e => updateName(e.target.value)}
					value={name}
				/>
				<label>Phone No:</label>
				<input
					type='number'
					name='phone'
					onChange={e => updatePhone(e.target.value)}
					value={phone}
				/>
				<label>Email:</label>
				<input
					type='email'
					name='email'
					onChange={e => updateEmail(e.target.value)}
					value={email}
				/>
				<label className='message'>Message:</label>
				<h4>Hello Aritra,</h4>
				<textarea
					type='text'
					name='message'
					onChange={e => updateMessage(e.target.value)}
					value={message}></textarea>
				{status === 'SUCCESS' ? (
					<p>Thanks!</p>
				) : (
						<button disabled={!name || !email || !message}>Send Message</button>
					)}
				{status === 'ERROR' && <p>Ooops! There was an error.</p>}
			</form>
		</Fade>
	);
};

export default ContactForm;
