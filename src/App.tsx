import React from 'react'

import './styles/App.css'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'

const App: React.FC = () => {
	return (
		<div className="App" >
			<Navbar />
			<Home />
			<AboutMe />
			<Projects />
		</div>
	)
}

export default App