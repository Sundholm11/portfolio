import React from 'react'

import './styles/App.css'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Contact from './components/Contact'

const App: React.FC = () => {
	return (
		<div className="App" >
			<Navbar />
			<Home />
			<AboutMe />
			<Projects />
			<Experience />
			<Contact />
		</div>
	)
}

export default App