import React, { useState, useEffect } from 'react'

import '../styles/Experience.css'

interface Skills {
	name: string,
	fill: string,
	bgColor: string
}

const Experience: React.FC = () => {
	const [visible, setVisible] = useState<Boolean>(true)
	const [webdev, setWebdev] = useState<Array<Skills>>([])
	const [languages, setLanguages] = useState<Array<Skills>>([])

	useEffect(() => {
		initSkills()
	}, [])

	const webdevSkills = [
		{ name: "React", fill: "75%", bgColor: "#61dafb" },
		{ name: "Express", fill: "55%", bgColor: "#259dff" },
		{ name: "Vue", fill: "55%", bgColor: "#41b883"},
		{ name: "TypeScript React", fill: "45%", bgColor: "#294e80"},
		{ name: "Socket.IO", fill: "35%", bgColor: "gray" },
		{ name: "Mongo DB", fill: "25%", bgColor: "#13aa52" },
	]

	const languageSkills = [
		{ name: "JS", fill: "75%", bgColor: "#f1e05a" },
		{ name: "Java", fill: "55%", bgColor: "darkgoldenrod" },
		{ name: "Python", fill: "45%", bgColor: "steelblue" },
		{ name: "HTML", fill: "45%", bgColor: "chocolate" },
		{ name: "TypeScript", fill: "45%", bgColor: "#294e80" },
		{ name: "CSS", fill: "35%", bgColor: "darkslateblue" }
	]

	const initSkills = () => {
		setWebdev(webdevSkills)
		setLanguages(languageSkills)
	}

	return (
		<div id="experience" className="mainContainer">
			<div className="expContainer">
				<h2 className="exp">Education</h2>
				<ul className="expUl">
					<li className="expLi">
						<p className="exp">University of Turku</p>
						<p className="exp">Bachelor of Science</p>
						<p className="exp">2018 - present</p>
					</li>
					<li className="expLi">
						<p className="exp">Forssa Upper Secondary</p>
						<p className="exp">2015 - 2017</p>
					</li>
					<li className="expLi">
						<p className="exp">Elementary School</p>
						<p className="exp">2005 - 2015</p>
					</li>
				</ul>
			</div>
			<div className="expContainer">
				<h2 className="exp">Experience</h2>
				<ul className="expUl">
					<li className="expLi">
						<p className="exp">Ambientia oy</p>
						<p className="exp">Junior Software Developer</p>
						<p className="exp">Summer 2021 - present</p>
					</li>
					<li className="expLi">
						<p className="exp">Lounea oy</p>
						<p className="exp">IT Support</p>
						<p className="exp">Summer 2019</p>
					</li>
					<li className="expLi">
						<p className="exp">Autokeidas Forssa</p>
						<p className="exp">Cashier / Veikkaus / Toto</p>
						<p className="exp">Summer 2018</p>
					</li>
					<li className="expLi">
						<p className="exp">SuperDrecksKëscht Luxembourg</p>
						<p className="exp">Trainee</p>
						<p className="exp">Spring 2017</p>
					</li>
				</ul>
			</div>
			<div className="expContainer">
				<h2 className="exp">Skills</h2>
				<ul className="skillView">
					<li className="skillView" onClick={() => setVisible(true)}>Webdev</li>
					<li className="skillView" onClick={() => setVisible(false)}>Languages</li>
				</ul>
				{visible ?
				<ul className="meter">
					{webdev.map(skill => (
						<div key={Math.random() * 1000}>
							<p className="meter">{skill.name}</p>
							<li className="meter">
								<span style={{ width: skill.fill, backgroundColor: skill.bgColor }} />
							</li>
						</div>
					))}
				</ul> :
				<ul className="meter">
					{languages.map(skill => (
						<div key={Math.random() * 1000}>
							<p className="meter">{skill.name}</p>
							<li className="meter">
								<span style={{ width: skill.fill, backgroundColor: skill.bgColor }} />
							</li>
						</div>
					))}
				</ul> }
			</div>
		</div>
	)
}

export default Experience