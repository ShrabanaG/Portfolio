import { ProjectProps } from "../ts/propTypes/projectProps.types";
import {
	Thumbnail,
	SpotifyCloneThumbnail,
	YoutubeCloneThumbnail,
	CryptoverseThumbnail,
	Gpt3Thumbnail,
	ResturantThumbnail,
	BankThumbnail,
	MemoryGameThumbnail
} from "../assets";

import { LuBrain } from "react-icons/lu";
import { FaReact, FaBootstrap, FaChartLine } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { SiMaterialdesign, SiTailwindcss, SiAntdesign } from "react-icons/si";
import { CgIfDesign } from "react-icons/cg";
import { BiLogoTypescript, BiLogoRedux } from "react-icons/bi";
import { TbApi } from "react-icons/tb";

const AllProjetcs: ProjectProps[] = [
	{
		thumbnail: SpotifyCloneThumbnail,
		name: "Spotify Clone React App",
		desc: "A fully responsive spotify clone app using shazam core api,tailwind css",
		skillsLeft: [
			{
				icon: () => <FaReact color="#0A6ED1" />,
				label: "React"
			},
			{
				icon: () => <IoLogoJavascript color="#0A6ED1" />,
				label: "JavaScript"
			},
			{
				icon: () => <BiLogoRedux color="#7248B6" />,
				label: "Redux-toolkit"
			}
		],
		skillsRight: [
			{
				icon: () => <TbApi color="#7248B6" />,
				label: "RapidApI"
			},
			{
				icon: () => <IoLogoCss3 color="#244BDD" />,
				label: "CSS"
			},
			{
				icon: () => <SiTailwindcss color="#37BCF8" />,
				label: "Tailwind CSS"
			}
		],
		is_concept: true,
		hyperlink: "true",
		github: "https://github.com/ShrabanaG/react_cryptoverse.git"
	},
	{
		thumbnail: CryptoverseThumbnail,
		name: "Cryptoverse React App",
		desc: "A fully responsive cryptocurrencies app using redux toolkit, rapid api, chart js",
		skillsLeft: [
			{
				icon: () => <FaReact color="#0A6ED1" />,
				label: "React"
			},
			{
				icon: () => <IoLogoJavascript color="#0A6ED1" />,
				label: "JavaScript"
			},
			{
				icon: () => <BiLogoRedux color="#7248B6" />,
				label: "Redux-toolkit"
			}
		],
		skillsRight: [
			{
				icon: () => <TbApi color="#7248B6" />,
				label: "RapidApI"
			},
			{
				icon: () => <FaChartLine color="#244BDD" />,
				label: "ChartJs"
			},
			{
				icon: () => <SiAntdesign color="#37BCF8" />,
				label: "AntDesign"
			}
		],
		is_concept: true,
		hyperlink: "true",
		github: "https://github.com/ShrabanaG/react_cryptoverse.git"
	},
	{
		thumbnail: ResturantThumbnail,
		name: "Modern Resturant Website Design",
		desc: "A fully responsive modern resturant design using react & tailwind css",
		skillsLeft: [
			{
				icon: () => <FaReact color="#0A6ED1" />,
				label: "React"
			},
			{
				icon: () => <BiLogoTypescript color="#0A6ED1" />,
				label: "Typescript"
			},
			{
				icon: () => <SiTailwindcss color="#37BCF8" />,
				label: "Tailwind CSS"
			}
		],
		skillsRight: [
			{
				icon: () => <AiFillHtml5 color="#DC4A25" />,
				label: "HTML"
			},
			{
				icon: () => <IoLogoCss3 color="#244BDD" />,
				label: "CSS"
			},
			{
				icon: () => <CgIfDesign color="#0CC97E" />,
				label: "Figma"
			}
		],
		is_concept: true,
		hyperlink: "true",
		github: "https://github.com/ShrabanaG/gericht-resturant-website-design.git"
	},
	{
		thumbnail: BankThumbnail,
		name: "Modern Bank Website Design",
		desc: "A fully responsive modern ui/ux design using react & tailwind css",
		skillsLeft: [
			{
				icon: () => <FaReact color="#0A6ED1" />,
				label: "React"
			},
			{
				icon: () => <IoLogoJavascript color="#0A6ED1" />,
				label: "JavaScript"
			},
			{
				icon: () => <SiTailwindcss color="#37BCF8" />,
				label: "Tailwind CSS"
			}
		],
		skillsRight: [
			{
				icon: () => <AiFillHtml5 color="#DC4A25" />,
				label: "HTML"
			},
			{
				icon: () => <IoLogoCss3 color="#244BDD" />,
				label: "CSS"
			},
			{
				icon: () => <CgIfDesign color="#0CC97E" />,
				label: "Figma"
			}
		],
		is_concept: true,
		hyperlink: "true",
		github: "https://github.com/ShrabanaG/bank_modern_web_design.git"
	},
	{
		thumbnail: YoutubeCloneThumbnail,
		name: "Youtube CloneReact App",
		desc: "A fully responsive youtube clone using axios, rapid api, material-ui",
		skillsLeft: [
			{
				icon: () => <FaReact color="#0A6ED1" />,
				label: "React"
			},
			{
				icon: () => <IoLogoJavascript color="#0A6ED1" />,
				label: "JavaScript"
			},
			{
				icon: () => <TbApi color="#7248B6" />,
				label: "RapidApI"
			}
		],
		skillsRight: [
			{
				icon: () => <AiFillHtml5 color="#DC4A25" />,
				label: "HTML"
			},
			{
				icon: () => <IoLogoCss3 color="#244BDD" />,
				label: "CSS"
			},
			{
				icon: () => <SiMaterialdesign color="#3B7BF0" />,
				label: "Material UI"
			}
		],
		is_concept: true,
		hyperlink: "true",
		github: "https://github.com/ShrabanaG/react_cryptoverse.git"
	},
	{
		thumbnail: Gpt3Thumbnail,
		name: "Gpt3 OpenAI Website Design",
		desc: "A fully responsive gpt3 open-ai website design using react & tailwind css",
		skillsLeft: [
			{
				icon: () => <FaReact color="#0A6ED1" />,
				label: "React"
			},
			{
				icon: () => <IoLogoJavascript color="#0A6ED1" />,
				label: "JavaScript"
			},
			{
				icon: () => <SiTailwindcss color="#37BCF8" />,
				label: "Tailwind CSS"
			}
		],
		skillsRight: [
			{
				icon: () => <AiFillHtml5 color="#DC4A25" />,
				label: "HTML"
			},
			{
				icon: () => <IoLogoCss3 color="#244BDD" />,
				label: "CSS"
			},
			{
				icon: () => <CgIfDesign color="#0CC97E" />,
				label: "Figma"
			}
		],
		is_concept: true,
		hyperlink: "true",
		github: "https://github.com/ShrabanaG/gpt3_openAI_web_design.git"
	},

	{
		thumbnail: Thumbnail,
		name: "Voice Assistance React App",
		desc: "AI React News Application using Alan AI",
		skillsLeft: [
			{
				icon: () => <FaReact color="#0A6ED1" />,
				label: "React"
			},
			{
				icon: () => <IoLogoJavascript color="#0A6ED1" />,
				label: "JavaScript"
			},
			{
				icon: () => <SiMaterialdesign color="#3B7BF0" />,
				label: "Material UI"
			}
		],
		skillsRight: [
			{
				icon: () => <AiFillHtml5 color="#DC4A25" />,
				label: "HTML"
			},
			{
				icon: () => <IoLogoCss3 color="#244BDD" />,
				label: "CSS"
			},
			{
				icon: () => <LuBrain color="#0A6ED1" />,
				label: "Alan-ai"
			}
		],
		is_concept: true,
		hyperlink: "true",
		github: "https://github.com/ShrabanaG/alan_ai_news.git"
	},
	{
		thumbnail: MemoryGameThumbnail,
		name: "Memory Game React App",
		desc: "A memory game app using typescript & css",
		skillsLeft: [
			{
				icon: () => <FaReact color="#0A6ED1" />,
				label: "React"
			},
			{
				icon: () => <BiLogoTypescript color="#0A6ED1" />,
				label: "Typescript"
			}
		],
		skillsRight: [
			{
				icon: () => <AiFillHtml5 color="#7248B6" />,
				label: "HTML"
			},
			{
				icon: () => <IoLogoCss3 color="#244BDD" />,
				label: "CSS"
			}
		],
		is_concept: true,
		hyperlink: "true",
		github: "https://github.com/ShrabanaG/memory-game-react-app.git"
	}
];

export default AllProjetcs;
