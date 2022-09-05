

import React from 'react'
import './Fourth.css'
import ozi from '../../../../assets/images/ozi.png'
import tkxel from '../../../../assets/images/tkxel.png'
import alkhidmat from '../../../../assets/images/alkhidmat.png'
import arham from '../../../../assets/images/arham.png'
import leverify from '../../../../assets/images/leverify.png'


const Fourth = () => {
  return (
    <section id='fourth'>
    <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <div className="clients-wrapper">
                    <div className="client-data-wrap">
                        <p className="clients-no">
                            +500
                        </p>
                        <h2 className="main-heading">
                        Companies trusted and use Prime HRMS around the world
                        </h2>
                        <button className="read_more shadow-btn">Read more stories from clients</button>
                    </div>
                </div>
            </div>

            <div className="col-lg-8">
                <div className="clients-wrapper">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="clients-wrapper-box">
                                <img className='w-100' src={ozi} alt="" />
                                <p className="clients-desc">
                                There are unlimited possibilities to create great
                                </p>
                                <p className="client-name">
                                    Usman Sheikh
                                </p>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="clients-wrapper-box">
                                <img className='w-100' src={tkxel} alt="" />
                                <p className="clients-desc">
                                There are unlimited possibilities to create great
                                </p>
                                <p className="client-name">
                                    Umair Javed
                                </p>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="clients-wrapper-box">
                                <img className='w-100' src={alkhidmat} alt="" />
                                <p className="clients-desc">
                                There are unlimited possibilities to create great
                                </p>
                                <p className="client-name">
                                    Shahid Iqbal
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="row  second-clients-row " >
                        <div className="col-lg-4">
                        <div className="clients-wrapper-box">
                                <img className='w-100' src={arham} alt="" />
                                <p className="clients-desc">
                                There are unlimited possibilities to create great
                                </p>
                                <p className="client-name">
                                    Shahid Iqbal
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-8">
                        <div className="clients-wrapper-box">
                                <img className='w-100' src={leverify} alt="" />
                                <p className="clients-desc">
                                Essentials theme is awesome! There are unlimited possibilities to create great looking websites in minutes
                                </p>
                                <p className="client-name">
                                    Syed Ammar
                                </p>
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

export default Fourth