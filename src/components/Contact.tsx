import React from 'react'

import '../styles/Contact.css'

const Contact: React.FC = () => {
	return (
		<div id="contact" className="mainContainer" style={{ backgroundColor: "#f8f8f8" }}>
            <h2 className="contact">Contact</h2>
            <hr className="contact"/>
            <table className="contact">
                <th><h3 className="contact">Email:</h3></th>
                <th><h3 className="contact">daniel.sundholm@hotmail.fi</h3></th>
            </table>
		</div>
	)
}

export default Contact