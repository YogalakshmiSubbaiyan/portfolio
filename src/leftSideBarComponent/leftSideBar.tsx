import React from 'react';
import './leftSideBar.css';
import profilePhoto from '../assets/profile.jpg';

function LeftSideBarComponent() {

  return (
    <>
      <div className='left-sidebar'>
        <div className="profile-section">
          <img src={profilePhoto} alt="Profile Photo" className="profile-image" />
          <div className='profile-details'>
            <h4>Yogalakshmi Subbaiyan</h4>
            <h6>Full Stack Developer</h6>
          </div>
        </div>
        <div className='personal-details'>
          <div className='detail-row '>
            <label>Age:</label>
            <span>32</span>
          </div>
          <div className='detail-row '>
            <label>Residence:</label>
            <span>Germany</span>
          </div>
          <div className='detail-row '>
            <label>Freelance:</label>
            <span className='success'>Available</span>
          </div>
          <div className='detail-row '>
            <label>Address:</label>
            <span>Stuggard</span>
          </div>
        </div>
        <div className='language-details'>
          <h3>Languages</h3>
          <div className='detail-row '>
            <span>English</span>
            <span>90%</span>
          </div>
          <div className='progress-bar'>
            <div style={{ width: "90%" }} className='progress-fill'></div>
          </div>
          <div className='detail-row '>
            <span>Tamil</span>
            <span>100%</span>
          </div>
          <div className='progress-bar'>
            <div style={{ width: "100%" }} className='progress-fill'></div>
          </div>
          <div className='detail-row '>
            <span>German</span>
            <span>10%</span>
          </div>
          <div className='progress-bar'>
            <div style={{ width: "10%" }} className='progress-fill'></div>
          </div>
        </div>
        <div className='language-details'>
          <h3>Skills</h3>
          <div className='detail-row '>
            <span>HTML</span>
            <span>100%</span>
          </div>
          <div className='progress-bar'>
            <div style={{ width: "100%" }} className='progress-fill'></div>
          </div>
          <div className='detail-row '>
            <span>CSS</span>
            <span>100%</span>
          </div>
          <div className='progress-bar'>
            <div style={{ width: "100%" }} className='progress-fill'></div>
          </div>
          <div className='detail-row '>
            <span>JavaScript</span>
            <span>80%</span>
          </div>
          <div className='progress-bar'>
            <div style={{ width: "80%" }} className='progress-fill'></div>
          </div>
          <div className='detail-row '>
            <span>Typescrript</span>
            <span>80%</span>
          </div>
          <div className='progress-bar'>
            <div style={{ width: "80%" }} className='progress-fill'></div>
          </div>
          <div className='detail-row '>
            <span>React</span>
            <span>60%</span>
          </div>
          <div className='progress-bar'>
            <div style={{ width: "60%" }} className='progress-fill'></div>
          </div>
          <div className='detail-row '>
            <span>Angular</span>
            <span>70%</span>
          </div>
          <div className='progress-bar'>
            <div style={{ width: "70%" }} className='progress-fill'></div>
          </div>
        </div>
        <div className='extra-details'>
          <h3>Extra Skills</h3>
          <div className='skills-details'>
            <div className='extra-skill-item'>Git Knowledge</div>
            <div className='extra-skill-item'>Agile Methodologies</div>
            <div className='extra-skill-item'>Saas,Less</div>
          </div>
        </div>
        <div className='download-cv'>
          <button className='button-downnload'>Download CV</button>
        </div>
      </div>

    </>
  )
}

export default LeftSideBarComponent