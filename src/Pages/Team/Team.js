import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

import images from '../../assets/images';

gsap.registerPlugin(ScrollTrigger);

function Team({ comp }) {
    useGSAP(
        () => {
            const tl = gsap.timeline()

            tl.from([".title-6"], {
                opacity: 0,
                y: "+=50",
                duration: 1,
                scrollTrigger: {
                    trigger: ['.title-6'],
                    start: 'bottom bottom',
                    end: 'top top',
                    scrub: 1,
                },

            }).to('.horizontal-scroll_section-height', {
                scrollTrigger: {
                    trigger: ".horizontal-scroll_section-height",
                    pin: true,
                    start: "top top", // when the top of the trigger hits the top of the viewport
                    end: "+=3500", // end after scrolling 500px beyond the start
                    scrub: 1,
                    markers: true
                },
            }).from('.col-box', {
                x: 1500,
                opacity: 0,
                ease: "circ.out",
                duration: 2.5,
                stagger: {
                    each: 1
                },
                scrollTrigger: {
                    trigger: '.team_section',
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                }
            })

        },

        { scope: comp }
    );
    return (
        <section className="team_section layout_padding" ref={comp}>
            <div className="container-fluid horizontal-scroll_section-height">
                <div className="heading_container heading_center">
                    <h2 className="title-6">
                        Our <span> Team</span>
                    </h2>
                </div>

                <div className="team_container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-box">
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
                        <div className="col-lg-3 col-sm-6 col-box">
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
                        <div className="col-lg-3 col-sm-6 col-box">
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
                        <div className="col-lg-3 col-sm-6 col-box">
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
    );
}

export default Team;