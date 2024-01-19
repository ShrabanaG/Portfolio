import { Skill } from "./skillsCardProps.types";

export type ProjectProps = {
	name: string;
	desc: string;
	skillsLeft: Skill[];
	skillsRight: Skill[];
	is_concept: boolean;
	hyperlink: string | null;
	thumbnail: string;
	github: string | null;
};
