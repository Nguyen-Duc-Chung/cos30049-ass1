import React from 'react';

import CommonSection from '../components/ui/Common-section/CommonSection';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import {NFT__DATA} from "../assets/data/data"
import LiveAuction from '../components/ui/Live-auction/LiveAuction';
import '../styles/nft-details.css'
import { Link } from "react-router-dom";

function NftDetails() {

    const {id} = useParams()

    const singleNft = NFT__DATA.find( item => item.id === id )


    return(
        <>
         <CommonSection title={singleNft.title} />
         
         <section>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='6' >
                       <img src={singleNft.imgUrl} alt="" className="w-100 single__nft-img " />
                    </Col>

                    <Col lg='6'  md='6' sm='6' >
                        <div className="single__nft__content">

                            <h2>{singleNft.title}</h2>

                            <div className="nft__spec w-100">
                                <div className="car_info  car_owner">Owner: <span>{singleNft.creator}</span></div>
                                <div className="car_info  nft__price">Price: <span>{singleNft.currentBid} ETH</span> </div>
                                <div className="car_info  category">Category: <span>{singleNft.category}</span>  </div>
                                <div className="car_info  cre_date">Created date: <span>{singleNft.createDate}</span> </div>
                            </div>

                            <p className="my-4" >{singleNft.desc}</p>

                            <button className="singleNft-btn d-flex align-items-center gap-2 " >
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
export default NftDetails