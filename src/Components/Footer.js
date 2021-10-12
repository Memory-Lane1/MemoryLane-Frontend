import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div>
            <footer className="container-fluid " id="footer" fixed="bottom">
                <div className="row ">
                    <div className="col mr-auto ml-auto ">

                        <a href="#" className="social-icon" target="_blank" ><FontAwesomeIcon icon={faFacebook} size="2x" /></a>

                        <a href="#" className="social-icon" target="_blank" ><FontAwesomeIcon icon={faInstagram} size="2x" /></a>

                        <a href="#" className="social-icon" target="_blank" ><FontAwesomeIcon icon={faTwitter} size="2x" /></a>


                    </div>
                </div>
                <p className="col-12 copyright">Copyright © 2021</p>
            </footer>
        </div>
    )
}

export default Footer
