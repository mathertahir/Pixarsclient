import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./design-banner.css";
import { BsArrowUpRight } from "react-icons/bs";

const DesignBanner = () => {
  return (
    <>
      <div className="design-banner-main">
        <Container>
          <Row className="pb-5">
            <div>
              <Col xxl={12}>
                <div className="hero-top-links position-relative">
                  <a className="cl-white position-relative   ">
                    {" "}
                    Strategy, Design, Solution Development{" "}
                    <span className="pic-icon">
                      <BsArrowUpRight className="cl-white" />
                    </span>
                  </a>
                </div>

                <div className="title-wrapper">
                  <h1 className="cl-white f-500 f-sanserif  title-heading fs-110 position-relative">
                    We create Unique & digital experiences globally
                  </h1>
                  <div className="position-relative">
                    <p className="title-subheading cl-white">
                      <div className="f-kanit">digitl design agency studio</div>
                    </p>
                  </div>
                </div>

                <div className="arrow-section-main  ">
                  <div>
                    <img src="images/arrow-down.png"></img>
                  </div>
                  <div>
                    <div className="fs-50 fw-400 cl-white f-kanit">25k+</div>
                    <p className="fs-18 fw-400 f-kanit cl-white">
                      Projects completed <br /> successfully
                    </p>
                  </div>
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DesignBanner;
