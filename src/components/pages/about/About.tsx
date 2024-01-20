import { Avatar, MyAvatar } from "../../../assets";
import "./banner.css";

const About: React.FC = () => {
	return (
		<div className="banner">
			<div className="content-container">
				<div className="avatar-container">
					<img src={MyAvatar} />
				</div>
				<h1 className="intro">
					<span>Hey!</span> <span>This</span> <span>is</span> <span>Shrabana</span>
				</h1>
				<h2 className="tagline">
					<span>{"< "}Frontend</span> <span>Developer</span> {" />"}
				</h2>
			</div>
		</div>
	);
};

export default About;
