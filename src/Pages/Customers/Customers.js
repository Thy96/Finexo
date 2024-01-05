import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import images from '../../assets/images';
gsap.registerPlugin(ScrollTrigger);

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                position: "absolute",
                bottom: 0,
                top: 'auto',
                right: '25%',
                transform: 'translateX(50%)',
                zIndex: 1
            }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                bottom: 0,
                top: 'auto',
                left: '25%',
                transform: 'translateX(-50%)',
                zIndex: 1
            }}
            onClick={onClick}
        />
    );
}

function Customers({ comp }) {
    const slideInfoCustomer = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    useGSAP(
        () => {
            const tl = gsap.timeline()

            tl.from([".title-7"], {
                opacity: 0,
                y: "+=50",
                duration: 1,
                scrollTrigger: {
                    trigger: ['.title-7'],
                    start: 'bottom bottom',
                    end: 'top top',
                    scrub: 1,
                },

            }).from('.slide-up-animation', {
                y: 50,
                opacity: 0,
                duration: 1.5,
                stagger: {
                    amount: 1
                },
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: '.slide-up-animation',
                    start: 'bottom bottom',
                    end: 'top 50%',
                    scrub: 1,

                }
            })

        },

        { scope: comp }
    );

    return (
        <>
            <section className="client_section layout_padding" ref={comp}>
                <div className="container">
                    <div className="heading_container heading_center psudo_white_primary mb_45">
                        <h2 className="title-7">
                            What says our <span>Customers</span>
                        </h2>
                    </div>
                    <Slider {...slideInfoCustomer} className='slide-up-animation'>
                        <div className="item">
                            <div className="box">
                                <div className="img-box">
                                    <img src={images.client1} alt="" className="box-img" />
                                </div>
                                <div className="detail-box">
                                    <div className="client_id">
                                        <div className="client_info">
                                            <h6>
                                                LusDen
                                            </h6>
                                            <p>
                                                magna aliqua. Ut
                                            </p>
                                        </div>
                                        <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="box">
                                <div className="img-box">
                                    <img src={images.client2} alt="" className="box-img" />
                                </div>
                                <div className="detail-box">
                                    <div className="client_id">
                                        <div className="client_info">
                                            <h6>
                                                Zen Court
                                            </h6>
                                            <p>
                                                magna aliqua. Ut
                                            </p>
                                        </div>
                                        <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="box">
                                <div className="img-box">
                                    <img src={images.client1} alt="" className="box-img" />
                                </div>
                                <div className="detail-box">
                                    <div className="client_id">
                                        <div className="client_info">
                                            <h6>
                                                LusDen
                                            </h6>
                                            <p>
                                                magna aliqua. Ut
                                            </p>
                                        </div>
                                        <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="box">
                                <div className="img-box">
                                    <img src={images.client2} alt="" className="box-img" />
                                </div>
                                <div className="detail-box">
                                    <div className="client_id">
                                        <div className="client_info">
                                            <h6>
                                                Zen Court
                                            </h6>
                                            <p>
                                                magna aliqua. Ut
                                            </p>
                                        </div>
                                        <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    );
}

export default Customers;