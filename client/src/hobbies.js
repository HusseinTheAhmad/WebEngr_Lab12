import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './hobbies.css'; 

const Hobbies = () => {
  return (
    <div style={{ alignItems: 'center', textAlign:'center' }}>

      {/* HEADER */}
      <header>
            <div className="container-fluid" style={{ padding: '10px', backgroundColor: '#332', color: 'white' }}>
                <h1>Hussein Ahmad</h1>
                <h2><i>Computer Scientist</i></h2>
            </div>
        </header>

      <nav className="navbar navbar-expand-sm justify-content-center bg-light navbar-light sticky-top">
        <ul className="navbar-nav">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/hobbies" className="nav-link activelink">Hobbies</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
          <li className="nav-item"><Link to="/photogallery" className="nav-link">Photo Gallery</Link></li>
          <li className="nav-item"><Link to="/personalskills" className="nav-link">Personal Skills</Link></li>
          <li className="nav-item"><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
        </ul>
      </nav>

      <div className="container my-5">
        <div className="row justify-content-center">
          <img src='./ImagesSource/Hobby.jpg' className="col-4" alt="Hobbies" />
        </div>
      </div>

      <div className="main row justify-content-center">
        <section className="text-center">
          <hgroup>
            <h3>Hobbies</h3>
            <ul className="col-2 offset-5">
              <li>Programming</li>
              <li>Reading</li>
              <li>Cycling</li>
              <li>Sports</li>
              <li>Gaming</li>
            </ul>
          </hgroup>
          <p style={{ fontSize: 20 }}>
            Hey There! Welcome to the part of my website where I talk about my hobbies. You can see them listed above,
            and well, it's no secret that I try to keep doing the things I like doing as long as I like doing 'em.
            Walt Disney said that if you enjoy your job, you won't have to work a single day in your life, and I take that
            to include these hobbies as well. There's no use in having a hobby if it just feels like you're having it for
            for the sake of having it!
          </p>

          <br></br><br></br><br></br>
        </section>
      </div>

      <footer className="footer">
        <div className="container">
          <p className="text-center">Copyright @HusseinAhmad.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Hobbies;
