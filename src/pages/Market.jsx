import React,{useState} from "react";

import CommonSection from '../components/ui/Common-section/CommonSection'
import NftCard from '../components/ui/Nft-card/NftCard'
import { NFT__DATA } from '../assets/data/data'

import { Container, Row, Col } from "reactstrap"

import '../styles/market.css'

function Market() {

    const [data, setData] = useState(NFT__DATA);
    const [search, setSearch] = useState('');

    const handleCategory =(e)=>{
        const filterValue = e.target.value;
        if (filterValue === "All Categories" || filterValue === "") {
            setData(NFT__DATA);
            return;
        }
        const filteredData = NFT__DATA.filter(
            item => item.category.toLowerCase() === filterValue.toLowerCase()
        );

        setData(filteredData);
    }

    const handleSort =(e)=>{
        const filterValue = e.target.value

        if(filterValue === 'high' ){
            const filterData = NFT__DATA.filter(item => item.currentBid >= 6)

            setData(filterData)
        }
        if(filterValue === 'mid' ){
            const filterData = NFT__DATA.filter(item => item.currentBid >= 5.50 && item.currentBid < 6 )

            setData(filterData)
        }
        if(filterValue === 'low' ){
            const filterData = NFT__DATA.filter(item => item.currentBid >= 4.89 && item.currentBid < 5.50 )

            setData(filterData)
        }

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

                        </div>
                    </Col>

                    {filteredData?.map((item) => (
                            <Col lg="3" md="4" sm="6" className="mb-4" key={item.id}>
                                <NftCard item={item}></NftCard>
                            </Col>
                        ))}
                </Row>
            </Container>          
          </section>
        </>
    );
}

export default Market;