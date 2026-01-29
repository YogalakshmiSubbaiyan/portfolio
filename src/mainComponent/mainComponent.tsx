import './mainComponent.css'

export default function MainComponent() {
    return (<>
    <div className="mainComponent">
        <div className="about-section">
            <h5>I'm Yogalakshmi Subbaiyan</h5>
            <p>Yoga is a passionate Full-Stack Developer with extensive experience building complex web applications for the finance and banking sector. Specializes in front-end development with expertise in Angular and React, combining strong technical skills with a keen eye for user-centric design."</p>
        </div>
        <h4>My Projects</h4>
        <div className='project-layout'>
           <div className='project'>Project 1</div> 
           <div className='project'>Project 2</div>
        </div>
    </div>
    </>)
}