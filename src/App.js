import React from 'react';
import './App.css';
import Bio from './Components/Bio';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Currently from './Components/Currently';
import { Route, Link } from 'react-router-dom';

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
