import React from 'react';
import './App.css';
import Bio from './Components/Bio';
import Contact from './Components/Contact';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>Ford Pickert's Website</header>
			<Bio />
			<Contact />
		</div>
	);
}

export default App;
