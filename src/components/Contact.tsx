import React from 'react'

import '../styles/Contact.css'

const Contact: React.FC = () => {
	return (
		<div className="mainContainer" style={{ backgroundColor: "#f8f8f8" }}>
            <h2 id="contact" className="contact">Contact</h2>
            <hr className="contact"/>
            <table className="contact">
                <tbody>
                    <tr>
                        <th><h3 className="contact">Email:</h3></th>
                        <th><h3 className="contact">daniel.sundholm@hotmail.fi</h3></th>
                    </tr>
                </tbody>
            </table>
		</div>
	)
}

export default Contact