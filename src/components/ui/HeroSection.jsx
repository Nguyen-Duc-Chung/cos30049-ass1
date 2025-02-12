
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import "./hero-section.css"
import buysell from '../../assets/images/buysell.jpg'


function HeroSection(){
    return(
        <>
        <section className="hero__section">
            <Container>
                <Row>
                    <Col lg='6' md='6' >
                        <div className="hero__content">
                            <h2>
                                 BUY and SELL your car Quickly and Trusted with <span>Hoursepower </span>
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Alias molestias quos adipisci, libero cum magnam facilis quam eius, sequi aliquam, 
                            </p>
                            <div className="hero__btns d-flex align-items-center gap-4 ">

                                <button clasName=" explore__btn d-flex align-items-center gap-2" >
                                    <i class="ri-shopping-cart-line"></i>{" "}
                                    <Link to='/market'>Market</Link>
                                </button>
                                <button clasName=" create__btn d-flex align-items-center gap-2"  >
                                    <i class="ri-ball-pen-line"></i>{" "}
                                    <Link to='/create'>Create</Link>
                                </button>
                            </div>
                        </div>
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="hero__img">
                            <img src={buysell} alt="Hero Image" className=" .hero__img w-100" />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
        </>
    );
}

export default HeroSection