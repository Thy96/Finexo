import React from 'react';
import images from '../../assets/images';

function Services(props) {
    return (
        <>
            <main className='services-page'>
                <section class="service_section layout_padding">
                    <div class="service_container">
                        <div class="container ">
                            <div class="heading_container heading_center">
                                <h2>
                                    Our <span>Services</span>
                                </h2>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                                </p>
                            </div>
                            <div class="row">
                                <div class="col-md-4 ">
                                    <div class="box ">
                                        <div class="img-box">
                                            <img src={images.s1} alt="" />
                                        </div>
                                        <div class="detail-box">
                                            <h5>
                                                Currency Wallet
                                            </h5>
                                            <p>
                                                fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                The
                                                point of using
                                            </p>
                                            <a href="#1">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 ">
                                    <div class="box ">
                                        <div class="img-box">
                                            <img src={images.s2} alt="" />
                                        </div>
                                        <div class="detail-box">
                                            <h5>
                                                Security Storage
                                            </h5>
                                            <p>
                                                fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                The
                                                point of using
                                            </p>
                                            <a href="#2">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 ">
                                    <div class="box ">
                                        <div class="img-box">
                                            <img src={images.s3} alt="" />
                                        </div>
                                        <div class="detail-box">
                                            <h5>
                                                Expert Support
                                            </h5>
                                            <p>
                                                fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                The
                                                point of using
                                            </p>
                                            <a href="#3">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="btn-box">
                                <a href="#services">
                                    View All
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Services;