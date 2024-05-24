import React from 'react';
import { Link } from 'react-router-dom';
import './hobbies.css';

const PersonalSkills = () => {
  return (
    <div style={{ textAlign: 'center', backgroundColor: 'LightBlue' }}>

        {/* HEADER */}
        <header>
            <div className="container-fluid" style={{ padding: '10px', backgroundColor: '#332', color: 'white' }}>
                <h1>Hussein Ahmad</h1>
                <h2><i>Computer Scientist</i></h2>
            </div>
        </header>

        {/* NAVIGATION BAR */}
        <nav className="navbar navbar-expand-sm justify-content-center bg-light navbar-light sticky-top">
            <ul className="navbar-nav">
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to="/hobbies" className="nav-link">Hobbies</Link></li>
                <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                <li className="nav-item"><Link to="/photogallery" className="nav-link">Photo Gallery</Link></li>
                <li className="nav-item"><Link to="/personalskills" className="nav-link activelink">Personal Skills</Link></li>
                <li className="nav-item"><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
            </ul>
        </nav>

        {/* Inserting Image */}
        <br /><br />

        <div className="container">
            <div className="row justify-content-center">
                <img src="./ImagesSource/Personal_Skills.jpg" className="col-4" alt="Personal Skills" />
            </div>
        </div>

        <br /><br />

        {/* PERSONAL SKILLS */}
        <h1 className="text-center">Personal Skills</h1>

        <div className="row main justify-content-center">

            <ol className="text-center col-2">
                <li>C/C++</li>
                <li>MySQL</li>
                <li>XML</li>
                <li>English Conversation</li>
                <li>Urdu Conversation</li>
                <li>Punjabi Conversation</li>
                <li>Technical Writing</li>
            </ol>

        </div>

        <br /><br />
      
        {/* FOOTER */}
        <footer style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#333', color: 'white', padding: '10px' }}>Copyright @HusseinAhmad.com</footer>

    </div>
  );
};

export default PersonalSkills;
