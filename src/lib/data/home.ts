import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';
const description =
	'Mohammad Sadat Hossain | CS Graduate from BUET | AI & Bioinformatics Researcher | Adjunct Lecturer at CSE, BUET | Competitive Programming | Hackathon | Deep Learning Competitions | Exploring the intersection of computational methods and scientific innovation in healthcare and genomics. Open to research opportunities and collaboration.';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName}`,
	description:
		'Hello, this is Sadat, a fresh CS graduate from Bangladesh University of Engineering and Technology (BUET). I am passionate about research in bioinformatics, artificial intelligence for scientific and medical applications, and machine learning. During my undergraduate journey, I actively engaged in competitive programming, hackathons, and deep learning competitions, which strengthened my problem-solving abilities. I am currently open to exploring research opportunities where I can apply computational methods to solve complex scientific challenges. I am excited about making impactful contributions to the scientific community while continuously expanding my knowledge in emerging technologies. With a decent foundation in algorithms and programming, I am eager to collaborate on projects that address real-world problems in healthcare, genomics, and related fields.',
	links: [
		{
			label: 'GitHub',
			href: 'https://github.com/SadatHossain01',
			icon: 'i-carbon-logo-github'
		},
		{
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/SadatHossain01',
			icon: 'i-carbon-logo-linkedin'
		},
		{
			label: 'YouTube',
			href: 'https://www.youtube.com/@SadatHossain01',
			icon: 'i-carbon-logo-youtube'
		},
		{
			label: 'Facebook',
			href: 'https://www.facebook.com/sadathossain01',
			icon: 'i-carbon-logo-facebook'
		},
		{
			label: 'Instagram',
			href: 'https://www.instagram.com/sadathossain01',
			icon: 'i-carbon-logo-instagram'
		},
		{ label: 'X', href: 'https://x.com/SadatHossain01', icon: 'i-carbon-logo-x' },
		{ label: 'Primary Mail', href: 'mailto:sadatho2014@gmail.com', icon: 'i-carbon-at' },
		{ label: 'Secondary Mail', href: 'mailto:sadatdbt@gmail.com', icon: 'i-carbon-at' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	description,
	hero,
	carousel
};

export default HomeData;
