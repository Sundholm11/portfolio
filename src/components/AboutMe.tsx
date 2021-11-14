import React from 'react'

import '../styles/AboutMe.scss'
import profilePic from '../images/pp.jpg'

const AboutMe: React.FC = () => {
    const age = new Date(new Date().getTime() - new Date(1998, 7, 11).getTime()).getFullYear() - 1970

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
                    I'm a {age}-years old lovely fella from Turku. Three years ago I graduated from the Forssa Upper Secondary school, 
                    after which I spent the next year doing my military service. Right now I'm studying Computer Science at the University of Turku 
                    for my second semester. During my free time, I enjoy hanging out with my good friends and doing all kinds of sports. But also just 
                    having that peaceful evening at home, watching Netflix or browsing the web, is pleasant.
                </p>
                <p>
                    Nowadays, I'm more or less busy with courses from my studies. Some of them being very interesting, such as learning more tips and tricks for 
                    object oriented programming or threading and sockets. Some of them being not that much... eh, really wish I'd be done with my swedish course. But one 
                    thing I'm happy about, I've learned to program in a very diverse field of stuff. Say, I've done a couple of projects for courses coding GUIs, using 
                    Java and Python, but also during my free time I've had a change to practice web development using JS React.
                </p>
            </div>
		</div>
	)
}

export default AboutMe