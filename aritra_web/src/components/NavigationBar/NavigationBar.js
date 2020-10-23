import React, { useState } from 'react';
import './NavigationBar.scss';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import Headroom from 'react-headroom';

const NavigationBar = () => {
	const [isActive, handleIsActive] = useState(false);

	return (
		<>
			<div
				className={`blur-hide ${isActive && 'blur-show'}`}
				onClick={() => handleIsActive(false)}></div>
			<div className={`nav-wrapper-mobile`}></div>
			<div className='nav-wrapper'>
				<Headroom disableInlineStyles>
					<Fade>
						<nav>
							<div
								className={`hamburger-menu ${isActive &&
									'hamburger-menu-active'}`}
								onClick={() => handleIsActive(!isActive)}>
								<div className='bar-1'></div>
								<div className='bar-2'></div>
								<div className='bar-3'></div>
							</div>
							<div className='logo'>
								<p>Aritra Roy</p>
							</div>
							<Fade top cascade delay={300}>
								<ul
									className={`navigation-ul ${isActive &&
										'navigation-ul-active'}`}>
									<Link
										activeClass='active-scroll'
										to='AboutMe'
										spy={true}
										smooth={true}
										offset={90}
										ignoreCancelEvents={true}
										duration={1200}>
										<li onClick={() => handleIsActive(false)}>
											<span>01.</span>About
										</li>
									</Link>
									<Link
										to='Projects'
										spy={true}
										smooth={true}
										offset={0}
										ignoreCancelEvents={true}
										duration={1200}>
										<li onClick={() => handleIsActive(false)}>
											<span>02.</span>Projects
										</li>
									</Link>
									<Link
										to='Blogs'
										spy={true}
										smooth={true}
										offset={0}
										ignoreCancelEvents={true}
										duration={1200}>
										<li onClick={() => handleIsActive(false)}>
											<span>03.</span>Blogs
										</li>
									</Link>
									<Link
										to='Career'
										spy={true}
										smooth={true}
										offset={0}
										ignoreCancelEvents={true}
										duration={1200}>
										<li onClick={() => handleIsActive(false)}>
											<span>04.</span>Education
										</li>
									</Link>
									<Link
										to='Footer'
										spy={true}
										smooth={true}
										offset={-600}
										ignoreCancelEvents={true}
										duration={1200}>
										<li onClick={() => handleIsActive(false)}>
											<span>05.</span>Contact
										</li>
									</Link>
								</ul>
							</Fade>
						</nav>
					</Fade>
				</Headroom>
			</div>
		</>
	);
};

export default NavigationBar;
