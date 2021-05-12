import React from 'react';

const Currently = () => {
	return (
		<div className='currently'>
			<h3>Currently, I'm working on:</h3>
			<ul className='current-items'>
				<li>
					<img
						src='https://image.flaticon.com/icons/png/512/824/824918.png'
						alt='Blockchain'></img>
					<br />
					Blockchain
				</li>
				<li>
					<img
						src='https://solidity.readthedocs.io/en/develop/_images/logo.svg'
						alt='Solidity'></img>
					<br />
					Solidity
				</li>
				<li>
					<img
						src='https://cdn.worldvectorlogo.com/logos/react-1.svg'
						alt='React'></img>
					<br />
					React
				</li>
				<li>
					<img src='https://i.imgur.com/jNKe3I5.png' alt='Python'></img>
					<br />
					Python
				</li>
				<li>
					<img src='https://i.imgur.com/GX0qzK1.jpg' alt='Web3'></img>
					<br />
					Web3.js
				</li>
			</ul>
		</div>
	);
};

export default Currently;
