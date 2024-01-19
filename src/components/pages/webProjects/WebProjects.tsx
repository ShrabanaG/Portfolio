import { FC } from "react";
import { ProjectProps } from "../../../ts/propTypes/projectProps.types";
import { Thumbnail } from "../../../assets";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { BiLogoRedux } from "react-icons/bi";
import Project from "../../shared/projects/Project";

import "./webProjects.css";

const projects: ProjectProps[] = [
	{
		thumbnail: Thumbnail,
		name: "We design build",
		desc: "Ecommerce for builders",
		skillsLeft: [
			{
				icon: () => <FaReact color="#0A6ED1" />,
				label: "React"
			},
			{
				icon: () => <FaReact color="#0A6ED1" />,
				label: "React Native"
			},
			{
				icon: () => <BiLogoRedux color="#7248B6" />,
				label: "Redux"
			}
		],
		skillsRight: [
			{
				icon: () => <FaReact color="#0A6ED1" />,
				label: "React"
			},
			{
				icon: () => <FaReact color="#0A6ED1" />,
				label: "React Native"
			},
			{
				icon: () => <BiLogoRedux color="#7248B6" />,
				label: "Redux"
			}
		],
		is_concept: true,
		hyperlink: "true",
		github: ""
	}
];

const WebProjects: FC = (): JSX.Element => {
	return (
		<div className="web-projects theme-container">
			<h2 className="section-header">
				{"<"} PROJECTS {"/>"}
			</h2>
			<div className="web-projects-container">
				{[...projects, ...projects, ...projects, ...projects].map((project, idx) => {
					return <Project {...project} key={idx} />;
				})}
			</div>
		</div>
	);
};

export default WebProjects;
