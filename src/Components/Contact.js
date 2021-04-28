import React from 'react';
import { Mail, Linkedin } from 'react-feather';

const Contact = () => {
	return (
		<div className='contact'>
			<h3>Please feel free to reach out to me at the below:</h3>
			<br></br>
			<br></br>
			<a href='mailto:fordpickert@gmail.com' alt=''>
				<Mail size={48} />
			</a>
			{'  '}
			<a href='https://www.linkedin.com/in/fordpickert/' alt=''>
				<Linkedin size={48} />
			</a>
		</div>
	);
};

export default Contact;
