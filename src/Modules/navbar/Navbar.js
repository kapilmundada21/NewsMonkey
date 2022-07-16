import React from 'react'
import './Navbar.css';
import propTypes from 'prop-types' 

export default function Navbar(props) {
    return (
        <nav className="navbar fixed-top sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="images/logo.png" alt="logo" width="80px" height="80px" />
                    <span>{props.title}</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="index.php">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="supportus.php">Support</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="aboutus.php">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contactus.php">Contact Us</a>
                        </li>
                    </ul>
                    <li className="nav-item dropdown">
                        <a className="dropdown-toggle navbtn" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Donate   </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="https://pmny.in/qrgpx69I5tQw">Money</a>
                            <a className="dropdown-item" href="food_donate.php">Food</a>
                            <a className="dropdown-item" href="cloths_donate.php">Cloths</a>
                        </div>
                    </li>
                    <a href="login.php">
                        <button className="navbtn mx-4" type="button">Login and Register</button>
                    </a>
                </div>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title : "set title here"
};