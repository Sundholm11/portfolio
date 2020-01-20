import React from 'react'

import '../styles/AboutMe.css'

const AboutMe: React.FC = () => {
	return (
		<div className="mainContainer" style={{ backgroundColor: "#f8f8f8" }}>
			<div className="aboutLeftContainer">
                <h2>Pic pic pic</h2>
            </div>
            <div className="aboutRightContainer">
                <h2>About me</h2>
            </div>
		</div>
	)
}

export default AboutMe