import '@styles/Navbar.scss'

const Navbar: React.FC = () => {
	return (
		<ul className="navBar">
			<li><a href="#home">Home</a></li>
			<li><a href="#aboutme">About me</a></li>
			<li><a href="#projects">Projects</a></li>
			<li><a href="#experience">Experience</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
	)
}

export default Navbar