import React from 'react';

import Container from 'react-bootstrap/Container';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import images from "../../assets/images";
function SliderMainVisual(props) {

    const slideViewTop = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };


    return (
        <>
            <section className="slider_section">
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
                                        <a href="#A" className="btn1">
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
                                        <a href="#A" className="btn1">
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
                                        <a href="#A" className="btn1">
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
            </section>
        </>
    );
}

export default SliderMainVisual;