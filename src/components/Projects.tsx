import React, { useState, useEffect } from 'react'

import '../styles/Projects.css'

import chatappBackground from '../images/test.JPG'

interface Project {
	id: number,
	name: string,
	bgImg: string
}

const Projects: React.FC = () => {
	const[projects, setProjects] = useState<Array<Project>>([])
	const[focusedProject, setFocusedProject] = useState<Project>()

	useEffect(() => {
		initProjects()
	}, [])

	const handleProjectChange = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
		setFocusedProject(projects[event.currentTarget.value])
	}

	const initProjects = () => {
		const initialProjects = [
			{ id: 0, name: "Chat-app", bgImg: chatappBackground },
			{ id: 1, name: "Fullstackopen 2019", bgImg: chatappBackground},
			{ id: 2, name: "Ilmot-plaseeraus", bgImg: chatappBackground}
		]
		setFocusedProject(initialProjects[0])
		setProjects(projects.concat(initialProjects))
	}

	return (
		<div className="projectsMainContainer">
			<div className="projectsLeftContainer">
				<ul className="projectsVertNav">
					<h2 className="projects">Projects</h2>
					<p className="description">All those fancy little things that I've spent countless of hours,
						day and night, to create
					</p>
					<hr className="divider" />
					{projects.map( (project: any) =>
					<li key={project.id}
						className="projectsVertNav"
						value={project.id}
						onClick={handleProjectChange}>{project.name}
					</li>)}
				</ul>
			</div>
			{focusedProject !== undefined ? 
			<div className="projectsRightContainer" style={{ backgroundImage: `url(${focusedProject.bgImg})` }}>
			</div> :
			null}
		</div>
	)
}

export default Projects