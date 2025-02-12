import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import './live-auction.css'

import NftCard from "../Nft-card/NftCard";
import { NFT__DATA } from "../../../assets/data/data.js"


function LiveAuction(){
    return(
    <>
    <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-4' >
                <div className="live__auction__top d-flex align-items-center ">
                    <h3>Live Auction</h3>
                </div>
                </Col>

                {
                    NFT__DATA.slice(0,4).map((item)=>(
                        <Col lg='3' md='4' sm='6' className="mb-4" >
                          <NftCard key={item.id} item={item} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </section>
    </>);
}

export default LiveAuction