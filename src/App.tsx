import React from 'react'
import './styles/App.css'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

const App: React.FC = () => {
	return (
		<div className="App" >
			<Navbar />
			<Home />
			<Projects />
		</div>
	)
}

export default App