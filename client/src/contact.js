import React from 'react';
import { Link } from 'react-router-dom';        // Importing Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensuring Bootstrap is imported
import './contact.css';                         // importing my custom css

const Contact = () => {
  return (
    <div style={{ alignItems: 'center', textAlign:'center' }}>

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
                <li className="active"><Link to="/contact" className="nav-link activelink">Contact</Link></li>
                <li className="nav-item"><Link to="/photogallery" className="nav-link">Photo Gallery</Link></li>
                <li className="nav-item"><Link to="/personalskills" className="nav-link">Personal Skills</Link></li>
                <li className="nav-item"><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
            </ul>
        </nav>

        {/* IMAGE */}
        <div className="container my-5">
            <div className="row justify-content-center">
                <img src="./ImagesSource/contact.webp" className="col-6" alt="Contact" />
            </div>
        </div>

        {/* TEXT */}
        <div className="main row justify-content-center">
            <section className="col-2 text-center">

                <hgroup>
                    <h3>Contact</h3>
                </hgroup>

                <p>Email (University): hahmad.bscs22seecs@seecs.edu.pk</p>
                <p>Email (Personal): locatehra@gmail.com</p>
                <p>Phone (Home): (+92)32455-06767</p>
                <p>Fax #: 032457-23443</p>

            </section>
        </div>

        <footer>Copyright @HusseinAhmad.com</footer>
    </div>
  );
};

export default Contact;
