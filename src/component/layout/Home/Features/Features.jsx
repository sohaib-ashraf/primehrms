

import React from 'react'
import './Features.css'
import { CgNotes } from "react-icons/cg"
import { MdKeyboardArrowRight } from "react-icons/md"
import { GiShakingHands } from "react-icons/gi"
import { MdOutlineAttachMoney } from "react-icons/md"

const Features = () => {

    const FeatureItems = [
        {
            imgIcon: <CgNotes />,
            title: "Leave Management",
            desc: "An intuitive attendance management system.",
            classIcon: "icon-cirle one-icon-circle",
        },
        {
            imgIcon: <GiShakingHands />,
            title: "Recruitment",
            desc: "An intuitive attendance management system.",
            classIcon: "icon-cirle second-icon-circle",
        },
        {
            imgIcon: <MdOutlineAttachMoney />,
            title: "Leave Management",
            desc: "Painless payroll processing with Prime HRMS",
            classIcon: "icon-cirle third-icon-circle",
        },
        {
            imgIcon: <MdOutlineAttachMoney />,
            title: "Leave Management",
            desc: "Painless payroll processing with Prime HRMS",
            classIcon: "icon-cirle third-icon-circle",
        },
        {
            imgIcon: <MdOutlineAttachMoney />,
            title: "Leave Management",
            desc: "Painless payroll processing with Prime HRMS",
            classIcon: "icon-cirle third-icon-circle",
        },
        {
            imgIcon: <MdOutlineAttachMoney />,
            title: "Leave Management",
            desc: "Painless payroll processing with Prime HRMS",
            classIcon: "icon-cirle third-icon-circle",
        }

    ]


    return (
        <section id="featured">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h2 className="main-heading mb-4">
                            Some of Essentials great and powerful features
                        </h2>
                        <button className="shadow-btn">
                            Read more stories from clients
                        </button>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">

                            <div className="features-card">
                            <div className="feature-content">
                                <div className="row g-7">

                                    {FeatureItems.map((item, index) => (
                                        <div className="col-lg-5">
                                            
                                                <div className="row">
                                                <div className="feature-items">
                                                    <div className="col-3">
                                                        <div className="feature-img">
                                                            <div className={item.classIcon}>{item.imgIcon}</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-9">
                                                        <div className="feature-data">


                                                            <div className="feature-title"><h2 className='feature-title-h2'>{item.title}</h2></div>
                                                            <div className="feature-desc">{item.desc}</div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                        </div>

                                    )
                                    )}
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

export default Features