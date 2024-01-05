import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { Link } from 'react-router-dom';

import images from '../../assets/images';
gsap.registerPlugin(ScrollTrigger);
function About({ comp }) {

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.from([".title-3", ".title-4"], {
            opacity: 0,
            y: "+=50",
            duration: 1,
            scrollTrigger: {
                trigger: ['.title-3', '.title-4'],
                start: 'bottom bottom',
                end: 'top top',
                scrub: 1,
            },

        }).from('.image-full-cover', {
            x: -40,
            opacity: 0,
            duration: 0.5,
            ease: "back.out",
            stagger: { each: 0.5 },
            scrollTrigger: {
                trigger: '.image-full-cover',
                start: 'bottom bottom',
                end: 'top top',
                scrub: 1,
            }
        }).from('.word-animation-left', {
            x: 40,
            opacity: 0,
            duration: 1.5,
            ease: "back.out(3)",
            stagger: { each: 0.5 },
            scrollTrigger: {
                trigger: '.word-animation-left',
                start: 'bottom bottom',
                end: 'top 40%',
                scrub: 1,
            }
        })
    }, { scope: comp })
    return (
        <>
            <section className="about_section layout_padding" ref={comp}>
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
                                <img src={images.about_img} alt="" className='image-full-cover' />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="detail-box" style={{ wordBreak: 'break-all' }}>
                                <h3 className='word-animation-left'>
                                    We Are Finexo
                                </h3>
                                <p className='word-animation-left'>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All
                                </p>
                                <p className='word-animation-left'>
                                    Molestiae odio earum non qui cumque provident voluptates, repellendus exercitationem, possimus at iste corrupti officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita.
                                </p>
                                <div className='word-animation-left'>
                                    <Link to="/finexo/about/">
                                        Read More
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;