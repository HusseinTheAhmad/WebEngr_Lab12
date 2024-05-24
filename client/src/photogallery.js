import React from 'react';
import { Link } from 'react-router-dom';
import './photogallery.css';

const Photogallery = () => {
  return (
    <div style={{ textAlign: 'center' }}>
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
                <li className="active"><Link to="/contact" className="nav-link">Contact</Link></li>
                <li className="nav-item"><Link to="/photogallery" className="nav-link activelink">Photo Gallery</Link></li>
                <li className="nav-item"><Link to="/personalskills" className="nav-link">Personal Skills</Link></li>
                <li className="nav-item"><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
            </ul>
        </nav>

        {/* PICTURES */}
        <br /><br />

        <div className="container-fluid">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2">

                <figure className="col">
                    <img src="./ImagesSource/hussein-5.jpeg" className="col-sm-3 col-md-3 col-lg-3 img-fluid" alt="hussein-5" />
                    <figcaption className="lead"><i>Fig1. - This is me from many years ago</i></figcaption>
                </figure>

                <figure className="col">
                    <img src="./ImagesSource/hussein-4.jpeg" className="col-sm-3 col-md-3 col-lg-3 img-fluid" alt="hussein-4" />
                    <figcaption className="lead"><i>Fig 2. - This is me, a couple of months ago</i></figcaption>
                </figure>

                <figure className="col">
                    <img src="./ImagesSource/hussein-3.jpeg" className="col-sm-3 col-md-3 col-lg-3 img-fluid" alt="hussein-3" />
                    <figcaption className="lead"><i>Fig 3. - This is me at our welcome party.</i></figcaption>
                </figure>

                <figure className="col">
                    <img src="./ImagesSource/hussein-2.jpeg" className="col-sm-3 col-md-3 col-lg-3 img-fluid" alt="hussein-2" />
                    <figcaption className="lead"><i>Fig 4. - This is me at a family wedding ceremony .</i></figcaption>
                </figure>

                <br /><br />

                <div className="container-fluid">
                    <figure className="col justify-content-center">
                        <img src="./ImagesSource/hussein-1.jpeg" className="col-sm-4 col-md-4 col-lg-4 img-fluid offset-sm-1" alt="hussein-1" />
                        <figcaption className="lead"><i>Fig 5. - This is me on my first day of University.</i></figcaption>
                    </figure>
                </div>

            </div>

            <br/><br/>
        </div>

        {/* FOOTER */}
        <footer className="container-fluid" style={{ padding: '10px', backgroundColor: '#332', color: 'white' }}>Copyright @HusseinAhmad.com</footer>

    </div>
    
  );
};

export default Photogallery;
