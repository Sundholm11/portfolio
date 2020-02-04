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
		const firstUpdate = projects.map(p => p.id === focusedProject?.id ? {...p, active: false} : p)
		const updatedProjects = firstUpdate.map(p => p.id === newFocusedProject.id ? newFocusedProject : p)
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
			{ id: 1, name: "Fullstackopen 2019", bgImg: fullstackBackground, active: false, 
				description: [
					`Fullstackopen 2019, organized by the University of Helsinki, was one of the heaviest courses that I've taken part of. At the start of the course, I had only a very basic understanding of how JS, CSS 
					and HTML even work. After 125 hours of sometimes pleasant ride, but the other half being the bumpy sweat and tears ride, I can say it was totally worth it. My understanding of web development is on a 
					completely new higher level, whilst my skills with the use of JS have risen incredibly. I've got to known the beauties of React and Redux, with competent use of Node.js with Express for the backend 
					side development as well.`,
					`During the fullstackopen, I was tasked to make several smaller pages filling few requirements to show off that I've learned those things. At times I wasn't super filled with eagerness to carry out 
					the same things over and over again. But however inspired by this course, and shortly after it, I managed to start working on my first full project, the chat-app.`
				],
				links: [
					{ name: "Github", url: "https://github.com/Sundholm11/fullstackopen2019" }
				]},
			{ id: 2, name: "Ilmot-plaseeraus", bgImg: ilmoplaseBackground, active: false,
				description: [
					`Perhaps one of the most interesting uni assignments this far that I've taken part of. We were tasked to make a project that was to be presented for all the other groups -super simple task, but to make 
					it a slightly bit more interesting, together with my partner we thought about picking a project that would later benefit our students' association. As a first year students, we didn't have that much 
					actual experience with coding yet, not to mention that Python wasn't our most used language by then. But after some small debates few some older students about a preferable -and doable- task, we decided 
					to go for it.`,
					`Ilmot-plaseeraus is an automated seating generator for mainly sitz events - but cannot see a reason why one couldn't use it for other events as well with a little fine tuning. The placing algorithm, 
					mostly created by my partner, will receive a list of persons, and return them in a sorted order for tables - taking things such as genders and friends to account. Not used for our students' association's 
					version, my responsibility was to create a GUI, which would allow us to present the functionality for the other groups of the course. For the GUI, I used already in Python included tkinter. I had done only 
					small doodlings with GUIs on Java Swing before, thus making the task very curious to learn more about.`
				],
				links: [
					{ name: "Github", url: "https://github.com/asteriskiry/ilmot-plaseeraus"}
				]},
			{ id: 3, name: "Portfolio-page", bgImg: portfolioBackground, active: false,
				description: [
					`Created after I was done with the chat-app, I really felt like trying to make that own little room for myself and my projects. In my previous 
					projects I had also always used ready stylesheets to for the customization of looks. For my own homepages, I wanted to make it all from bottom
					to the top, out of scratch. I thought about familiarizing myself with TypeScript version of React for the portfolio page, but turns out the most
					time consuming task would be thinking the visual layout of the page, and getting to know CSS.`
				],
				links: [
					{ name: "Github", url: "https://github.com/Sundholm11/portfolio"}
				]}
		]
		setFocusedProject(initialProjects[0])
		setProjects(projects.concat(initialProjects))
	}

	return (
		<div className="mainContainer" style={{ backgroundColor: "#f8f8f8" }}>
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
								<p className="focusedDescription">{part}</p>
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