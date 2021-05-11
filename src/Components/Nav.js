import React from 'react';
import App from '../App';
import { Route, Link } from 'react-router-dom';
import Projects from './Projects';
import Currently from './Currently';

const Nav = () => {
	return (
		<nav>
			<Link to='/'>
				<img src='' alt=''></img>
			</Link>

			<Link to='/projects'>
				<h3>Projects</h3>
			</Link>

			<Link to='/currently'>
				<h3>Currently Working On</h3>
			</Link>

			<Route path='/' exact component={App} />
			<Route path='/projects' component={Projects} />
			<Route path='/currently' component={Currently} />
		</nav>
	);
};

export default Nav;
