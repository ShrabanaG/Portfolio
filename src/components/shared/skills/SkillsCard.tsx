import { FC } from "react";

import "./skillsCard.css";
import { SkillsCardProps } from "../../../ts/propTypes/skillsCardProps.types";
import { SKILL_CLASSNAME } from "../../../constants/skills";

const SkillsCard: FC<SkillsCardProps> = ({ header, skills }: SkillsCardProps): JSX.Element => {
	return (
		<div className="skills-card">
			<div className="header-container">
				<div className={`header-icon ${SKILL_CLASSNAME[header.label as keyof typeof SKILL_CLASSNAME]}`}>
					{header.icon()}
				</div>
				<div>{header.label}</div>
			</div>
			<div className="skill-items">
				{skills.map((skill, idx) => {
					return (
						<div className="skill-item" key={idx}>
							<span className="icon">{skill.icon()}</span>&nbsp;&nbsp;
							<span className="label">{skill.label}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SkillsCard;
