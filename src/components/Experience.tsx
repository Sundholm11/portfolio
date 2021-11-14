import React, { useState, useEffect } from 'react'

import '../styles/Experience.scss'

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
				<h2>Education</h2>
				<ul className="expUl">
					<li>
						<p>University of Turku</p>
						<p>Bachelor of Science</p>
						<p>2018 - present</p>
					</li>
					<li>
						<p>Forssa Upper Secondary</p>
						<p>2015 - 2017</p>
					</li>
					<li>
						<p>Elementary School</p>
						<p>2005 - 2015</p>
					</li>
				</ul>
			</div>
			<div className="expContainer">
				<h2>Experience</h2>
				<ul className="expUl">
					<li>
						<p>Ambientia oy</p>
						<p>Junior Software Developer</p>
						<p>Summer 2021 - present</p>
					</li>
					<li>
						<p>Lounea oy</p>
						<p>IT Support</p>
						<p>Summer 2019</p>
					</li>
					<li>
						<p>Autokeidas Forssa</p>
						<p>Cashier / Veikkaus / Toto</p>
						<p>Summer 2018</p>
					</li>
					<li>
						<p>SuperDrecksKëscht Luxembourg</p>
						<p>Trainee</p>
						<p>Spring 2017</p>
					</li>
				</ul>
			</div>
			<div className="expContainer">
				<h2>Skills</h2>
				<ul className="skillView">
					<li onClick={() => setVisible(true)}>Webdev</li>
					<li onClick={() => setVisible(false)}>Languages</li>
				</ul>
				{visible ?
				<ul className="meter">
					{webdev.map(skill => (
						<div key={Math.random() * 1000}>
							<p>{skill.name}</p>
							<li>
								<span style={{ width: skill.fill, backgroundColor: skill.bgColor }} />
							</li>
						</div>
					))}
				</ul> :
				<ul className="meter">
					{languages.map(skill => (
						<div key={Math.random() * 1000}>
							<p>{skill.name}</p>
							<li>
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