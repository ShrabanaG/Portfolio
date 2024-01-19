import About from "../about/About";
import Skills from "../skills/Skills";
import WebProjects from "../webProjects/WebProjects";

const Home: React.FC = () => {
	return (
		<>
			<About />
			<div className="content" style={{ marginLeft: "2rem", marginRight: "2rem" }}>
				<Skills />
				<WebProjects />
			</div>
		</>
	);
};

export default Home;
