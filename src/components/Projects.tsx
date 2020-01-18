import React, { useState, useEffect } from 'react'

import '../styles/Projects.css'

import chatappBackground from '../images/chatapp.jpg'
import fullstackBackground from '../images/fullstackopen2019img.jpg'
import ilmoplaseBackground from '../images/ilmoplaseimg.jpg'

interface Project {
	id: number,
	name: string,
	bgImg: string,
	active: boolean
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
			{ id: 0, name: "Chat-app", bgImg: chatappBackground, active: true },
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
					<h2 className="focusedProject">Focused</h2>
					<p className="focusedDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<br/>
					<p className="focusedDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
				<div className="backgroundProject" style={{ backgroundImage: `url(${focusedProject?.bgImg})` }} />
			</div>
		</div>
	)
}

export default Projects