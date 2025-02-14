import React from 'react';

import CommonSection from '../components/section/Common-section/CommonSection';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { DATA_CARS } from "../assets/data/data"
import LiveAuction from '../components/section/Live_auction/LiveAuction';
import '../styles/car_details.css'
import { Link } from "react-router-dom";

function CarDetails() {

    const {id} = useParams()

    const CarDetail =  DATA_CARS.find( item => item.id === id )


    return(
        <>
         <CommonSection title={CarDetail.title} />
         
         <section>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='6' >
                       <img src={CarDetail.imgUrl} alt="" className="w-100 carDetail_img " />
                    </Col>

                    <Col lg='6'  md='6' sm='6' >
                        <div className="carDetail_content">

                            <h2>{CarDetail.title}</h2>

                            <div className="carDetail_spec w-100">
                                <div className="car_info ">Owner: <span>{CarDetail.creator}</span></div>
                                <div className="car_info ">Price: <span>{CarDetail.price} ETH</span> </div>
                                <div className="car_info ">Category: <span>{CarDetail.category}</span>  </div>
                                <div className="car_info ">Created date: <span>{CarDetail.createDate}</span> </div>
                            </div>

                            <p className="my-4" >{CarDetail.desc}</p>

                            <button className="CarDetail-btn d-flex align-items-center gap-2 " >
                                <i class="ri-shopping-bag-line" ></i>
                                <Link to='/wallet' >BUY</Link>
                            </button>


                        </div>
                    </Col>
                </Row>
            </Container>
         </section>

         <LiveAuction />
        </>
    );
}
export default CarDetails