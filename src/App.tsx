import React from 'react'
import './styles/App.css'

import Home from './components/Home'
import Navbar from './components/Navbar'

const App: React.FC = () => {
	return (
		<div className="App" >
			<Navbar />
			<Home />
		</div>
	)
}

export default App