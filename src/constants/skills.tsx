import { Skill } from "../ts/propTypes/skillsCardProps.types";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { BiLogoRedux } from "react-icons/bi";
import { AiOutlineHtml5, AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { CgIfDesign } from "react-icons/cg";
import { SiMaterialdesign } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import { SiNestjs } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaDigitalOcean } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { GrOracle } from "react-icons/gr";
import { FaEthereum } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { LiaEthereum } from "react-icons/lia";
import { FaHardHat } from "react-icons/fa";
import { TbCurrencyEthereum } from "react-icons/tb";
import { SiWeb3Dotjs } from "react-icons/si";
import { SiIpfs } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiMocha } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiSolidity } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { TbBrandVscode } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaBitbucket } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { SiSublimetext } from "react-icons/si";

export const FRONTEND_SKILLS: Skill[] = [
	{
		icon: () => <FaReact color="#0A6ED1" />,
		label: "React"
	},
	{
		icon: () => <BiLogoRedux color="#7248B6" />,
		label: "Redux"
	},
	{
		icon: () => <AiFillHtml5 color="#DC4A25" />,
		label: "HTML"
	},
	{
		icon: () => <IoLogoCss3 color="#244BDD" />,
		label: "CSS"
	},
	{
		icon: () => <SiTailwindcss color="#37BCF8" />,
		label: "Tailwind CSS"
	},
	{
		label: "Bootstrap",
		icon: () => <FaBootstrap color="#8112F4" />
	},
	{
		icon: () => <SiMaterialdesign color="#3B7BF0" />,
		label: "Material UI"
	},
	{
		icon: () => <CgIfDesign color="#0CC97E" />,
		label: "Figma"
	}
];

export const BACKEND_SKILLS: Skill[] = [
	{
		icon: () => <FaNodeJs color="#39823A" />,
		label: "NodeJS"
	},
	{
		icon: () => <SiExpress color="#72A760" />,
		label: "ExpressJS"
	},
	{
		icon: () => <AiOutlineApi color="#B2C7DB" />,
		label: "REST API"
	},
	{
		icon: () => <SiNestjs color="#EA2845" />,
		label: "NestJS"
	},
	{
		icon: () => <FaAws color="#FF9900" />,
		label: "AWS"
	},
	{
		icon: () => <FaDigitalOcean color="#027FFF" />,
		label: "Digital Ocean"
	},
	{
		icon: () => <FaDocker color="#2491E5" />,
		label: "Docker"
	},
	{
		icon: () => <SiKubernetes color="#3069DD" />,
		label: "Kubernetes"
	}
];

export const DATABASE_SKILLS: Skill[] = [
	{
		icon: () => <SiMongodb color="#3E9838" />,
		label: "MongoDB"
	},
	{
		icon: () => <SiMysql color="#01718B" />,
		label: "MySQL"
	},
	{
		icon: () => <GrOracle color="#F91312" />,
		label: "Oracle"
	}
];

export const TESTING_SKILLS: Skill[] = [
	{
		icon: () => <SiJest color="#893F5B" />,
		label: "Jest"
	},
	{
		icon: () => <FaReact color="#FC4545" />,
		label: "RTL"
	}
];

export const BlOCKCHAIN_SKILLS: Skill[] = [
	{
		icon: () => <FaEthereum color="#658EB5" />,
		label: "Ethereum"
	},
	{
		icon: () => <FaBitcoin color="#EF8E19" />,
		label: "Bitcoin"
	},
	{
		icon: () => <LiaEthereum color="#676C93" />,
		label: "Smart Contracts"
	},
	{
		icon: () => <FaHardHat color="#FFF000" />,
		label: "Hardhat"
	},
	{
		icon: () => <TbCurrencyEthereum color="#FFF000" />,
		label: "Ether.js"
	},
	{
		icon: () => <SiWeb3Dotjs color="#D9A22A" />,
		label: "Web3.js"
	},
	{
		icon: () => <SiIpfs color="#4A9597" />,
		label: "IPFS"
	}
];

export const PROGRAMMING_SKILLS: Skill[] = [
	{
		icon: () => <IoLogoJavascript color="#0A6ED1" />,
		label: "JavaScript"
	},
	{
		icon: () => <BiLogoTypescript color="#0A6ED1" />,
		label: "TypeScript"
	},
	{
		icon: () => <TbBrandCpp color="#0C4A86" />,
		label: "C/C++"
	}
];

export const DEV_TOOLS_SKILLS: Skill[] = [
	{
		icon: () => <TbBrandVscode color="#48AAED" />,
		label: "VSCode"
	},
	{
		icon: () => <SiSublimetext color="#F59400" />,
		label: "Sublime"
	},
	{
		icon: () => <FaGit color="#E84F31" />,
		label: "Git"
	},
	{
		icon: () => <FaBitbucket color="#2480F7" />,
		label: "Bitbucket"
	},
	{
		icon: () => <FaGithub color="#ffffff" />,
		label: "Github"
	}
];

export const SKILL_CLASSNAME = {
	Frontend: "frontend",
	Backend: "backend",
	Database: "database",
	Testing: "testing",
	Blockchain: "blockchain"
};
