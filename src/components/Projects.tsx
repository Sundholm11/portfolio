import React, { useState } from 'react'

import '../styles/Projects.css'

const Projects: React.FC = () => {
	const[project, setProject] = useState<string>("Some project")

	const projects = [
		"Some project",
		"Another project",
		"Third project"
	]

	const handleProjectChange = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
		setProject(projects[event.currentTarget.value])
	}

	return (
		<div className="projectsMainContainer">
			<div className="projectsLeftContainer">
				<ul className="projectsVertNav">
					<li className="projectsVertNav">
						<h3>Projects</h3>
					</li>
					<li className="projectsVertNav"
						value={0}
						onClick={handleProjectChange}>Some project
					</li>
					<li className="projectsVertNav"
						value={1}
						onClick={handleProjectChange}>Another project</li>
					<li className="projectsVertNav"
						value={2}
						onClick={handleProjectChange}>Third project</li>
				</ul>
			</div>
			<div className="projectsRightContainer">
				{project}
			</div>
		</div>
	)
}

export default Projects