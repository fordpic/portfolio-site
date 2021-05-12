import React, { useState, useEffect } from 'react';
import {
	motion,
	MotionValue,
	useTransform,
	useViewportScroll,
} from 'framer-motion';

// Individual projects; exporting to App
const Projects = () => {
	const [shouldShowActions, setShouldShowActions] = useState(0);
	const [lastYPos, setLastYPos] = useState(0);

	const { scrollYProgress } = useViewportScroll();
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

	useEffect(() => {
		const handleScroll = () => {
			const yPos = window.scrollY;
			const isScrollingUp = yPos > lastYPos;

			setShouldShowActions(isScrollingUp);
			setLastYPos(yPos);
		};

		window.addEventListener('scroll', handleScroll, false);

		return () => {
			window.removeEventListener('scroll', handleScroll, false);
		};
	}, [lastYPos]);

	return (
		<div className='project-info'>
			<motion.h1
				className='project-header'
				// transition={{ duration: 1.2, type: 'spring' }}
			>
				Projects
			</motion.h1>
			<motion.div
				className='job-finder'
				animate={{ opacity: shouldShowActions ? 1 : 0.3 }}
				initial={{ opacity: 0 }}
				transition={{ opacity: { duration: 0.5 } }}
				// style={{ opacity }}
			>
				<h1>Job Finder</h1>
				<img
					src='https://user-images.githubusercontent.com/77935828/115999954-69537580-a5ab-11eb-933f-2cd5c154bc17.png'
					alt='Job Finder'></img>
				<br />
				<p>
					Job Finder was the capstone project for my software immersive coding
					bootcamp. It leverages the powerful serverless backend of AWS Amplify
					& Lambda with Python scripts to scrape data from the popular job
					posting sites Indeed & Monster. It utilizes the BeautifulSoup library
					& the Scraper API client to dynamically scrape & parse the data back
					to the user in an intuitive & easy to use UI, created with React. Just
					input the type of job you're looking for & in which location & you're
					good to go!
				</p>
				<br />
				<a
					className='job-link'
					href='https://main.d3r7d6c4tw4h5f.amplifyapp.com/'>
					Link to deployed app
				</a>
			</motion.div>
			<motion.div
				className='whale-watcher'
				animate={{ opacity: shouldShowActions ? 1 : 0.3 }}
				initial={{ opacity: 0 }}
				transition={{ opacity: { duration: 0.5 } }}
				// style={{ opacity }}
			>
				<h1>Crypto Whale Watcher</h1>
				<img
					src='https://camo.githubusercontent.com/afd498c4d06e8bd87b98caf4b9ff4e2fd3f3e7e8877ed3f413e920744b533f64/68747470733a2f2f6d656469612e6769742e67656e6572616c617373656d622e6c792f757365722f33343233312f66696c65732f35643331636338302d383539382d313165622d383935382d613434323066633761363466'
					alt='Crypto Whale Watcher'></img>
				<br />
				<p>
					Crypto Whale Watcher was a fun little project that I completed when I
					was first getting to know React. I wanted to build something to test
					out my skills, but I wanted it to be something that I was interested
					in & could presumably use in the future. I settled on an app that
					pings the CoinGecko API & then dynamically displays the data from the
					top 100 coins by market cap as a whole, as well as displaying
					individual info pages about each of the tokens as well. It was an
					early project but I really enjoyed it, & I definitely plan on
					revisiting it in the near future to give it some touch ups.
				</p>
				<br />
				<motion.button
					whileHover={{
						scale: 1.1,
					}}
					onClick={() => {
						<a
							className='job-link'
							href='https://crypto-whale-watcher.herokuapp.com/'>
							{/* Link to deployed app */}
						</a>;
					}}>
					Link to deployed app
				</motion.button>
			</motion.div>
			<motion.div
				className='deep-dive'
				animate={{ opacity: shouldShowActions ? 1 : 0.3 }}
				initial={{ opacity: 0 }}
				transition={{ opacity: { duration: 0.5 } }}
				// style={{ opacity }}
			>
				<h1>deepDive Music App</h1>
				<img
					src='https://user-images.githubusercontent.com/77953457/113584140-288dbf80-95f0-11eb-8560-0babd51733b6.png'
					alt='deepDive'></img>
				<br />
				<p>
					deepDive was a music app that I created with three other partners from
					my coding bootcamp cohort. The idea was to make a music review site
					that doubled as a place for people to come & discuss any music they
					wanted, major or minor, metal or pop. We used React for the frontend &
					Node/Express for the backend, incorporating user authentication (first
					time playing with that) & MongoDB as our database to store our data.
					Sign up & post some of your favorites today!
				</p>
				<br />
				<a
					className='job-link'
					href='https://music-review-frontend.herokuapp.com/'
					alt=''>
					Link to deployed app
				</a>
			</motion.div>
		</div>
	);
};

export default Projects;
