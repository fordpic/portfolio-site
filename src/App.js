import React from 'react';
import './App.css';
import Bio from './Components/Bio';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import ProjCard from './Components/ProjCard';

function App() {
	return (
		<div className='app'>
			<Bio />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
