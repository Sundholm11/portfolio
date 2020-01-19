import React, { useState, useEffect } from 'react'

import '../styles/Projects.css'

import chatappBackground from '../images/chatapp.jpg'
import fullstackBackground from '../images/fullstackopen2019img.jpg'
import ilmoplaseBackground from '../images/ilmoplaseimg.jpg'

interface Project {
	id: number,
	name: string,
	bgImg: string,
	active: boolean,
	description?: string[],
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
		const updatedProjects = projects.map(p => p.id === focusedProject?.id || p.id === newFocusedProject.id ?
			{...p, active: !p.active} : p)
		setFocusedProject(newFocusedProject)
		setProjects(updatedProjects)
	}

	const initProjects = () => {
		const initialProjects = [
			{ id: 0, name: "Chat-app", bgImg: chatappBackground, active: true,
				description: [
					`Fully functional chat-app. With the app, the user is able to send and receive messages from other connected users in real time, to exchange crucial information on the fly,
					or to share that one last juicy joke. Those who weren't online back then can recap the messages through the chat history later.`,
					`My first full fledged shot at a web project after the fullstackopen -course, and I was really happy throughout the whole development how I finally got the controls for myself. No longer tasks to follow, 
					with super specific instructions, but that you could actually implement whatever and however you wanted right now. I started by building a rough React frontside for the project, following very quickly with 
					redux infused state containment before moving on to the backend. For the back I wanted to go for Node.js with Express framework, that I've got to practice during the course as well, but also picking up 
					Socket.io to handle the connections between users and the server. It took a little time to get to know Socket.io, but proved itself really worth it. As a finishing touch, I styled the frontend with some components 
					from Semantic UI.`
				],
				links: [
					{ name: "Github", url: "https://github.com/Sundholm11/chat-app" },
					{ name: "Heroku/Deploy", url: "https://incredible-chatapp.herokuapp.com/" }
				]},
			{ id: 1, name: "Fullstackopen 2019", bgImg: fullstackBackground, active: false},
			{ id: 2, name: "Ilmot-plaseeraus", bgImg: ilmoplaseBackground, active: false}
		]
		setFocusedProject(initialProjects[0])
		setProjects(projects.concat(initialProjects))
	}

	return (
		<div className="projectsMainContainer">
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
							<div>
								<p className="focusedDescription">{part}</p>
								<br/>
							</div>
						)})}
					{focusedProject?.links?.map(link => {
						return (
							<a className="focusedLink" href={`${link.url}`}>{link.name}</a>
						)})}
				</div>
				<div className="backgroundProject" style={{ backgroundImage: `url(${focusedProject?.bgImg})` }} />
			</div>
		</div>
	)
}

export default Projects