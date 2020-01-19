import React from 'react'
import '../styles/Navbar.css'

const Navbar: React.FC = () => {
	const scrollWindow = (height: number) => {
		window.scrollTo(0, height)
	}

	return (
		<ul className="navBar">
			<li className="navBar" onClick={() => scrollWindow(0)}><p>Home / About me</p></li>
			<li className="navBar" onClick={() => scrollWindow(700)}><p>Projects / Technology / Skills</p></li>
			<li className="navBar"><p>Education</p></li>
			<li className="navBar"><p>Experience</p></li>
			<li className="navBar"><p>Contact</p></li>
		</ul>
	)
}

export default Navbar