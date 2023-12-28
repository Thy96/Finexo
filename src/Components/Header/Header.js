import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'

import { NavLink, useLocation } from 'react-router-dom'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import images from "../../assets/images";
function Header(props) {
    const slideViewTop = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

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
                            <Navbar.Brand href="#home"><span>Finexo</span></Navbar.Brand>
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
                {location.pathname === '/' ? <section className="slider_section">
                    <Slider {...slideViewTop}>
                        <Container>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="detail-box">
                                        <h1>
                                            Crypto <br />
                                            Currency
                                        </h1>
                                        <p>
                                            Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                        </p>
                                        <div className="btn-box">
                                            <a href="#home" className="btn1">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="img-box">
                                        <img
                                            className="d-block w-100"
                                            src={images.slider_img}
                                            alt="First slide"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Container>
                        <Container>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="detail-box">
                                        <h1>
                                            Crypto <br />
                                            Currency
                                        </h1>
                                        <p>
                                            Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                        </p>
                                        <div className="btn-box">
                                            <a href="#home" className="btn1">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="img-box">
                                        <img
                                            className="d-block w-100"
                                            src={images.slider_img}
                                            alt="First slide"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Container>
                        <Container>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="detail-box">
                                        <h1>
                                            Crypto <br />
                                            Currency
                                        </h1>
                                        <p>
                                            Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                        </p>
                                        <div className="btn-box">
                                            <a href="#home" className="btn1">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="img-box">
                                        <img
                                            className="d-block w-100"
                                            src={images.slider_img}
                                            alt="First slide"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </Slider>
                </section> : ''}

                {/* end slider section */}
            </div>


        </>
    );
}

export default Header;