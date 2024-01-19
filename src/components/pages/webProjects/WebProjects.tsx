import { FC } from "react";
import AllProjetcs from "../../../constants/allProjetcts";
import Project from "../../shared/projects/Project";

import "./webProjects.css";

const WebProjects: FC = (): JSX.Element => {
	return (
		<div className="web-projects theme-container">
			<h2 className="section-header">
				{"<"} PROJECTS {"/>"}
			</h2>
			<div className="web-projects-container">
				{AllProjetcs.map((project, idx) => {
					return <Project {...project} key={idx} />;
				})}
			</div>
		</div>
	);
};

export default WebProjects;
