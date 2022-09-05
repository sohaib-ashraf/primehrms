

import React from 'react'
import heroOne from '../../../../assets/images/hero-1.png'
import heroTwo from '../../../../assets/images/hero-2.png'
import blue from '../../../../assets/images/blue-circle.png'
import pink from '../../../../assets/images/pink-circle.png'
import grey from '../../../../assets/images/grey-circle.png'
import yellow from '../../../../assets/images/yellow-circle.png'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero-banner">



        <div class="image-one hero-moveable-images">
            <img src={blue} alt="" className="moveable-css" />
        </div>
        <div class="image-two">
            <img src={pink} alt="" className="moveable-css" />
        </div>
        <div class="image-three">
            <img src={grey} alt="" className="moveable-css" />
        </div>
        <div class="image-four">
            <img src={yellow} alt="" className="moveable-css" />
        </div>


            <div className="container">
                <div className="row  py-5 hero-banner-row">
                    <div className="col-5 hero-content-col d-flex justify-content-center flex-lg-column gap-5">
                        <div className='hero-content'>
                            <div className="hero-heading">
                                <h2 className='main-heading'>
                                Make your HR a strategic partner
                                </h2>
                            </div>

                            <div className="hero-desc">
                            <p>
                            Centralize And Automate All Your HR Information. Payroll, Employee management, ESS and much more in Prime HRMS
                            </p>
                            </div>

                           

                            <div className="hero-buttons">
                                <button className="btn first">
                                    For iphone
                                </button>
                                <button className="btn second">
                                    For android
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="col-7">
                        <div className="row banner-slider-img">
                            <div className="col-6">
                                <img className='w-100 shadow-box' src={heroOne} alt="" />
                            </div>
                            <div className="col-6">
                                <img className='w-100 shadow-box' src={heroTwo} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero