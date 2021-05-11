import React from 'react';

const Currently = () => {
	return (
		<div className='currently'>
			<h3>Currently, I'm working on:</h3>
			<ul>
				<li>
					<img
						src='https://image.flaticon.com/icons/png/512/824/824918.png'
						alt='Blockchain'></img>
					Blockchain
				</li>
				<li>
					<img
						src='https://solidity.readthedocs.io/en/develop/_images/logo.svg'
						alt='Solidity'></img>
					Solidity
				</li>
				<li>
					<img
						src='https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png'
						alt='React'></img>
					React
				</li>
				<li>
					<img
						src='https://image.pngaaa.com/282/619282-middle.png'
						alt='Python'></img>
					Python
				</li>
				<li>
					<img src='https://i.imgur.com/GX0qzK1.jpg' alt='Web3'></img>
					Web3.js
				</li>
			</ul>
		</div>
	);
};

export default Currently;
