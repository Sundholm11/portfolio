import React, { useState } from 'react'

import '../styles/Projects.css'

import Background from '../images/test.JPG'

const Projects: React.FC = () => {
	const[projects, setProjects] = useState<Array<Object>>([])
	const[focusedProject, setFocusedProject] = useState<Object>()

	const handleProjectChange = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
		setFocusedProject(projects[event.currentTarget.value])
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
					<li className="projectsVertNav"
						value={0}
						onClick={handleProjectChange}>Chat-app
					</li>
				</ul>
			</div>
			<div className="projectsRightContainer" style={{ backgroundImage: `url(${Background})` }}>
			</div>
		</div>
	)
}

export default Projects