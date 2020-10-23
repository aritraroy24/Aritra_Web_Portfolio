import designCard from '../assets/projects/design_your_card.png'
import budgetBuy from '../assets/projects/budget_buy.jpg'
import jsNotes from '../assets/projects/js_notes.png'
import certGenerate from '../assets/projects/certificate_generator.jpg'
import americanHero from '../assets/projects/american_hero.png'

const projects = [
	{
		id: 1,
		title: 'Design Your Digital Card',
		description:
			'A web app to make a digital business card for you within 5 minutes.',
		repoLink: 'https://github.com/aritraroy24/Design_Your_Card',
		deployLink: 'https://create-digital-card.netlify.app',
		image: designCard,
		role: 'Web Application Developer',
		weekDuration: 'Ongoing 1',
		technologies1: ['HTML5', 'CSS3', 'Bootstrap 4', 'React'],
		technologies2: []
	},
	{
		id: 2,
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
		id: 3,
		title: 'My Notes',
		description:
			'A simple web application for taking notes using simple JavaScript and LocalStorage. ',
		repoLink: 'https://github.com/aritraroy24/Budget_Buy_ShoppingSite',
		deployLink: 'https://budgetbuy.netlify.app/',
		image: jsNotes,
		role: 'Web Application Developer',
		weekDuration: '1',
		technologies1: ['HTML5', 'CSS3', 'Javascript', 'Bootstrap 4'],
		technologies2: []
	},
	{
		id: 4,
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
	,
	{
		id: 5,
		title: 'Amercan Hero',
		description:
			'A simple restrurent web application UI made using HTML and CSS for generating instant online certificates. ',
		repoLink: 'https://github.com/aritraroy24/Restaurant_American_Hero',
		deployLink: 'https://aritraroy24.github.io/Restaurant_American_Hero/',
		image: americanHero,
		role: 'Web Application Developer',
		weekDuration: '1',
		technologies1: ['HTML5', 'CSS3'],
		technologies2: []
	}
];

export default projects;
