import React from 'react'

import '../styles/AboutMe.css'

const AboutMe: React.FC = () => {
	return (
		<div className="mainContainer" style={{ backgroundColor: "#f8f8f8" }}>
			<div className="aboutLeftContainer">
                <img />
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