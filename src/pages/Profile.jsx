import React from 'react';
import CommonSection from '../components/section/Common-section/CommonSection';
import '../styles/profile.css';
import { Container, Row, Col } from 'reactstrap';
import {  DATA_CARS } from '../assets/data/data'; 
import CarCard from '../components/section/Car_card/CarCard';
import avatarImage from '../assets/images/ava-01.png'; 

function Profile() {
  const filteredData =  DATA_CARS.filter(item => item.creator === "0x49c...EfE5");

  return (
    <>
    <CommonSection title={"Profile"} />

    <section className="profile-section">
      <Container>
        <Row>
          <Col lg="12">
            <div className="profile-header">
              <div className="profile-info">
                <div className="profile-avatar">
                  <img src={avatarImage} alt="User Avatar" />
                </div>
                <div className="profile-user">
                  <h2>Huy Anh</h2>
                  <p>@nickHA</p>
                  <p className="creator-address">0x49c0e93d2b8a2b1f8286f7c2ac29e93ffeb42f8a</p>
                </div>
              </div>
            </div>

            <div className="profile_container">
              <div className="profile-user-info">
                <h3 className="my-Assets">My Assests <span>({filteredData.length})</span></h3>
                <h3 className='totalValue'>Total Value: 0.0132 ETH</h3>
              </div>
              <Row>
                {filteredData.map((item) => (
                  <Col lg="3" md="4" sm="6" className="mb-4" key={item.id}>
                    <CarCard item={item} />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
}

export default Profile;
