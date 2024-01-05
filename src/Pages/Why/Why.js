import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { Link } from 'react-router-dom';

import images from '../../assets/images';
gsap.registerPlugin(ScrollTrigger);

function Why({ comp }) {
    useGSAP(
        () => {
            const tl = gsap.timeline()

            tl.from([".title-5"], {
                opacity: 0,
                y: "+=50",
                duration: 1,
                scrollTrigger: {
                    trigger: ['.title-5'],
                    start: 'bottom bottom',
                    end: 'top top',
                    scrub: 1,
                },

            }).from('.slide-up-left-box1', {
                x: -40,
                y: 50,
                opacity: 0,
                ease: "power1.out",
                duration: 0.5,
                stagger: {
                    each: 0.5
                },
                scrollTrigger: {
                    trigger: '.slide-up-left-box1',
                    start: 'top 80%',
                    end: 'bottom 50%',
                    scrub: 1,
                }
            }).from('.slide-up-left-box2', {
                x: -40,
                y: 50,
                opacity: 0,
                ease: "power1.out",
                duration: 0.5,
                stagger: {
                    each: 0.5
                },
                scrollTrigger: {
                    trigger: '.slide-up-left-box2',
                    start: 'top 80%',
                    end: 'bottom 50%',
                    scrub: 1,
                }
            }).from('.slide-up-right-box1', {
                x: 40,
                y: 50,
                opacity: 0,
                ease: "power1.out",
                duration: 0.5,
                stagger: {
                    each: 0.5
                },
                scrollTrigger: {
                    trigger: '.slide-up-right-box1',
                    start: 'top 80%',
                    end: 'bottom 50%',
                    scrub: 1,
                }
            }).from('.slide-up-right-box2', {
                x: 40,
                y: 50,
                opacity: 0,
                ease: "power1.out",
                duration: 0.5,
                stagger: {
                    each: 0.5
                },
                scrollTrigger: {
                    trigger: '.slide-up-right-box2',
                    start: 'top 80%',
                    end: 'bottom 50%',
                    scrub: 1,
                }
            }).from('.btn-box2', {
                y: 50,
                opacity: 0,
                ease: "sine.in",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '.btn-box2',
                    start: 'bottom bottom',
                    end: 'top 80%',
                    scrub: 1,
                }
            })

        },

        { scope: comp }
    );
    return (
        <>
            <section className="why_section layout_padding" ref={comp}>
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2 className='title-5'>
                            Why Choose <span>Us</span>
                        </h2>
                    </div>
                    <div className="why_container">
                        <div className="box slide-up-left-box1">
                            <div className="img-box">
                                <img src={images.w1} alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Expert Management
                                </h5>
                                <p>
                                    Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                                    Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
                                </p>
                            </div>
                        </div>
                        <div className="box slide-up-right-box1">
                            <div className="img-box">
                                <img src={images.w2} alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Secure Investment
                                </h5>
                                <p>
                                    Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                                    Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
                                </p>
                            </div>
                        </div>
                        <div className="box slide-up-left-box2">
                            <div className="img-box">
                                <img src={images.w3} alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Instant Trading
                                </h5>
                                <p>
                                    Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                                    Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
                                </p>
                            </div>
                        </div>
                        <div className="box slide-up-right-box2">
                            <div className="img-box">
                                <img src={images.w4} alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Happy Customers
                                </h5>
                                <p>
                                    Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                                    Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="btn-box btn-box2">
                        <Link to="/why">
                            Read More
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Why;