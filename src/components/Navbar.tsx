import React from 'react'

import '../styles/Navbar.css'

const Navbar: React.FC = () => {
	return (
		<ul className="navBar">
			<li className="navBar"><a className="navBar" href="#home">Home</a></li>
			<li className="navBar"><a className="navBar" href="#aboutme">About me</a></li>
			<li className="navBar"><a className="navBar" href="#projects">Projects</a></li>
			<li className="navBar"><a className="navBar" href="#experience">Experience</a></li>
			<li className="navBar"><a className="navBar" href="#contact">Contact</a></li>
		</ul>
	)
}

export default Navbar