import React, { useState, useEffect } from 'react'

import '../styles/Projects.css'

import chatappBackground from '../images/chatapp.jpg'
import fullstackBackground from '../images/fullstackopen2019img.jpg'
import ilmoplaseBackground from '../images/ilmoplaseimg.jpg'
import portfolioBackground from '../images/portfolio.jpg'

interface Project {
	id: number,
	name: string,
	bgImg: string,
	active: boolean,
	description?: JSX.Element[],
	links?: Link[]
}

interface Link {
	name: string,
	url: string
}

const Projects: React.FC = () => {
	const[projects, setProjects] = useState<Array<Project>>([])
	const[focusedProject, setFocusedProject] = useState<Project>()

	useEffect(() => {
		initProjects()
	}, [])

	const handleProjectChange = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
		const newFocusedProject = {...projects[event.currentTarget.value], active: true }
		const firstUpdate = projects.map(p => p.id === focusedProject?.id ? {...p, active: false} : p)
		const updatedProjects = firstUpdate.map(p => p.id === newFocusedProject.id ? newFocusedProject : p)
		setFocusedProject(newFocusedProject)
		setProjects(updatedProjects)
	}

	const initProjects = () => {
		const initialProjects = [
			{ id: 0, name: "Chat-app", bgImg: chatappBackground, active: true,
				description: [
					<p className="focusedDescription">Fully functional chat-app. With the app, the user is able to send and receive messages from other connected users in real time, to exchange crucial information on the fly,
					or to share that one last juicy joke. Those who weren't online back then can recap the messages through the chat history later.</p>,
					<p className="focusedDescription"><span style={{ color: "darkcyan" }}>React</span> frontside, followed very quickly with <span style={{ color: "#764abc" }}>Redux</span> infused state containment. 
					Backend on <span style={{ color: "#026e00" }}>Node.js</span> with <span style={{ color: "#259dff" }}>Express</span> framework - connected to a <span style={{ color: "#026e00" }}>Mongo</span> database. 
					Hot calls through the line handled by <span style={{ color: "#616161" }}>Socket.io</span>, whilst everything visually astonishing is provided by <span style={{ color: "darkcyan" }}>Semantic UI</span></p>
				],
				links: [
					{ name: "Github", url: "https://github.com/Sundholm11/chat-app" },
					{ name: "Heroku/Deploy", url: "https://incredible-chatapp.herokuapp.com/" }
				]},
			{ id: 1, name: "Fullstackopen 2019", bgImg: fullstackBackground, active: false, 
				description: [
					<p className="focusedDescription">Fullstackopen 2019, organized by the University of Helsinki, featuring a deep dive on modern web-development. The course covered a plenty of tips and topics, and also gave a very comprehensive guide 
					on <span style={{ color: "darkcyan" }}>React</span> based web-application development</p>,
					<p className="focusedDescription">During the fullstackopen, I got familiar with techniques and libraries such as <span style={{ color: "darkcyan" }}>React</span>, <span style={{ color: "#764abc" }}>Redux</span>, <span style={{ color: "#026e00" }}>Node.js</span> with <span style={{ color: "#259dff" }}>Express</span> based 
					backend development, and how to handle it with <span style={{ color: "#026e00" }}>Mongo DB</span></p>
				],
				links: [
					{ name: "Github", url: "https://github.com/Sundholm11/fullstackopen2019" }
				]},
			{ id: 2, name: "Ilmot-plaseeraus", bgImg: ilmoplaseBackground, active: false,
				description: [
					<p className="focusedDescription">Ilmot-plaseeraus is an automated seating generator for mainly sitz events - but cannot see a reason why one couldn't use it for other events as well with a little fine tuning.</p>,
					<p className="focusedDescription">The placing algorithm, mostly created by my partner, will receive a list of persons, and return them in a sorted order for tables - taking things such as genders and friends to account. My main responsibility was to create a GUI, which would allow us to present the functionality 
					visually for the others. For the GUI, I used <span style={{ color: "#4682b4" }}>Python</span> with tkinter.</p>
				],
				links: [
					{ name: "Github", url: "https://github.com/asteriskiry/ilmot-plaseeraus"}
				]},
			{ id: 3, name: "Portfolio-page", bgImg: portfolioBackground, active: false,
				description: [
					<p className="focusedDescription">Created after I was done with the chat-app, I really felt like trying to make that own little room for myself and my projects.</p>,
					<p className="focusedDescription">For my own homepages, I wanted to make it all from bottom to the top, out of scratch. I thought about familiarizing myself with <span style={{ color: "darkcyan" }}>TypeScript</span> version 
					of <span style={{ color: "darkcyan" }}>React</span> for the portfolio page, but turns out the most time consuming task would be thinking the visual layout of the page, and getting to know <span style={{ color: "#764abc" }}>CSS</span>.</p>
				],
				links: [
					{ name: "Github", url: "https://github.com/Sundholm11/portfolio"}
				]}
		]
		setFocusedProject(initialProjects[0])
		setProjects(projects.concat(initialProjects))
	}

	return (
		<div id="projects" className="mainContainer" style={{ backgroundColor: "#f8f8f8" }}>
			<div className="projectsLeftContainer">
				<ul className="projectsVertNav">
					<h2 className="projects">Projects</h2>
					<p className="descriptionProjects">All those fancy little things that I've spent countless of hours,
						day and night, to create
					</p>
					<hr className="divider" />
					{projects.map( (project: any) =>
					<li key={project.id}
						className="projectsVertNav"
						value={project.id}
						onClick={handleProjectChange}>
							{project.name}
							{project.active ? <div className="triangleRight"></div> : null}
					</li>)}
				</ul>
			</div>
			<div className="projectsRightContainer">
				<div className="focusedProject">
					<h2 className="focusedProject">{focusedProject?.name}</h2>
					{focusedProject?.description?.map(part => {
						return (
							<div key={Math.random() * 1000}>
								{ part }
								<br/>
							</div>
						)})}
					{focusedProject?.links?.map(link => {
						return (
							<a key={Math.random() * 1000} className="focusedLink" href={`${link.url}`}>{link.name}</a>
						)})}
				</div>
				<div className="backgroundProject" style={{ backgroundImage: `url(${focusedProject?.bgImg})` }} />
			</div>
		</div>
	)
}

export default Projects