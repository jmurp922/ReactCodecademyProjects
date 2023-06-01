import React, { useState } from 'react';

function Contact() {
	const password = 'swordfish';
	const [authorized, setAuthorized] = useState(false);

	function handleSubmit(e) {
		const enteredPassword = e.target.querySelector(
			'input[type="password"]'
		).value;
		const auth = enteredPassword == password;
		setAuthorized(auth);
	}

	const login = (
		<form action='#' onSubmit={handleSubmit}>
			<input type='password' placeholde='Password' />
			<input type='submit' />
		</form>
	);

	const contactInfo = (
		<ul>
			<li>client@example.com</li>
			<li>555.555.5555</li>
		</ul>
	);

	return authorized === true ? (
		<div id='authorization'>
			<h1>Contact</h1>
			{contactInfo}
		</div>
	) : (
		<div>
			<h1>Enter the Password</h1>
			{login}
		</div>
	);
}

export default Contact;
