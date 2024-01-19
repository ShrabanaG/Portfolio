import { Skill } from "../ts/propTypes/skillsCardProps.types";

import { BiLogoRedux, BiLogoTypescript } from "react-icons/bi";
import { AiOutlineHtml5, AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss, SiAntdesign, SiMaterialdesign, SiJest, SiSublimetext } from "react-icons/si";
import { CgIfDesign } from "react-icons/cg";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandCpp, TbBrandVscode } from "react-icons/tb";
import { FaGithub, FaBitbucket, FaGit, FaReact, FaBootstrap } from "react-icons/fa";

export const FRONTEND_SKILLS: Skill[] = [
	{
		icon: () => <FaReact color="#0A6ED1" />,
		label: "React"
	},
	{
		icon: () => <BiLogoRedux color="#7248B6" />,
		label: "Redux, Redux-Toolkit"
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
		icon: () => <SiAntdesign color="#37BCF8" />,
		label: "AntDesign"
	},
	{
		icon: () => <CgIfDesign color="#0CC97E" />,
		label: "Figma"
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
	Testing: "testing"
};
