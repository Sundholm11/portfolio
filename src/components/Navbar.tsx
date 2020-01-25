import React from 'react'

import '../styles/Navbar.css'

const Navbar: React.FC = () => {
	const scrollWindow = (height: number) => {
		window.scrollTo(0, height)
	}

	return (
		<ul className="navBar">
			<li className="navBar" onClick={() => scrollWindow(0)}><p>Home</p></li>
			<li className="navBar" onClick={() => scrollWindow(625)}><p>About me</p></li>
			<li className="navBar" onClick={() => scrollWindow(1525)}><p>Projects</p></li>
		</ul>
	)
}

export default Navbar