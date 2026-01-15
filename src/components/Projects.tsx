import { useState, useEffect, JSX } from 'react'

import chatappBackground from '@images/chatapp.jpg'
import fullstackBackground from '@images/fullstackopen2019img.jpg'
import ilmoplaseBackground from '@images/ilmoplaseimg.jpg'
import portfolioBackground from '@images/portfolio.jpg'
import sportsBackground from '@images/sportscalendar.jpg'

import '@styles/Projects.scss'

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
					<p>Fully functional chat-app. With the app, the user is able to send and receive messages from other connected users in real time, to exchange crucial information on the fly,
					or to share that one last juicy joke. Those who weren't online back then can recap the messages through the chat history later.</p>,
					<p><span style={{ color: "darkcyan" }}>React</span> frontside, followed very quickly with <span style={{ color: "#764abc" }}>Redux</span> infused state containment. 
					Backend on <span style={{ color: "#026e00" }}>Node.js</span> with <span style={{ color: "#259dff" }}>Express</span> framework - connected to a <span style={{ color: "#026e00" }}>Mongo</span> database. 
					Hot calls through the line handled by <span style={{ color: "#616161" }}>Socket.io</span>, whilst everything visually astonishing is provided by <span style={{ color: "darkcyan" }}>Semantic UI</span></p>,
				],
				links: [
					{ name: "Github", url: "https://github.com/Sundholm11/chat-app" },
					{ name: "Render/Deploy", url: "https://chat-app-ovoq.onrender.com/" }
				]},
			{ id: 1, name: "Fullstackopen 2019", bgImg: fullstackBackground, active: false, 
				description: [
					<p>Fullstackopen 2019, organized by the University of Helsinki, featuring a deep dive on modern web-development. The course covered a plenty of tips and topics, and also gave a very comprehensive guide 
					on <span style={{ color: "darkcyan" }}>React</span> based web-application development</p>,
					<p>During the fullstackopen, I got familiar with techniques and libraries such as <span style={{ color: "darkcyan" }}>React</span>, <span style={{ color: "#764abc" }}>Redux</span>, <span style={{ color: "#026e00" }}>Node.js</span> with <span style={{ color: "#259dff" }}>Express</span> based 
					backend development, and how to handle it with <span style={{ color: "#026e00" }}>Mongo DB</span></p>
				],
				links: [
					{ name: "Github", url: "https://github.com/Sundholm11/fullstackopen2019" }
				]},
			{ id: 2, name: "Ilmot-plaseeraus", bgImg: ilmoplaseBackground, active: false,
				description: [
					<p>Ilmot-plaseeraus is an automated seating generator for mainly sitz events - but cannot see a reason why one couldn't use it for other events as well with a little fine tuning.</p>,
					<p>The placing algorithm, mostly created by my partner, will receive a list of persons, and return them in a sorted order for tables - taking things such as genders and friends to account. My main responsibility was to create a GUI, which would allow us to present the functionality 
					visually for the others. For the GUI, I used <span style={{ color: "#4682b4" }}>Python</span> with tkinter.</p>
				],
				links: [
					{ name: "Github", url: "https://github.com/asteriskiry/ilmot-plaseeraus"}
				]},
			{ id: 3, name: "Portfolio-page", bgImg: portfolioBackground, active: false,
				description: [
					<p>Created after I was done with the chat-app, I really felt like trying to make that own little room for myself and my projects.</p>,
					<p>For my own homepages, I wanted to make it all from bottom to the top, out of scratch. I thought about familiarizing myself with <span style={{ color: "darkcyan" }}>TypeScript</span> version 
					of <span style={{ color: "darkcyan" }}>React</span> for the portfolio page, but turns out the most time consuming task would be thinking the visual layout of the page, and getting to know <span style={{ color: "#764abc" }}>CSS</span>.</p>
				],
				links: [
					{ name: "Github", url: "https://github.com/Sundholm11/portfolio"}
				]},
			{ id: 4, name: "Sportscalendar", bgImg: sportsBackground, active: false,
				description: [
					<p>Sportscalendar provides quick and easy view over daily sports activies around CampusSports' gyms and halls.</p>,
					<p>My first project that is using the magics of <span style={{ color: "#41b883" }}>Vue</span> for the frontend. Backend is mostly just a quick <span style={{ color: "#259dff" }}>Express</span> fuelled API, responsible for
					making the retrieving requests for my custom built webscrapers</p>
				],
				links: [
					{ name: "Github", url: "https://github.com/Sundholm11/sportscalendar"},
					{ name: "Render/Deploy", url: "https://sports-calendar.onrender.com/" }
				]}
		]
		setFocusedProject(initialProjects[0])
		setProjects(projects.concat(initialProjects))
	}

	return (
		<div id="projects" className="mainContainer" style={{ backgroundColor: "#f8f8f8" }}>
			<div className="projectsLeftContainer">
				<ul>
					<h2>Projects</h2>
					<p>All those fancy little things that I've spent countless of hours,
						day and night, to create
					</p>
					<hr/>
					{projects.map( (project: any) =>
					<li key={project.id}
						value={project.id}
						onClick={handleProjectChange}>
							{project.name}
							{project.active ? <div className="triangleRight"></div> : null}
					</li>)}
				</ul>
			</div>
			<div className="projectsRightContainer">
				<div className="focusedProject">
					<h2>{focusedProject?.name}</h2>
					{focusedProject?.description?.map(part => {
						return (
							<div key={Math.random() * 1000}>
								{ part }
								<br/>
							</div>
						)})}
					{focusedProject?.links?.map(link => {
						return (
							<a key={Math.random() * 1000} href={`${link.url}`}>{link.name}</a>
						)})}
				</div>
				<div className="backgroundProject" style={{ backgroundImage: `url(${focusedProject?.bgImg})` }} />
			</div>
		</div>
	)
}

export default Projects