import React from 'react';
import { Link } from 'react-router-dom';            // Import Link component
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';                                // importing relevant css file

const Home = () => {
  return (
    <div style={{ textAlign:'center', alignItems: 'center' }}>

        {/* HEADER */}
        <header>
            <div className="container-fluid" style={{ padding: '10px', backgroundColor: '#332', color: 'white' }}>
                <h1>Hussein Ahmad</h1>
                <h2><i>Computer Scientist</i></h2>
            </div>
        </header>

        {/* LINKS */}
        <nav className="navbar navbar-expand-sm justify-content-center bg-light navbar-light sticky-top">
            <ul className="navbar-nav">
                <li className="nav-item"><Link to="/" className="nav-link activelink">Home</Link></li>
                <li className="nav-item"><Link to="/hobbies" className="nav-link">Hobbies</Link></li>
                <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                <li className="nav-item"><Link to="/photogallery" className="nav-link">Photo Gallery</Link></li>
                <li className="nav-item"><Link to="/personalskills" className="nav-link">Personal Skills</Link></li>
                <li className="nav-item"><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
            </ul>
        </nav>

        <br></br><br></br>
        {/* INSERTING IMAGES */}
        <div className="container">
            <figure className="row justify-content-center gy-2">
                <img src="./ImagesSource/hussein-5.jpeg" className="col-3" alt="hussein-5" />
                <figcaption className="text-center lead"><i>Fig 1. - This is me from many years ago</i></figcaption>
            </figure>

            <figure className="row justify-content-center gy-2">
                <img src="./ImagesSource/hussein-4.jpeg" className="col-3" alt="hussein-4" />
                <figcaption className="text-center lead"><i>Fig 2. - This is me, a couple of months ago</i></figcaption>
            </figure>

            <figure className="row justify-content-center gy-2">
                <img src="./ImagesSource/hussein-3.jpeg" className="col-3" alt="hussein-3" />
                <figcaption className="text-center lead"><i>Fig 3. - This is me at our welcome party.</i></figcaption>
            </figure>

            <figure className="row justify-content-center gy-2">
                <img src="./ImagesSource/hussein-2.jpeg" className="col-3" alt="hussein-2" />
                <figcaption className="text-center lead"><i>Fig 4. - This is me at a family wedding ceremony .</i></figcaption>
            </figure>

            <figure className="row justify-content-center gy-2">
                <img src="./ImagesSource\hussein-1.jpeg" className="col-3" alt="hussein-1" />
                <figcaption className="text-center lead"><i>Fig 5. - This is me on my first day of University.</i></figcaption>
            </figure>
        </div>

        {/* INSERTING TEXT */}
        <div className="main row justify-content-center">
            <ul className="col-3 text-center">
                <li>
                    <p>Student of Computer Science, Bachelors Programme, NUST-SEECS.</p>
                </li>
                <li>
                    <p>Interested in Artificial Intelligence, Machine Learning and AI Ethics.</p>
                </li>
            </ul>
        </div>

        <aside className="text-center">
            <p>The cornerstone of modern AI is Machine Learning, which "is a field of study in artificial intelligence concerned with the development and study of statistical algorithms that can learn from data and generalize to unseen data, and thus perform tasks without explicit instructions."<a href="https://en.wikipedia.org/wiki/Machine_learning"> <br />source</a></p>
        </aside>


    <hr/>

    <section className="container-fluid row gy-2 justify-content-center">
        <span>
            <hgroup>
                <h3 className="text-center"><b><u>Education</u></b></h3>
            </hgroup>
        </span>

        <div className="text-center col-2">

        <ol>
            <li>
                <h4>Matriculation</h4>
                <p>The Army Public School &amp; College System, Rawalpindi</p>
            </li>

            <li>
                <h4>Intermediate</h4>
                <p>The Army Public School &amp; College System, Rawalpindi</p>
            </li>

            <li>
                <h4>Bachelors</h4>
                <p>NUST-SEECS, Pakistan</p>
            </li>
        </ol>

        </div>

    </section>

    <section className="container-fluid row gy-2 justify-content-center">

        <hgroup className="text-center">
            <h3><b><u>Who am I?</u></b></h3>
        </hgroup>

        <p className="text-center">I'm just another student, and much like everyone else, enjoy breathing, recreation, and hope to one day <i>own</i> a house!</p>
        <p className="text-center">I like programming, whether that be the generic coding languages of C, C++, Python or Java; or the database languages of MySQL or XML!</p>
        <p className="text-center">Recently, I have also started dabbling in HTML, CSS and JAVASCRIPT.</p>

    </section>


    <hr/>

    <article style={{ display: 'flex', justifyContent: 'center' }}>
        {/* Add an SVG */}
        {/* You can skip this part. */}

        <svg width="200" height="200" viewBox="-100 -100 200 200">
            <defs>
                <path
                    id="branch"
                    d="
                        M 0 0 L 0 -90
                        M 0 -20 L 20 -34
                        M 0 -20 L -20 -34
                        M 0 -40 L 20 -54
                        M 0 -40 L -20 -54
                        M 0 -60 L 20 -74
                        M 0 -60 L -20 -74"
                    stroke="#E5C39C"
                    strokeWidth="5"
                />
            </defs>

            <use xlinkHref="#branch" />
            <use xlinkHref="#branch" transform="rotate(60)" />
            <use xlinkHref="#branch" transform="rotate(120)" />
            <use xlinkHref="#branch" transform="rotate(180)" />
            <use xlinkHref="#branch" transform="rotate(240)" />
            <use xlinkHref="#branch" transform="rotate(300)" />
        </svg>
    </article>

    <br></br><br></br>
    <footer className="footer">Copyright @HusseinAhmad.com</footer>

    </div>
  );
};

export default Home;
