import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './hobbies.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProjectDesc, setSelectedProjectDesc] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/getProjects')
      .then(response => setProjects(response.data))
      .catch(err => console.log("Error fetching projects: " + err));
  }, []);

  const fetchProjectDescription = (pid) => {
    const project = projects.find(p => p.pid === pid);
    if (project) {
      setSelectedProjectDesc(project.desc);
    }
  };

  return (
    <div style={{ alignItems: 'center', textAlign: 'center' }}>
      {/* HEADER */}
      <header>
        <div className="container-fluid" style={{ padding: '10px', backgroundColor: '#332', color: 'white' }}>
          <h1>Hussein Ahmad</h1>
          <h2><i>Computer Scientist</i></h2>
        </div>
      </header>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-sm justify-content-center bg-light navbar-light sticky-top">
        <ul className="navbar-nav">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/hobbies" className="nav-link">Hobbies</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
          <li className="nav-item"><Link to="/photogallery" className="nav-link">Photo Gallery</Link></li>
          <li className="nav-item"><Link to="/personalskills" className="nav-link">Personal Skills</Link></li>
          <li className="nav-item"><Link to="/portfolio" className="nav-link activelink">Portfolio</Link></li>
        </ul>
      </nav>

      {/* CONTENT */}
      <div>
        <h1> MY PROJECTS: </h1>
        <br />
        <h4>Project 1: A Maze Navigator</h4>
        <input id="button1" type="button" value="Read About it!" onClick={() => fetchProjectDescription('1')} />
        <br /><br />
        <h4>Project 2: A Solar Panel</h4>
        <input id="button2" type="button" value="Read About it!" onClick={() => fetchProjectDescription('2')} />
        <br /><br />
        <h4>Project 3: A 3-D Printer</h4>
        <input id="button3" type="button" value="Read About it!" onClick={() => fetchProjectDescription('3')} />
        <br /><br />
      </div>

      {selectedProjectDesc && (
        <div>
          <h4>Project Description:</h4>
          <p>{selectedProjectDesc}</p>
        </div>
      )}

      
      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p className="text-center">Copyright @HusseinAhmad.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
