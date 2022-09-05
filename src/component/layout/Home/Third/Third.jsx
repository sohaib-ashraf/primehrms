

import React from 'react'
import './Third.css'
import leptop from '../../../../assets/images/leptop.png'
import { GiCheckMark } from "react-icons/gi"
import { BiShapeSquare } from "react-icons/bi"
import { BsPersonFill } from "react-icons/bs"
import { SiAnalogue } from "react-icons/si"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { TbDiamond } from "react-icons/tb"

const Third = () => {


    const FeaturesItem = [
        {
            imgIcon: <GiCheckMark />,
            title: "Automate",
            desc: "Automate the routine and time-consuming HR tasks with HR Software and spend more time working with the organizational goals.",
        },
        {
            imgIcon: <BsPersonFill />,
            title: "Employee engagement",
            desc: "Prime HRMS is an excellent solution to enhance the employee participation at all possible levels.",
            classIcon: "icon-cirle third-icon-circle",
        },
        {
            imgIcon: <SiAnalogue />,
            title: "Analyze and improve",
            desc: "From recruitment to retention, master the huge volume of HR data and perfectly utilize it to reap the maximum productivity. ",
        }

    ]


    return (
        <section id="third-section">
            <div className="container">
                <div className="row features-content-wrap">
                    <div className="col-lg-6 ">
                    <div className="sticky-scroll">

                   
                        <div className="features-img w-100">
                            <img className='w-100' src={leptop} alt="" />
                        </div>
                        <div className="live_demo">
                            <button className="live-demo shadow-btn">View live demo</button>
                        </div>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="feature_content">
                            <h2 className="main-heading">
                                Understanding Your HR Needs Better
                            </h2>
                            <div className="feature_button-wrap">
                                <button className='btn feature-button'><AiOutlinePlusCircle /> More feature</button>
                                <button className='knowledge_base'> <TbDiamond /> Knowledge Base</button>
                            </div>

                            <div className="features-content-cards">

                                {FeaturesItem.map((item, index) => (

                                    <div className="features-content">
                                        <div className='features-icon'>{item.imgIcon}</div>
                                        <div className="features-data-wrap">
                                        <div className="features-title"><h2 className='service-title-h2'>{item.title}</h2></div>
                                        <div className="features-desc">{item.desc}</div>
                                        </div>
                                       
                                    </div>



                                )
                                )}
                                <div className="feature-btn">
                                        <button type="button" class="btn btn-secondary">Block level button</button>
                                        </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Third