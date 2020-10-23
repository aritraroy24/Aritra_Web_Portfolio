import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import './Education.scss';
import { theme, mixins, media, Section, Heading } from '../../styles';
import Fade from 'react-reveal/Fade';
const { colors, fontSizes } = theme;

const StyledContainer = styled(Section)`
	position: relative;
	max-width: 700px;
	height: 500px;
	color: white;
	padding-top: 80px;
	padding-bottom: 600px;
	${media.thone`
	padding-bottom: 800px;
`};
	${media.phablet`
	padding-bottom: 800px;
`};
`;
const StyledTabs = styled.div`
	display: flex;
	align-items: flex-start;
	position: relative;
	${media.thone`
    display: block;
  `};
`;
const StyledTabList = styled.ul`
	display: block;
	position: relative;
	width: max-content;
	list-style-type: none;
	z-index: 1;
	${media.thone`
    display: flex;
    overflow-x: scroll;
    margin-bottom: 30px;
    width: calc(100% + 96px);
    margin-left: -50px;
  `};
	${media.phablet`
    width: calc(100% + 50px);
    margin-left: -25px;
  `};

	li {
		&:first-of-type {
			${media.thone`
        margin-left: 50px;
      `};
			${media.phablet`

      `};
		}
		&:last-of-type {
			${media.thone`
        padding-right: 50px;
      `};
			${media.phablet`
        // padding-right: 25px;
      `};
		}
	}
`;
const StyledTabButton = styled.button`
	${mixins.link};
	display: flex;
	align-items: center;
	width: 100%;
	border: none;
	background-color: transparent;
	height: ${theme.tabHeight}px;
	padding: 0 20px 2px;
	transition: ${theme.transition};
	border-left: 2px solid ${colors.darkGrey};
	text-align: left;
	white-space: nowrap;
	font-size: ${fontSizes.smish};
	color: ${props => (props.isActive ? colors.green : colors.lightGrey)};
	${media.tablet`padding: 0 15px 2px;`};
	${media.thone`
    ${mixins.flexCenter};
    padding: 0 15px;
    text-align: center;
    border-left: 0;
    border-bottom: 2px solid ${colors.darkGrey};
    min-width: 120px;
  `};
	&:hover,
	&:focus {
		background-color: ${colors.lightNavy};
	}
`;
const StyledHighlight = styled.span`
	display: block;
	// background: ${colors.green};
	// width: 2px;
	// height: ${theme.tabHeight}px;
	// border-radius: ${theme.borderRadius};
	// position: absolute;
	// top: 0;
	// left: 0;
	// transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
	// transition-delay: 0.1s;
	// z-index: 0;
	// transform: translateY(
		${props => (props.activeTabId > 0 ? props.activeTabId * theme.tabHeight : 0)}px
	);
	${media.thone`
    width: 100%;
    max-width: ${theme.tabWidth}px;
    height: 2px;
    top: auto;
    bottom: 0;
    transform: translateX(
      ${props =>
				props.activeTabId > 0 ? props.activeTabId * theme.tabWidth : 0}px
    );
    margin-left: 50px;
  `};
	${media.phablet`
    margin-left: 25px;
  `};
`;
const StyledContent = styled.div`
	position: relative;
	padding-top: 12px;
	padding-left: 30px;
	flex-grow: 1;
	${media.tablet`padding-left: 20px;`};
	${media.thone`padding-left: 0;`};
`;
const StyledTabContent = styled.div`
	top: 0;
	left: 0;
	width: 100%;
	&:focus {
		outline: none;
	}
	&:active {
		outline: none;
	}
	height: auto;
	opacity: ${props => (props.isActive ? 1 : 0)};
	z-index: ${props => (props.isActive ? 2 : -1)};
	position: ${props => (props.isActive ? 'relative' : 'absolute')};
	visibility: ${props => (props.isActive ? 'visible' : 'hidden')};
	transition: ${theme.transition};
	transition-duration: ${props => (props.isActive ? '0.5s' : '0s')};
	ul {
		padding: 0;
		margin: 0;
		margin-top: 20px;
		color: white;
		list-style: none;
		font-size: ${fontSizes.lg};
		li {
			position: relative;
			padding-left: 20px;
			font-family: 'Overpass';
			margin-bottom: 10px;
			&:before {
				content: '▹';
				position: absolute;
				left: 0;
				color: ${colors.green};
				line-height: ${fontSizes.xl};
			}
		}
	}
	a {
		${mixins.inlineLink};
	}
`;
const StyledJobTitle = styled.h4`
	color: ${colors.lightestSlate};
	font-size: ${fontSizes.xxl};
	font-weight: 500;
	margin-bottom: 5px;
`;
const StyledCompany = styled.span`
	color: ${colors.green};
`;
const StyledJobDetails = styled.h5`
	font-size: ${fontSizes.smish};
	font-weight: normal;
	letter-spacing: 0.5px;
	color: ${colors.lightSlate};
	margin-bottom: 30px;
	svg {
		width: 15px;
	}
`;

const Education = ({ data }) => {
	const [activeTabId, setActiveTabId] = useState(0);
	const revealContainer = useRef(null);

	return (
		<StyledContainer id='work' ref={revealContainer} name='Career'>
			<Fade cascade bottom>
				<Heading className='heading-work'>
					<span className='number-heading'>04. </span>Education
				</Heading>
				<StyledTabs>
					<StyledTabList role='tablist'>
						{data &&
							data.map((job, i) => {
								const { company } = job;
								return (
									<li key={i}>
										<StyledTabButton
											isActive={activeTabId === i}
											onClick={() => setActiveTabId(i)}
											role='tab'
											aria-selected={activeTabId === i ? 'true' : 'false'}
											aria-controls={`tab${i}`}
											id={`tab${i}`}
											tabIndex={activeTabId === i ? '0' : '-1'}>
											<span>{company}</span>
										</StyledTabButton>
									</li>
								);
							})}
						<StyledHighlight activeTabId={activeTabId} />
					</StyledTabList>
					<StyledContent>
						{data &&
							data.map(job => {
								const { title, url, company, dateRange, description, id } = job;
								return (
									<StyledTabContent
										key={id}
										isActive={activeTabId === id}
										id={`job${id}`}
										role='tabpanel'
										tabIndex='0'
										aria-labelledby={`job${id}`}
										aria-hidden={activeTabId !== id}>
										<StyledJobTitle>
											<span>{title}</span>
											<StyledCompany>
												<span>&nbsp;@&nbsp;</span>
												<a
													href={url}
													target='_blank'
													rel='nofollow noopener noreferrer'>
													{company}
												</a>
											</StyledCompany>
										</StyledJobTitle>
										<StyledJobDetails>
											<span>{dateRange}</span>
											<ul>
												{description.map((desc, index) => (
													<li key={index}>{desc}</li>
												))}
											</ul>
										</StyledJobDetails>
									</StyledTabContent>
								);
							})}
					</StyledContent>
				</StyledTabs>
			</Fade>
		</StyledContainer>
	);
};

export default Education;
