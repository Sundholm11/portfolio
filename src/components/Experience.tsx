import React from 'react'

import '../styles/Experience.css'

const Experience: React.FC = () => {
	return (
		<div className="mainContainer">
			<div className="expContainer">
				<h2 className="exp">Education</h2>
				<ul className="expUl">
					<li className="expLi">
						<p className="exp">University of Turku</p>
						<p className="exp">Bachelor of Science</p>
						<p className="exp">2018 - present</p>
					</li>
					<li className="expLi">
						<p className="exp">Forssa Upper Secondary</p>
						<p className="exp">2015 - 2017</p>
					</li>
					<li className="expLi">
						<p className="exp">Elementary School</p>
						<p className="exp">2005 - 2015</p>
					</li>
				</ul>
			</div>
			<div className="expContainer">
				<h2 className="exp">Experience</h2>
				<ul className="expUl">
					<li className="expLi">
						<p className="exp">Lounea oy</p>
						<p className="exp">IT Support</p>
						<p className="exp">Summer 2019</p>
					</li>
					<li className="expLi">
						<p className="exp">Autokeidas Forssa</p>
						<p className="exp">Cashier / Veikkaus / Toto</p>
						<p className="exp">Summer 2018</p>
					</li>
					<li className="expLi">
						<p className="exp">SuperDrecksKëscht Luxembourg</p>
						<p className="exp">Trainee</p>
						<p className="exp">Spring 2017</p>
					</li>
				</ul>
			</div>
			<div className="expContainer">
				<h2 className="exp">Skills</h2>
				<ul className="meter">
					<p className="meter">React</p>
					<li className="meter">
						<span style={{ width: "75%", backgroundColor: "lightskyblue" }} />
					</li>
					<p className="meter">Express</p>
					<li className="meter">
						<span style={{ width: "55%", backgroundColor: "dodgerblue" }} />
					</li>
					<p className="meter">Mongo DB</p>
					<li className="meter">
						<span style={{ width: "25%", backgroundColor: "seagreen" }} />
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Experience