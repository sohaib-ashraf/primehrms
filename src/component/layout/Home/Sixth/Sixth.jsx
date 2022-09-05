

import React from 'react'
import './Sixth.css'

import screenshotOne from '../../../../assets/images/screeenshotOne.png'
import screenshotTwo from '../../../../assets/images/screenshotTwo.png'
import { BsPlusLg } from "react-icons/bs"

const Sixth = () => {
    return (
        <section id="sixth" className='screenshot_section'>
            <div className="container">
                <div className="row screenshot-wrapper">

                    <div className="client-goals-sub main-subheading">
                        <span className="sub-text">
                            Beautiful application screens
                        </span>
                    </div>
                    <h2 className="main-heading">
                        Screenshots from the app
                    </h2>
                    <p className="secreenshot-desc">
                        This is just a simple text made for this unique and awesome <br></br>template, you can replace it with any text.
                    </p>

                </div>

                <div className="row screenshot_image-row mt-5">
                <div className="screenshot-image-wrapper d-flex align-content-center gap-4">

                
                    <div className="col-lg-3">
                        <div className="screenshot-image-item">
                            <img className='w-100' src={screenshotOne} alt="" />
                            <div className="screenshot-image-content">
                                <p className="screenshot-title">
                                        Leave Management
                                </p>

                                <p className="screenshot-desc">
                                    Leave managemnet module of Prime HRMS.
                                </p>

                                <div className="secreenshot-icon">
                                        <BsPlusLg />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="screenshot-image-item">
                            <img className='w-100' src={screenshotTwo} alt="" />
                            <div className="screenshot-image-content">
                                <p className="screenshot-title">
                                        Employee Management
                                </p>

                                <p className="screenshot-desc">
                                Employee managemnet module of Prime HRMS.
                                </p>
                                <div className="secreenshot-icon">
                                        <BsPlusLg />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="screenshot-image-item">
                            <img className='w-100' src={screenshotOne} alt="" />
                            <div className="screenshot-image-content">
                                <p className="screenshot-title">
                                        Payroll Management
                                </p>

                                <p className="screenshot-desc">
                                Payroll managemnet module of Prime HRMS.
                                </p>
                                <div className="secreenshot-icon">
                                        <BsPlusLg />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3">
                        <div className="screenshot-image-item">
                            <img className='w-100' src={screenshotTwo} alt="" />
                            <div className="screenshot-image-content">
                                <p className="screenshot-title">
                                        Recruiter Management
                                </p>

                                <p className="screenshot-desc">
                                Recruiter managemnet module of Prime HRMS.
                                </p>
                                <div className="secreenshot-icon">
                                        <BsPlusLg />
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                </div>
            </div>
        </section>
    )
}

export default Sixth