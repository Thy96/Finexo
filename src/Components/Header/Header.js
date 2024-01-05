import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'

import { Link, NavLink, useLocation } from 'react-router-dom'

import images from "../../assets/images";
import SliderMainVisual from '../SliderMainVisual/SliderMainVisual';

function Header(props) {

    const location = useLocation();
    // console.log(location.pathname);
    return (
        <>
            <div className={location.pathname === '/' ? "hero_area" : 'sub_page hero_area'}>
                <div className="hero_bg_box">
                    <div className="bg_img_box">
                        <img src={images.hero_bg} alt="" />
                    </div>
                </div>

                {/* header section strats */}
                <header className="header_section">
                    <div className="container-fluid">
                        <Navbar collapseOnSelect expand="lg" data-bs-theme="dark">
                            <Link to="/" className='navbar-brand'><span>Finexo</span></Link>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto"></Nav>
                                <Nav>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) => isActive ? "active" : ""
                                        }
                                    >
                                        <span className='nav-link'>Home</span>
                                    </NavLink>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) => isActive ? "active" : ""
                                        }
                                    >
                                        <span className='nav-link'>About</span>
                                    </NavLink>
                                    <NavLink
                                        to="/services"
                                        className={({ isActive }) => isActive ? "active" : ""
                                        }
                                    >
                                        <span className='nav-link'>Services</span>
                                    </NavLink>
                                    <NavLink
                                        to="/why"
                                        className={({ isActive }) => isActive ? "active" : ""
                                        }
                                    >
                                        <span className='nav-link'>Why Us</span>
                                    </NavLink>
                                    <NavLink
                                        to="/team"
                                        className={({ isActive }) => isActive ? "active" : ""
                                        }
                                    >
                                        <span className='nav-link'>Team</span>
                                    </NavLink>
                                    <NavLink
                                        to="/login"
                                        className={({ isActive }) => isActive ? "active" : ""
                                        }
                                    >
                                        <span className='nav-link'><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Login</span>
                                    </NavLink>
                                    <Nav.Link href="#search"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </header>
                {/* end header section */}

                {/* slider section */}
                {location.pathname === '/' ? <SliderMainVisual></SliderMainVisual> : ''}
                {/* end slider section */}
            </div>


        </>
    );
}

export default Header;