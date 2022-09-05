


import React from 'react'
import './Fifth.css'
import fifth from '../../../../assets/images/fifth-img.png'
import Sixth from '../../../../assets/images/sixth-img.png'
import { MdKeyboardArrowRight } from "react-icons/md"
import { FaPlay } from "react-icons/fa"

const Fifth = () => {
    return (
        <>


            <section id="fifth">
                <div className="container">
                    <div className="row image-text-wrapper-first">
                        <div className="col-lg-6 image-wrap">

                            <img src={fifth} alt="" className="fifth w-100" />

                        </div>
                        <div className="col-lg-6 image-text-content">
                            <div className="sticky-scroll">
                                <h2 className="main-heading">
                                    Companies trusted and use pixfort products around the world
                                </h2>
                                <p className="check_all">Check all features <MdKeyboardArrowRight /></p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section id="Sixth">
                <div className="container">
                    <div className="row image-text-wrapper-second">

                        <div className="col-lg-6 image-text-content">
                            <div className="sticky-scroll">
                                <div className="icon-play mb-4">
                                    <FaPlay />
                                </div>
                                <h2 className="main-heading">
                                    Companies trusted and use pixfort products around the world
                                </h2>
                            </div>
                        </div>

                        <div className="col-lg-6 image-wrap ">
                            <img src={Sixth} alt="" className="Sixth w-100" />
                        </div>
                    </div>

                </div>
            </section>

        </>



    )
}

export default Fifth