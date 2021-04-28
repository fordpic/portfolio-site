import React from 'react';

const Projects = () => {
	return (
		<div className='project-info'>
			<div className='job-finder'>
				<h1>Job Finder</h1>
				<p>For this app, I...</p>
				<img
					src='https://user-images.githubusercontent.com/77935828/115999954-69537580-a5ab-11eb-933f-2cd5c154bc17.png'
					alt='Job Finder'></img>
				<br />
				<br />
				<a href='https://main.d3r7d6c4tw4h5f.amplifyapp.com/'>
					Link to deployed app
				</a>
			</div>
			<div className='whale-watcher'>
				<h1>Crypto Whale Watcher</h1>
				<p>For this app, I...</p>
				<img
					src='https://camo.githubusercontent.com/afd498c4d06e8bd87b98caf4b9ff4e2fd3f3e7e8877ed3f413e920744b533f64/68747470733a2f2f6d656469612e6769742e67656e6572616c617373656d622e6c792f757365722f33343233312f66696c65732f35643331636338302d383539382d313165622d383935382d613434323066633761363466'
					alt='Crypto Whale Watcher'></img>
				<br />
				<br />
				<a href='https://crypto-whale-watcher.herokuapp.com/'>
					Link to deployed app
				</a>
			</div>
			<div className='deep-dive'>
				<h1>deepDive Music App</h1>
				<p>For this app, I...</p>
				<img
					src='https://user-images.githubusercontent.com/77953457/113584140-288dbf80-95f0-11eb-8560-0babd51733b6.png'
					alt='deepDive'></img>
				<br />
				<br />
				<a href='https://music-review-frontend.herokuapp.com/' alt=''>
					Link to deployed app
				</a>
			</div>
		</div>
	);
};

export default Projects;
