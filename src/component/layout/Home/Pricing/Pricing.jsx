

import React from 'react'
import './Pricing.css'
import { IoMdCheckmarkCircle } from "react-icons/io"
import { BsFileBarGraphFill } from "react-icons/bs"
import { AiFillCreditCard } from "react-icons/ai"
import { BiSupport } from "react-icons/bi"
import { MdOutlineUpdate } from "react-icons/md"
import { ImPriceTag } from "react-icons/im"

import yellow from '../../../../assets/images/yellow-circle.png'
import pink from '../../../../assets/images/pink-circle.png'

const Pricing = () => {


    return (
        <section id="pricing">

<div class="image-pink hero-moveable-images">
            <img src={pink} alt="" className="moveable-css" />
        </div>

        <div class="image-yellow hero-moveable-images">
            <img src={yellow} alt="" className="moveable-css" />
        </div>

            <div className="container">
                <div className="row price-heading text-center">
                    <div className="pricing-sub main-subheading">
                        <span className="sub-text">
                            Price for everyone
                        </span>
                    </div>
                    <h2 className="main-heading">
                        Affordable pricing for everyone
                    </h2>

                    <p className="pricing-desc mt-4">
                        This is just a simple text made for this unique and awesome <br></br>template, you can replace it with any text.
                    </p>
                </div>

                <div className="pricing-cards">
                    <div className="row">



                        <div className="col-lg-4">
                            <div className="pricng-card-top pricing-card-left">
                                <div className="card-top-sub main-subheading">
                                    <span>For personal project</span>
                                </div>
                                <div className="pricing-card-price">
                                    <h2 className='main-heading'>
                                        Free
                                    </h2>

                                </div>
                                <p className="pricing-card-desc">
                                    No credit card required
                                </p>

                            </div>


                            <div className="pricing-card-list">
                                <ul className="pricing-list">
                                    <li className="list-items"><IoMdCheckmarkCircle />Free 14-day trial</li>
                                    <li className="list-items"><BsFileBarGraphFill />Full access to all features</li>
                                    <li className="list-items"><AiFillCreditCard />No credit card required</li>
                                    <li className="list-items"><BiSupport />Premium Support</li>
                                    <li className="list-items"><MdOutlineUpdate />Free Updates</li>
                                </ul>
                            </div>

                            <div className="pricing-button">
                                <button className="try-free btn">
                                    Try for free
                                </button>
                            </div>


                            <div className="pricing-card-footer">
                                <div className="card-footer-img">
                                    <ImPriceTag />
                                </div>

                                <div className="pricing-card-footer-content">
                                    <h4 className="card-footer-heading">
                                        Fixed prices for Pakistan
                                    </h4>
                                    <div className="card-footer-desc">
                                        This is just a simple text made for this unique and awesome template.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 pricing-card-highlighted">

                            <div className="pricng-card-top ">
                                <div className="card-top-sub main-subheading">
                                    <span>For personal project</span>
                                </div>
                                <div className="pricing-card-price">
                                    <h2 className='main-heading'>
                                        $42
                                    </h2>

                                </div>
                                <p className="pricing-card-desc">
                                    No credit card required
                                </p>

                            </div>


                            <div className="pricing-card-list">
                                <ul className="pricing-list">
                                    <li className="list-items"><IoMdCheckmarkCircle />Free 14-day trial</li>
                                    <li className="list-items"><BsFileBarGraphFill />Full access to all features</li>
                                    <li className="list-items"><AiFillCreditCard />No credit card required</li>
                                    <li className="list-items"><BiSupport />Premium Support</li>
                                    <li className="list-items"><MdOutlineUpdate />Free Updates</li>
                                </ul>
                            </div>

                            <div className="pricing-button">
                                <button className="try-free btn">
                                    Try for free
                                </button>
                            </div>


                            <div className="pricing-card-footer">
                                <div className="card-footer-img">
                                    <ImPriceTag />
                                </div>

                                <div className="pricing-card-footer-content">
                                    <h4 className="card-footer-heading">
                                        Fixed prices for Pakistan
                                    </h4>
                                    <div className="card-footer-desc">
                                        This is just a simple text made for this unique and awesome template.
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4">

                            <div className="pricng-card-top pricing-card-left">
                                <div className="card-top-sub main-subheading">
                                    <span>For personal project</span>
                                </div>
                                <div className="pricing-card-price">
                                    <h2 className='main-heading'>
                                        $500
                                    </h2>

                                </div>
                                <p className="pricing-card-desc">
                                    No credit card required
                                </p>

                            </div>


                            <div className="pricing-card-list">
                                <ul className="pricing-list">
                                    <li className="list-items"><IoMdCheckmarkCircle />Free 14-day trial</li>
                                    <li className="list-items"><BsFileBarGraphFill />Full access to all features</li>
                                    <li className="list-items"><AiFillCreditCard />No credit card required</li>
                                    <li className="list-items"><BiSupport />Premium Support</li>
                                    <li className="list-items"><MdOutlineUpdate />Free Updates</li>
                                </ul>
                            </div>

                            <div className="pricing-button">
                                <button className="try-free btn">
                                    Try for free
                                </button>
                            </div>


                            <div className="pricing-card-footer">
                                <div className="card-footer-img">
                                    <ImPriceTag />
                                </div>

                                <div className="pricing-card-footer-content">
                                    <h4 className="card-footer-heading">
                                        Fixed prices for Pakistan
                                    </h4>
                                    <div className="card-footer-desc">
                                        This is just a simple text made for this unique and awesome template.
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

export default Pricing