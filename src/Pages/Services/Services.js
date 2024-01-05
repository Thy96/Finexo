import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { Link } from 'react-router-dom';

import images from '../../assets/images';
gsap.registerPlugin(ScrollTrigger);

function Services({ comp }) {

    useGSAP(
        () => {
            const tl = gsap.timeline()

            tl.from([".title-1", ".title-2"], {
                opacity: 0,
                y: "+=50",
                duration: 1,
                scrollTrigger: {
                    trigger: ['.title-1', '.title-2'],
                    start: 'bottom bottom',
                    end: 'top top',
                    scrub: 1,
                },
            }).from('.btn-box1', {
                y: 50,
                opacity: 0,
                ease: "sine.in",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '.btn-box1',
                    start: 'bottom bottom',
                    end: 'top 80%',
                    scrub: 1,
                }
            }).to(['.box1', '.box2', '.box3'], {
                duration: 1,
                rotation: 360,
                opacity: 1,
                delay: 2,
                stagger: 0.1,
                ease: "sine.out",
                scrollTrigger: {
                    trigger: '.box',
                    start: 'top 100%',
                    end: 'bottom 70%',
                    scrub: 1,
                },
            })

        },

        { scope: comp }
    );

    return (
        <>
            <section className="service_section layout_padding" ref={comp}>
                <div className="service_container">
                    <div className="container">
                        <div className="heading_container heading_center">
                            <h2 className='title-1'>
                                Our <span>Services</span>
                            </h2>
                            <p className='title-2'>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="box box1">
                                    <div className="img-box">
                                        <img src={images.s1} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Currency Wallet
                                        </h5>
                                        <p>
                                            fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                            The
                                            point of using
                                        </p>
                                        <Link to="/finexo/services/">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box box2">
                                    <div className="img-box">
                                        <img src={images.s2} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Security Storage
                                        </h5>
                                        <p>
                                            fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                            The
                                            point of using
                                        </p>
                                        <Link to="/finexo/services/">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box box3">
                                    <div className="img-box">
                                        <img src={images.s3} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Expert Support
                                        </h5>
                                        <p>
                                            fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                            The
                                            point of using
                                        </p>
                                        <Link to="/finexo/services/">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-box btn-box1">
                            <Link to="/finexo/services/">
                                View All
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services;