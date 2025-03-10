import React from "react";
import CommonSection from '../components/section/Common-section/CommonSection';
import { Container, Row, Col } from "reactstrap";
import CarCard from '../components/section/Car_card/CarCard';
import img from '../assets/images/img-01.jpg'
import avatar from '../assets/images/ava-01.png'
import '../styles/create_item.css'

import { Link } from "react-router-dom";

const item = {
    id: "04",
    title: "Guard",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
    imgUrl: img,
    creator: "Trista Francis",
    creatorImg: avatar,
    currentBid: 7.89,
}

function Create() {
    return(
        <>
        <CommonSection title='Create Item' />

        <section>
            <Container>
                <Row>
                    <Col lg='3' md='4' sm='6'>
                      <h5>Preview Item</h5>
                      <CarCard item={item} />
                    </Col>

                    <Col lg='9' md='8' sm='6' >
                    
                      <div className="create__item">
                        <h3> Upload your Car to the marketplace </h3>
                        <form>
                            <div className="form__input">
                                <label htmlFor="" > Title </label>
                                <input type="text" placeholder="Enter title" />
                            </div>

                            <div className="form__input">
                                <label htmlFor="" >Price</label>
                                <input type="number" placeholder="Enter Price for one item (ETH)" />
                            </div>

                            <div className="form__input">
                                <label htmlFor="" >Category</label>
                                <input type="text" placeholder="Enter category" />
                            </div>

                            <div className=" d-flex align-items-center justify-content-between ">
                                <div className="form__input w-50 ">
                                    <label htmlFor="" >Created  Date</label>
                                    <input type="date" />
                                </div>

                            </div>

                            <div className="form__input">
                                <label htmlFor="" >Upload File</label>
                                <input type="file" placeholder="Browse" className="upload__input" />
                            </div>

                            <div className="form__input">
                                <label htmlFor="" > Description </label>
                               <textarea name=""  id=""  rows="3" placeholder="Enter description" className="w-100">                     
                                </textarea>
                            </div>

                        </form>

                        <button className="add-btn d-flex align-items-center gap-2" >
                            <i class="ri-shopping-bag-line" ></i>
                               <Link to='/' > ADD </Link>
                            </button>
                      </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
}

export default Create;