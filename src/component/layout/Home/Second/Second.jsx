


import React from 'react'
import './Second.css'

import { CgNotes } from "react-icons/cg"
import { MdKeyboardArrowRight } from "react-icons/md"
import { GiShakingHands } from "react-icons/gi"
import { MdOutlineAttachMoney } from "react-icons/md"




const Second = () => {

 

  const ServicesItems = [
    {
      imgIcon: <CgNotes />,
      title: "Leave Management",
      desc: "An intuitive attendance management system.",
      classIcon: "icon-cirle one-icon-circle",
    },
    {
      imgIcon: <GiShakingHands />,
      title: "Recruitment",
      desc: "An efficient applicant tracking system, dynamic recruiting software.",
      classIcon: "icon-cirle second-icon-circle",
    },
    {
      imgIcon: <MdOutlineAttachMoney />,
      title: "Leave Management",
      desc: "Painless payroll processing with Prime HRMS", 
      classIcon: "icon-cirle third-icon-circle",
    }

  ]


  return (
    <section id="second-section" className='help-clients'>
      <div className="container">
        <div className="row">
          <div className="client-goals-heading">
          <div className="client-goals-sub main-subheading">
            <span className="sub-text">
              First time in Pakistan
            </span>
          </div>
            <h2 className='main-heading'>
              We Help Our Clients To <br />Achieve Their Goals.
            </h2>
            <p className="clients-goal-desc">
              Prime HRMS contain everything an organization <br></br> needs to make its HR automated.
            </p>
          </div>
        </div>

        <div className="row services-row">

            {ServicesItems.map((item, index) => (
              <div className="col-lg-4">
                <div className="service-content">
                <div className={item.classIcon}>{item.imgIcon}</div>
                <div className="service-title"><h2 className='service-title-h2'>{item.title}</h2></div>
                <div className="service-desc">{item.desc}</div>
                <div className="learn_more-services my-3"><a href='#'>Read more <MdKeyboardArrowRight /></a></div>
                </div>
                
              </div>

            )
            )}


        </div>

      </div>
    </section>
  )
}

export default Second