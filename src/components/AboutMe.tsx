import React from 'react'

import '../styles/AboutMe.scss'
import profilePic from '../images/pp.jpg'

const AboutMe: React.FC = () => {
    const age = new Date(new Date().getTime() - new Date(1998, 7, 11).getTime()).getFullYear() - 1970
    const yearsSinceGraduation = new Date(Date.now() - new Date(2017, 5).getTime()).getFullYear() - 1970

	return (
		<div id="aboutme" className="mainContainer">
			<div className="aboutLeftContainer">
                <img src={profilePic} alt="Daniel's face profile"/>
                <div>
                    <ul>
                        <li>Name: Daniel Sundholm</li>
                        <hr />
                        <li>Age: {age} Years Old</li>
                        <hr />
                        <li>Location: Turku</li>
                    </ul>
                </div>
            </div>
            <div className="aboutRightContainer">
                <h2>About me</h2>
                <p>
                    I'm a {age}-years old lovely fella from Turku. {yearsSinceGraduation} years ago I graduated from the Forssa Upper Secondary school, 
                    after which I spent the next year doing my military service. Right now I'm studying Computer Science at the University of Turku, working on my master's degree. 
                    During my free time, I enjoy hanging out with my good friends and doing all kinds of sports. Peaceful evening at home, with videogames & Netflix & chill is also
                    great though.
                </p>
                <p>
                    From uni I've had the chance to get to know basics of programming and stuff such ass OOP, multi-threading, sockets and gui creation. 
                    I've also completed minor studies in math and geography. 
                    During my free time I've had a chance to practice web development using JS React. I've also done couple of personal projects to hone my webdev skills.
                    Nowadays I'm working as Junior Software Dev at Ambientia, and mostly working with VueJS on front, express on the back, and Elastic as the database.

                </p>
            </div>
		</div>
	)
}

export default AboutMe