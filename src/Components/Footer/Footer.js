import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

function Footer(props) {
    return (
        <>
            {/* info section */}
            <section className="info_section layout_padding2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 info_col">
                            <div className="info_contact">
                                <h4>
                                    Address
                                </h4>
                                <div className="contact_link_box">
                                    <a href="https://www.google.com/maps" target='_blank' rel="noreferrer">
                                        <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                                        <span>
                                            Location
                                        </span>
                                    </a>
                                    <a href="tel:1234567890">
                                        <FontAwesomeIcon icon={faPhoneVolume}></FontAwesomeIcon>
                                        <span>
                                            Call +01 1234567890
                                        </span>
                                    </a>
                                    <a href="mailto:demo@gmail.com">
                                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                        <span>
                                            demo@gmail.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="info_social">
                                <a href="https://www.facebook.com/" target='_blank' rel="noreferrer">
                                    <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                                </a>
                                <a href="https://twitter.com/?lang=vi" target='_blank' rel="noreferrer">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                </a>
                                <a href="https://www.linkedin.com/" target='_blank' rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                                </a>
                                <a href="https://www.instagram.com/" target='_blank' rel="noreferrer">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 info_col">
                            <div className="info_detail">
                                <h4>
                                    Info
                                </h4>
                                <p>
                                    necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 mx-auto info_col">
                            <div className="info_link_box">
                                <h4>
                                    Links
                                </h4>
                                <div className="info_links">
                                    <NavLink to="/finexo/">
                                        Home
                                    </NavLink>
                                    <NavLink to="/finexo/about/">
                                        About
                                    </NavLink>
                                    <NavLink to="/finexo/services/">
                                        Services
                                    </NavLink>
                                    <NavLink to="/finexo/why/">
                                        Why Us
                                    </NavLink>
                                    <NavLink to="/finexo/team/">
                                        Team
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 info_col ">
                            <h4>
                                Subscribe
                            </h4>
                            <form action="#">
                                <input type="text" placeholder="Enter email" />
                                <button type="submit">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* end info section */}

            {/* footer section */}
            <footer className="footer_section">
                <div className="container">
                    <p>
                        &copy; 2023
                    </p>
                </div>
            </footer>
            {/* footer section */}
        </>
    );
}

export default Footer;