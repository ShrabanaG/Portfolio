export type Skill = {
	icon: () => JSX.Element;
	label: string;
};

export type SkillsCardProps = {
	header: Skill;
	skills: Skill[];
};
