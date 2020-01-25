import React from 'react'

import '../styles/AboutMe.css'
import profilePic from '../images/pp.jpg'

const AboutMe: React.FC = () => {
	return (
		<div className="mainContainer">
			<div className="aboutLeftContainer">
                <img src={profilePic} alt="Profile of Daniel"/>
                <div>
                    <ul className="info">
                        <li className="info">Name: Daniel Sundholm</li>
                        <hr />
                        <li className="info">Age: 21 Years Old</li>
                        <hr />
                        <li className="info">Location: Turku</li>
                    </ul>
                </div>
            </div>
            <div className="aboutRightContainer">
                <div>
                    <h2 className="about">About me</h2>
                    <p className="aboutDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
		</div>
	)
}

export default AboutMe