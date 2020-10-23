import React from 'react';
import './AboutMe.scss';
import headshot from '../../assets/headshot.jpg';
import Fade from 'react-reveal/Fade';

const AboutMe = () => {
	return (
		<main className='AboutMe' name='AboutMe'>
			<Fade cascade>
				<Fade bottom></Fade>
				<section className='about-box'>
					<section className='about-description'>
						<h2>
							<span>01. </span>About Me
						</h2>
						<p>
							I'm a M.Sc. Chemistry student and self-taught Web Application Developer originally from
							india currently pursuing M.Sc. Chemistry as a Enthusiast Theoretical Chemist
							at{' '}
							<a
								href='https://www.pondiuni.edu.in/'
								target='_blank'
								rel='noopener noreferrer'
								className='hyperlink'>
								Pondicherry University
							</a>{' '}
							with a passion for building and experimenting with different web
							technologies. I like to design and build smart, eye-catching and
							pixel-perfect user interfaces with robust functionalities.
						</p>
						<p>
							While pursuing my M.Sc. Chemistry from {' '}
							<a
								href='https://www.pondiuni.edu.in/'
								target='_blank'
								rel='noopener noreferrer'
								className='hyperlink'>
								Pondicherry University
							</a>
							, I learned and started the intensive Web Application Development at my own interest. 
							I work on fast-paced, cross-functional platforms on a wide array of projects using different languages and tools.
						</p>
						<p>Here are a few technologies I've been working with recently:</p>
						<section className='skills'>
							<ul>
								<li>
									<span>▹</span> HTML5
								</li>
								<li>
									<span>▹</span> (S)CSS & Bootstrap
								</li>
								<li>
									<span>▹</span> JavaScript <span className='es6'>(ES6+)</span>
								</li>
								<li>
									<span>▹</span> Adobe Photoshop
								</li>
								<li>
									<span>▹</span> Python <span className='es6'>(Basic)</span>
								</li>
							</ul>
							<ul>
								<li>
									<span>▹</span> React
								</li>
								<li>
									<span>▹</span> Redux
								</li>
								<li>
									<span>▹</span> Firebase
								</li>
								<li>
									<span>▹</span> C Programming <span className='es6'>(Basic)</span>
								</li>
								<li>
									<span>▹</span> Java <span className='es6'>(Basic)</span>
								</li>
							</ul>
						</section>
					</section>
					<section>
						<img src={headshot} alt='Photo of Aritra' />
					</section>
				</section>
			</Fade>
		</main>
	);
};

export default AboutMe;
