import { FC } from "react";
import { ProjectProps } from "../../../ts/propTypes/projectProps.types";

import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import "./projects.css";

const Project: FC<ProjectProps> = ({
	name,
	desc,
	skillsLeft,
	skillsRight,
	is_concept,
	hyperlink,
	github,
	thumbnail
}: ProjectProps): JSX.Element => {
	return (
		<div className="project">
			<div className="thumbnail-container">
				<img src={thumbnail} />
			</div>
			<div className="description-container">
				<div className="name-container">{name}</div>
				<div className="desc-container">{desc}</div>
				<div className="project-skills">
					<div className="left-skills">
						<div className="skill-items">
							{skillsLeft.map((skill, idx) => {
								return (
									<div className="skill-item" key={idx}>
										<span className="icon">{skill.icon()}</span>&nbsp;&nbsp;
										<span className="label">{skill.label}</span>
									</div>
								);
							})}
						</div>
					</div>
					<div className="right-skills">
						<div className="skill-items">
							{skillsRight.map((skill, idx) => {
								return (
									<div className="skill-item" key={idx}>
										<span className="icon">{skill.icon()}</span>&nbsp;&nbsp;
										<span className="label">{skill.label}</span>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			{github && (
				<div className="action-container">
					<div className="github">
						<span>Github</span>
						<span>
							<FaGithub />
						</span>
					</div>
					<a className="view" href={github} target="_blank" rel="noopener noreferrer">
						<div className="view-button">
							<span className="button-text">View</span>
							<span className="button-icon">
								<GoLinkExternal />
							</span>
						</div>
					</a>
				</div>
			)}
		</div>
	);
};

export default Project;
