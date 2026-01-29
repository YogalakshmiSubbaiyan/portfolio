import React from 'react';
import './leftSideBar.css';
import profilePhoto from '../assets/profile.jpg';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

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
          <div className='social-links'>
          <a href="https://www.linkedin.com/in/yogalakshmi-yoga-subbaiyan-a5181094/" target="_blank" rel="noopener noreferrer" className='linkedin-link'>
            <FaLinkedin className='linkedin-icon' />
          </a>
          <a href="https://github.com/YogalakshmiSubbaiyan" target="_blank" rel="noopener noreferrer" className='github-link'>
            <FaGithub className='github-icon' />
          </a>
        </div>
        </div>
        <div className='personal-details'>
          <div className='detail-row '>
            <label>Location:</label>
            <span>Stuttgart, Germany</span>
          </div>
          <div className='detail-row '>
            <label>Work Permit:</label>
            <span>Yes</span>
          </div>
          <div className='detail-row '>
            <label>Availability:</label>
            <span className='success'>Full-time/Contract</span>
          </div>
        </div>
        <div className='language-details'>
          <h3>Languages</h3>
          <div className='detail-row '>
            <label>English:</label>
            <span>Fluent</span>
          </div>
          <div className='detail-row '>
            <label>Tamil:</label>
            <span>Native</span>
          </div>
          <div className='detail-row '>
            <label>German:</label>
            <span className='success'>A1(Learning)</span>
          </div>
        </div>
        <div className='download-cv'>
          <button className='button-download'>Download CV</button>
        </div>
      </div>

    </>
  )
}

export default LeftSideBarComponent