import './rightSideBar.css'

export default function RightSideBarComponent() {
	return (
		<>
			<div className='rightSideBarComponent'>
				<div className='skills-section'>
					<h3>Technical Skills</h3>
					<div className='skill-set'>
						<h6 className='skills'>React</h6>
						<h6 className='skills'>Angular</h6>
						<h6 className='skills'>Typescript</h6>
						<h6 className='skills'>Javascript</h6>
						<h6 className='skills'>HTML</h6>
						<h6 className='skills'>CSS/SCSS</h6>
					</div>
				</div>
				<div className='extra-details'>
					<h3>Extra Skills</h3>
					<ul className='skills-details'>
						<li className='extra-skill-item'>Git</li>
						<li className='extra-skill-item'>Agile Methodologies</li>
						<li className='extra-skill-item'>Jira</li>
						<li className='extra-skill-item'>CI/CD</li>
						<li className='extra-skill-item'>Unit Testing</li>
					</ul>
				</div>
			</div>
		</>
	)
}