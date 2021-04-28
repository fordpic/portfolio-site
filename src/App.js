import React from 'react';
import './App.css';
import Bio from './Components/Bio';
import Contact from './Components/Contact';
import Projects from './Components/Projects';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>Ford Pickert's Website</header>
			<Bio />
			<Contact />
			<Projects />
		</div>
	);
}

export default App;
