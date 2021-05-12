import React from 'react';
import './App.css';
import Bio from './Components/Bio';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Currently from './Components/Currently';
import { motion } from 'framer-motion';

function App() {
	return (
		<div className='app'>
			<Bio />
			{/* <Currently /> */}
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
