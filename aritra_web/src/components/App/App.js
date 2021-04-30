import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import AboutMe from '../AboutMe/AboutMe';
import Socials from '../Socials/Socials';
import Condition from '../Socials/Condition'
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Blogs from '../Blogs/Blogs'
import Contact from '../Contact/Contact';
import Education from '../Education/Education'
import Home from '../Home/Home';
import jobs from '../../data/jobs';

const App = () => {
	return (
		<>
			<main name='Home'>
				<NavigationBar />
				<Home />
			</main>
			<AboutMe />
			<Projects />
			<Blogs />
			<Education data={jobs} />
			<Contact />
			<Condition />
			<Footer />
		</>
	);
};

export default App;
