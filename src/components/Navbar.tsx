import React from 'react'
import '../styles/Navbar.css'

const Navbar: React.FC = () => {
	return (
		<ul className="navBar">
			<li className="navBar"><p>Home / About me</p></li>
			<li className="navBar"><p>Projects / Technology / Skills</p></li>
			<li className="navBar"><p>Education</p></li>
			<li className="navBar"><p>Experience</p></li>
			<li className="navBar"><p>Contact</p></li>
		</ul>
	)
}

export default Navbar