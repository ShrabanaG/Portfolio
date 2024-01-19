import { FC } from "react";
import SkillsCard from "../../shared/skills/SkillsCard";
import { DEV_TOOLS_SKILLS, FRONTEND_SKILLS, PROGRAMMING_SKILLS, TESTING_SKILLS } from "../../../constants/skills";

import { MdOutlineDraw } from "react-icons/md";
import { GrTestDesktop } from "react-icons/gr";
import { SiHiveBlockchain } from "react-icons/si";
import { GoCodeReview } from "react-icons/go";
import { VscTools } from "react-icons/vsc";

import "./skills.css";

const Skills: FC = (): JSX.Element => {
	return (
		<>
			<h2 className="section-header">
				{"<"} SKILLS {"/>"}
			</h2>
			<div className="skills">
				<SkillsCard header={{ label: "Frontend", icon: () => <MdOutlineDraw /> }} skills={FRONTEND_SKILLS} />
				<SkillsCard header={{ label: "Testing", icon: () => <GrTestDesktop /> }} skills={TESTING_SKILLS} />
				<SkillsCard
					header={{ label: "Programming", icon: () => <GoCodeReview /> }}
					skills={PROGRAMMING_SKILLS}
				/>
				<SkillsCard header={{ label: "Dev Tools", icon: () => <VscTools /> }} skills={DEV_TOOLS_SKILLS} />
			</div>
		</>
	);
};

export default Skills;
