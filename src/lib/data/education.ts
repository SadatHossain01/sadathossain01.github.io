import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: 'Bachelor of Science',
		description: '',
		location: 'Dhaka, Bangladesh',
		logo: Assets.BUET,
		name: 'BUET',
		organization: 'Bangladesh University of Engineering and Technology',
		period: {
			from: new Date(2020, 1, 22),
			to: new Date(2025, 2, 25)
		},
		shortDescription: '',
		slug: 'buet',
		subjects: [
			'Object Oriented Programming',
			'Database',
			'Statistics',
			'Linear Algebra',
			'Discrete Mathematics',
			'Data Structure & Algorithm',
			'Compiler', 'Algorithm Engineering',
			'Computer Architecture',
			'Microcontroller & Microprocessor',
			'Operating System',
			'Computer Network',
			'Artificial Intelligence',
			'Information System Design',
			'Bioinformatics',
			'Computer Graphics',
			'Computer Security',
			'Machine Learning'
		]
	},
	{
		degree: 'Higher Secondary Certificate',
		description: '',
		location: 'Dhaka, Bangladesh',
		logo: Assets.NDC,
		name: 'NDC',
		organization: 'Notre Dame College',
		period: { from: new Date(2017, 6, 1), to: new Date(2018, 11, 31) },
		shortDescription: '',
		slug: 'ndc',
		subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Bangla', 'ICT']
	},
	{
		degree: 'Secondary School Certificate',
		description: '',
		location: 'Dhaka, Bangladesh',
		logo: Assets.SHKSC,
		name: 'SHKSC',
		organization: 'Shamsul Haque Khan School & College',
		period: { from: new Date(2010, 0, 1), to: new Date(2017, 1, 28) },
		shortDescription: '',
		slug: 'shksc',
		subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Bangla', 'ICT', 'Bangladesh & Global Studies']
	},
	{
		degree: 'Primary School',
		description: '',
		location: 'Dhaka, Bangladesh',
		logo: Assets.DSBLSC,
		name: 'DSBLSC',
		organization: 'Dhaka Shiksha Board Laboratory School & College',
		period: { from: new Date(2007, 0, 1), to: new Date(2009, 11, 31) },
		shortDescription: '',
		slug: 'dsblsc',
		subjects: ['Mathematics', 'English', 'Bangla', 'Science']
	},
	{
		degree: 'KG',
		description: '',
		location: 'Noakhali, Bangladesh',
		logo: Assets.PKG,
		name: 'PKG',
		organization: 'Police KG High School',
		period: { from: new Date(2006, 0, 1), to: new Date(2006, 11, 31) },
		shortDescription: '',
		slug: 'pkg',
		subjects: []
	}
];

const EducationData = { title, items };

export default EducationData;
