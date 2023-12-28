import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

import images from '../../assets/images';

function Team(props) {
    return (
        <main className='team-page'>
            <section className="team_section layout_padding">
                <div className="container-fluid">
                    <div className="heading_container heading_center">
                        <h2 className="">
                            Our <span> Team</span>
                        </h2>
                    </div>

                    <div className="team_container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src={images.team_1} className="img1" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Joseph Brown
                                        </h5>
                                        <p>
                                            Marketing Head
                                        </p>
                                    </div>
                                    <div className="social_box">
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                                        </a>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                        </a>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                                        </a>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src={images.team_2} className="img1" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Nancy White
                                        </h5>
                                        <p>
                                            Marketing Head
                                        </p>
                                    </div>
                                    <div className="social_box">
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                                        </a>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                        </a>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                                        </a>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src={images.team_3} className="img1" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Earl Martinez
                                        </h5>
                                        <p>
                                            Marketing Head
                                        </p>
                                    </div>
                                    <div className="social_box">
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                                        </a>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                        </a>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                                        </a>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src={images.team_4} className="img1" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Josephine Allard
                                        </h5>
                                        <p>
                                            Marketing Head
                                        </p>
                                    </div>
                                    <div className="social_box">
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                                        </a>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                        </a>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                                        </a>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                        </a>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Team;