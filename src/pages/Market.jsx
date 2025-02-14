import React,{useState} from "react";
import CommonSection from '../components/section/Common-section/CommonSection'
import CarCard from '../components/section/Car_card/CarCard';
import {  DATA_CARS } from '../assets/data/data'
import { Container, Row, Col } from "reactstrap"
import '../styles/market.css'

function Market() {
    const [data, setData] = useState( DATA_CARS);
    const [search, setSearch] = useState('');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10);

    const handleCategory =(e)=>{
        const filterValue = e.target.value;
        if (filterValue === "All Categories" || filterValue === "") {
            setData( DATA_CARS);
            return;
        }
        const filteredData =  DATA_CARS.filter(
            item => item.category.toLowerCase() === filterValue.toLowerCase()
        );

        setData(filteredData);
    }

    const handleSort =(e)=>{
        const filterValue = e.target.value

        if(filterValue === 'high' ){
            const filterData =  DATA_CARS.filter(item => item.price >= 6)

            setData(filterData)
        }
        if(filterValue === 'mid' ){
            const filterData =  DATA_CARS.filter(item => item.price >= 5.50 && item.price < 6 )

            setData(filterData)
        }
        if(filterValue === 'low' ){
            const filterData =  DATA_CARS.filter(item => item.price >= 4.89 && item.price < 5.50 )

            setData(filterData)
        }

    };

    const handlePriceRangeChange = () => {
        const filteredData =  DATA_CARS.filter(
          item => item.price >= minPrice && item.price <= maxPrice
        );
        setData(filteredData);
      };

    const filteredData = data.filter((item) =>
        search.toLowerCase() === ""
            ? item
            : item.title.toLowerCase().includes(search.toLowerCase())
    );

    return(
        <>
         <CommonSection title={"MarketPlace"} />
          
          <section>
            <Container className='mainCon'>
                <Row className='mainRow' >
                    <Col lg='12' className=' mainCol mb-5'>
                        <div className="market__product__filter d-flex align-items-center gap-5 ">

                            <div className="Search__filter">
                                <i class="ri-search-line"></i>
                                <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
                            </div>

                            <div className="all__category__filter">
                                <select onChange={handleCategory} >
                                    <option> All Categories </option>
                                    <option value="Sport"> Sport </option>
                                    <option value="Coupe"> Coupe</option>
                                    <option value="Electric"> Electric</option>
                                    <option value="Convertible"> Convertible </option>
                                </select>
                            </div>

                            <div className="filter__right">
                                <select onChange={handleSort} >
                                    <option> Sort By </option>
                                    <option value="high"> High rate </option>
                                    <option value="mid"> Mid rate </option>
                                    <option value="low"> Low rate </option>
                                </select>
                            </div>

                            <div className="price-range-filter">
                                <label>Price Range: {minPrice} ETH - {maxPrice} ETH</label>
                                <div className="range-slider-container">
                                    <input
                                        type="range"
                                        min="0"
                                        max="10"
                                        step="0.1"
                                        value={minPrice}
                                        onChange={(e) => setMinPrice(parseFloat(e.target.value))}
                                        onInput={handlePriceRangeChange}
                                        className=" range-slider "
                                    />
                                    <input
                                        type="range"
                                        min="0"
                                        max="10"
                                        step="0.1"
                                        value={maxPrice}
                                        onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
                                        onInput={handlePriceRangeChange}
                                        className="range-slider "
                                    />
                                </div>
                            </div>

                        </div>
                    </Col>

                    {filteredData?.map((item) => (
                            <Col lg="3" md="4" sm="6" className="mb-4" key={item.id}>
                                <CarCard item={item}></CarCard>
                            </Col>
                        ))}
                </Row>
            </Container>          
          </section>
        </>
    );
}

export default Market;