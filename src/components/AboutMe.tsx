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
                    <p className="aboutDescription">
                        I'm a 21-years old lovely fella from Turku. Three years ago I graduated from the Forssa Upper Secondary school, 
                        after which I spent the next year doing my military service. Right now I'm studying Computer Science at the University of Turku 
                        for my second semester. During my free time, I enjoy hanging out with my good friends and doing all kinds of sports. But also just 
                        having that peaceful evening at home, watching Netflix or browsing the web, is pleasant.
                    </p>
                    <p className="aboutDescription">
                        Nowadays, I'm more or less busy with courses from my studies. Some of them being very interesting, such as learning more tips and tricks for 
                        object oriented programming or threading and sockets. Some of them being not that much... eh, really wish I'd be done with my swedish course. But one 
                        thing I'm happy about, I've learned to program in a very diverse field of stuff. Say, I've done a couple of projects for courses coding GUIs, using 
                        Java and Python, but also during my free time I've had a change to practice web development using JS React.
                    </p>
                </div>
            </div>
		</div>
	)
}

export default AboutMe