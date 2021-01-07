import emailPython from '../assets/blogs/email_python.png'
import ohMyPosh from '../assets/blogs/oh-my-posh.png'
import quantumComputing from '../assets/blogs/quantum_computing.png'
const blogs = [
	{
		id: 1,
		title: 'Customize Your Windows PowerShell With oh-my-posh',
		// repoLink: '',
		blogLink: 'https://medium.com/codequake/customize-your-windows-powershell-with-oh-my-posh-posh-git-83df55294cde',
		image: ohMyPosh,
		technologies: ['oh-my-posh', 'posh-git'],
	},
	{
		id: 2,
		title: 'Retrieving Email and Phone No. from Google Contacts',
		repoLink: 'https://github.com/aritraroy24/python_projects/tree/master/emails-numbers_from_contacts',
		blogLink: 'https://medium.com/analytics-vidhya/retrieving-email-and-phone-no-7c60ad3a9b69',
		image: emailPython,
		technologies: ['Python', 'Gmail API'],
	},
	{
		id: 3,
		title: 'Quantum Computing: A Trade War 																											',
		// repoLink: '',	
		blogLink: 'https://medium.com/codequake/quantum-computing-a-trade-war-c92a80e0bbfe',
		image: quantumComputing,
		technologies: ['Quantum', 'qubit'],
	}
];

export default blogs;