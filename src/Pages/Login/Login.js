import React from 'react';
import classNames from 'classnames/bind';
import style from './Login.module.scss'
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(style)

function Login(props) {
    return (
        <>
            <main className='login-page'>
                <section className={cx('page_404')}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className={cx('four_zero_four_bg')}>
                                    <h1 className="text-center">404</h1>
                                </div>

                                <div className="contant_box_404">
                                    <h3 className="h2">
                                        Look like you're lost
                                    </h3>

                                    <p>the page you are looking for not avaible!</p>

                                    <NavLink to="/" className={cx('link_404')}>Go to Home</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Login;