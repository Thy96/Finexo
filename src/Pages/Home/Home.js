import React, { useLayoutEffect, useRef } from 'react';

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import images from "../../assets/images";


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
gsap.registerPlugin(ScrollTrigger);
function Home(props) {
    const comp = useRef();
    const comp1 = useRef();

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
                    // markers: true
                },
            }).to([".title-1", ".title-2"], {
                opacity: 1,
            }).from([".title-3", ".title-4"], {
                opacity: 0,
                y: "+=50",
                duration: 1,
                scrollTrigger: {
                    trigger: ['.title-3', '.title-4'],
                    start: 'bottom bottom',
                    end: 'top top',
                    scrub: 1,
                },

            }).to([".title-3", ".title-4"], {
                opacity: 1,
            }).to('.box1', {
                duration: 1,
                rotate: 360,
                opacity: 1,
                left: 0,
                scrollTrigger: {
                    trigger: '.box1',
                    start: 'bottom bottom',
                    end: 'top 50%',
                    scrub: 1,
                    // markers: true
                },
            }).to('.box2', {
                duration: 1,
                rotate: 360,
                opacity: 1,
                scrollTrigger: {
                    trigger: '.box2',
                    start: 'bottom bottom',
                    end: 'top 50%',
                    scrub: 1,
                },
            }).to('.box3', {
                duration: 1,
                rotate: 360,
                opacity: 1,
                right: 0,
                scrollTrigger: {
                    trigger: '.box3',
                    start: 'bottom bottom',
                    end: 'top 50%',
                    scrub: 1,
                },
            })
        },

        { scope: comp1 }
    );

    useLayoutEffect(() => {

        let ctx = gsap.context(() => {

            // const t1 = gsap.timeline()
            // t1.from("#intro-slider", {
            //     xPercent: "0",
            //     duration: 0.5,
            //     delay: 0.3,
            // })
            //     .from(["#title-1"], {
            //         opacity: 0,
            //         y: "+=30",
            //         stagger: 0.5,
            //     })
            //     .to(["#title-1"], {
            //         opacity: 0,
            //         y: "-=30",
            //         delay: 0.3,
            //         stagger: 0.5,
            //     })
            //     .to("#intro-slider", {
            //         xPercent: "-100",
            //         duration: 0.5,
            //     })
        }, comp)

        return () => ctx.revert()
    }, [])

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
    return (
        <>
            <div>
                {/* <div
                    id="intro-slider"
                    style={{
                        position: 'fixed',
                        background: '#000',
                        top: 0,
                        left: 0,
                        zIndex: 10,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <h1 style={{
                        color: '#fff',
                    }} id="title-1">
                        Welcome.
                    </h1>
                </div> */}

                <main className='home-page' id="welcome" ref={comp1}>

                    {/* service section */}
                    <section className="service_section layout_padding">
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
                                                <a href="#home">
                                                    Read More
                                                </a>
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
                                                <a href="#home">
                                                    Read More
                                                </a>
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
                                                <a href="#home">
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <a href="#home">
                                        View All
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end service section */}

                    {/* about section */}
                    <section className="about_section layout_padding">
                        <div className="container">
                            <div className="heading_container heading_center">
                                <h2 className='title-3'>
                                    About <span>Us</span>
                                </h2>
                                <p className='title-4'>
                                    Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-md-6 ">
                                    <div className="img-box">
                                        <img src={images.about_img} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="detail-box">
                                        <h3>
                                            We Are Finexo
                                        </h3>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                                            in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                                            are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                                            the middle of text. All
                                        </p>
                                        <p>
                                            Molestiae odio earum non qui cumque provident voluptates, repellendus exercitationem, possimus at iste corrupti officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita.
                                        </p>
                                        <a href="#home">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end about section */}

                    {/* why section */}
                    <section className="why_section layout_padding">
                        <div className="container">
                            <div className="heading_container heading_center">
                                <h2>
                                    Why Choose <span>Us</span>
                                </h2>
                            </div>
                            <div className="why_container">
                                <div className="box">
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
                                <div className="box">
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
                                <div className="box">
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
                                <div className="box">
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
                            <div className="btn-box">
                                <a href="#home">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </section>
                    {/* end why section */}

                    {/* team section */}
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
                    {/* end team section */}

                    {/* client section */}
                    <section className="client_section layout_padding">
                        <div className="container">
                            <div className="heading_container heading_center psudo_white_primary mb_45">
                                <h2>
                                    What says our <span>Customers</span>
                                </h2>
                            </div>
                            <Slider {...slideInfoCustomer}>
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
                    {/* end client section */}
                </main>
            </div>


        </>
    );
}

export default Home;