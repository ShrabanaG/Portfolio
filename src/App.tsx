import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import { About, Projects, Experience, Contact } from "./components/pages";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/experience" element={<Experience />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
