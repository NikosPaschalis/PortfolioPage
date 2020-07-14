import React from 'react';
import './Experience2.0.css';
import {Row, Col} from 'react-bootstrap';
const Experience = () => (
	<React.Fragment>

	
	<Row>
	<Col xs={12} md={12} lg={12}><h1 id="experience">Experience</h1></Col>
  </Row>
        
	<Row>
		<Col xs={12} md={12} lg={12}>
			<h4>Positions</h4>
			<ul className="timeline">
				<li>
					<h5>Technical Associate Nov 2018 - Present</h5>
					<div>At 6th Health Region of Peloponnese, Ionian Islands, Epirus and Western Greece</div>
					<p>
						Install, configure, and test PC & software applications.
						Providing technical services all over the region with physical or remote presence.
						Computer systems maintenance, configuring of computer networks, applying existing specifications.
						Participating to Working Groups for technical specifications drafting
					</p>
					
				</li>
				<li>
					<h5>Safety Office Assistant May 2017 - May 2018</h5>
					<div>At Hellenic Air Force (HAF)</div>
					<p>
						Worked on fixing every hardware or Software problem come up related to the personal pc's and printers
						of every single member of the Hellenic Air Force.
						Worked close to the HAF staff and Software engineers and gave my recommendations for the specifications
						met from the next generation of personal computers based on the needs of the users.
					</p>
				</li>
				<li>
					<h5>Internship Aug 2016 - Oct 2016</h5>
					<div>At Hellenic Telecommunications and Post Commission (EETT)</div>
					<p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>
				</li>
			</ul>
		</Col>
	</Row>
	</React.Fragment>



   
)

export default Experience;