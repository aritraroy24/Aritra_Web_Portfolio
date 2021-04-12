import ohMyPoshV3 from '../assets/blogs/oh-my-posh_V3.png'
import logoSecret from '../assets/blogs/logo_secret.png'
import quantumComputing from '../assets/blogs/quantum_computing.png'
import ohMyPosh from '../assets/blogs/oh-my-posh.png'
import emailPython from '../assets/blogs/email_python.png'

const blogs = [
	{
		id: 1,
		title: 'Oh-My-Posh V3 is Out in the Market🎉🎉🎉',
		repoLink: 'https://gist.github.com/aritraroy24/2a578d151ae8209aabdcfa5b477b998e',	
		blogLink: 'https://medium.com/illumination/oh-my-posh-v3-is-out-in-the-market-9ef3def19e58',
		image: ohMyPoshV3,
		technologies: ['oh-my-posh V3'],
	},
	{
		id: 2,
		title: 'Top Logo Secrets: You Don’t Know About 🤷‍♂️🤷‍♂️🤷‍♂️',
		// repoLink: '',	
		blogLink: 'https://medium.com/illumination/top-logo-secrets-you-dont-know-about-%EF%B8%8F-%EF%B8%8F-%EF%B8%8F-33a2866d2018',
		image: logoSecret,
		technologies: ['Logos', 'Secrets'],
	},
	{
		id: 3,
		title: 'Quantum Computing: A Trade War',
		// repoLink: '',	
		blogLink: 'https://medium.com/codequake/quantum-computing-a-trade-war-c92a80e0bbfe',
		image: quantumComputing,
		technologies: ['Quantum', 'qubit'],
	},
	{
		id: 4,
		title: 'Customize Your Windows PowerShell With oh-my-posh & posh-git',
		// repoLink: '',
		blogLink: 'https://medium.com/codequake/customize-your-windows-powershell-with-oh-my-posh-posh-git-83df55294cde',
		image: ohMyPosh,
		technologies: ['oh-my-posh', 'posh-git'],
	},
	{
		id: 5,
		title: 'Retrieving Email and Phone No. from Google Contacts using Python and Gmail API',
		repoLink: 'https://github.com/aritraroy24/python_projects/tree/master/emails-numbers_from_contacts',
		blogLink: 'https://medium.com/analytics-vidhya/retrieving-email-and-phone-no-7c60ad3a9b69',
		image: emailPython,
		technologies: ['Python', 'Gmail API'],
	}
];

export default blogs;