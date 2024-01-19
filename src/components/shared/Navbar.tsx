import { Link } from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";

import "./navbar.css";

const Navbar: React.FC = () => {
	return (
		<div className="navbar">
			<div className="navbar-container">
				<div className="logo-container">
					<div className="logo">Shrabana G</div>
					<div className="rights-reserved">®</div>
				</div>
				<div className="navbar-items">
					<Link to="/about" className="each-item">
						About
					</Link>
					<Link to="/projects" className="each-item">
						Projects
					</Link>
					<Link to="/experience" className="each-item">
						Experience
					</Link>
					<div className="contact">
						<div>Contact&nbsp;</div>{" "}
						<div>
							<FaArrowRightLong />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
