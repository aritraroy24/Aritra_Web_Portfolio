import newsAholic from '../assets/projects/newsaholic.jpg'
import CompChemNewsBot from '../assets/projects/CompChemNewsBot.jpg'
import budgetBuy from '../assets/projects/budget_buy.jpg'
import jsNotes from '../assets/projects/js_notes.png'
import certGenerate from '../assets/projects/certificate_generator.jpg'

const projects = [
	{
		id: 1,
		title: 'Newsaholic',
		description:
			'An android news application built using React Native. This is a collaboration project under Duoscript organisation.',
		repoLink: 'https://github.com/DuoScript/Newsaholic',
		deployLink: '',
		image: newsAholic,
		role: 'Android Application Developer',
		weekDuration: 'Ongoing 6',
		technologies1: ['React Native', '', 'RSS Feed'],
		technologies2: []
	},
	{
		id: 2,
		title: 'CompChemNewsBot',
		description:
			'A Twitter Bot made using python tweepy and bs4 module to get the latest news about Computational Chemistry and tweet the news. It runs daily and hosted using WayScript Time Trigger',
		repoLink: 'https://github.com/aritraroy24/CompChemNewsBot',
		deployLink: 'https://twitter.com/CompChemNewsBot',
		image: CompChemNewsBot,
		role: 'Python Developer',
		weekDuration: '1',
		technologies1: ['Python3', 'bs4', 'Tweepy'],
		technologies2: []
	},
	{
		id: 3,
		title: 'Budget Buy',
		description:
			'A shopping web application with login and cart functionality. ',
		repoLink: 'https://github.com/aritraroy24/Budget_Buy_ShoppingSite',
		deployLink: 'https://budgetbuy.netlify.app/',
		image: budgetBuy,
		role: 'Web Application Developer',
		weekDuration: '3',
		technologies1: ['HTML5', 'CSS3', 'React'],
		technologies2: ['Redux', 'Firebase', 'Material UI']
	},
	{
		id: 4,
		title: 'My Notes',
		description:
			'A simple web application for taking notes using simple JavaScript and LocalStorage. ',
		repoLink: 'https://github.com/aritraroy24/JS_Note',
		deployLink: 'https://aritraroy24.github.io/JS_Note/',
		image: jsNotes,
		role: 'Web Application Developer',
		weekDuration: '1',
		technologies1: ['HTML5', 'CSS3', 'Javascript', 'Bootstrap 4'],
		technologies2: []
	},
	{
		id: 5,
		title: 'Certificate Generator',
		description:
			'An web application made using JavaScript for generating instant online certificates. ',
		repoLink: 'https://github.com/aritraroy24/Auto_Certificate_Generatore',
		deployLink: 'https://aritraroy24.github.io/Auto_Certificate_Generator/',
		image: certGenerate,
		role: 'Web Application Developer',
		weekDuration: '1',
		technologies1: ['HTML5', 'CSS3', 'Javascript', 'Bootstrap 4'],
		technologies2: []
	}
];

export default projects;
