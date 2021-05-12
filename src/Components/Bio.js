import React from 'react';
import { motion } from 'framer-motion';

const Bio = () => {
	return (
		<div className='bio'>
			<motion.div
				className='bio-content'
				initial={{ x: '-100vw' }}
				animate={{ x: 0 }}
				transition={{ duration: 1.2, type: 'spring' }}>
				<h3>Hey there! My name is Ford Pickert & welcome to my site!</h3>
				<img
					className='ford-pic'
					src='https://avatars.githubusercontent.com/u/77072895?s=400&u=857634227624e6c712ac21188188f8fd9dd4dfe5&v=4'
					alt='Ford Pickert'></img>
				<p>
					I am a full stack software engineer who enjoys applying myself to
					solve unique & challenging issues, particularly if it is for the
					betterment of the planet. My primary focuses currently are blockchain
					technology & music tech startups, as both are about to be
					revolutionized. Take a look around the site, & please don't be a
					stranger if you have any comments / questions!
				</p>
			</motion.div>
		</div>
	);
};

export default Bio;
