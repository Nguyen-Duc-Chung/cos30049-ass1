import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import './car_card.css';

function CarCard(props) {

    const {title, id, price, imgUrl, creator } = props.item;

    return (
        <>
         <div className="main_card_car">

            <div className="car_img">
                <img src={imgUrl} alt="" className="w-100" />
            </div>

            <div className="car_bried_info">

                <h5 className="car_title">
                    <Link to={`/market/${id}`} >{title}</Link>
                </h5>

                <div className="creator_container d-flex gap-3 ">

                    <div className="creator_infor w-100 d-flex align-items-center justify-content-between " >
                        <div className='w-50' >
                            <h6>Created By</h6>
                            <p>{creator}</p>
                        </div>
                        <div  className='w-50'>
                            <h6>Price</h6>
                            <p>{price} ETH</p>
                        </div>
                    </div>

                </div>


                <div className= " cardBtn mt-3 d-flex align-items-center justify-content-between" >
                    <button className=" buy_btn d-flex align-items-center gap-1 " >
                        <i class="ri-shopping-bag-line"></i> Buy
                    </button>

                    <button className=" detail_btn " >
                        <i class="ri-info-i"></i>
                        <Link to={`/market/${id}`} >View Detail</Link>
                    </button>

                </div>
            </div>


         </div>
        </>)
}

export default CarCard