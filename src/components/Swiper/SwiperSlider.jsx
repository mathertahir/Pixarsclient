import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./swiperstyle.css";
import { Container } from "react-bootstrap";

const SwiperSlider = () => {
  return (
    <>
      <div className="swiper-1 ">
        <Row className="justify-content-center  mx-0 flex-nowrap overflow-hidden">
          <Col lg={2} md={4} sm={12} className="cl-white">
            <span className="fw-400 cl-white fs-26 f-kanit text-center  text-uppercase">
              {" "}
              Element
            </span>
          </Col>
          <Col lg={2} md={4} sm={12} className="cl-white text-center">
            <span className="fw-400 cl-white fs-26 f-kanit  text-uppercase">
              {" "}
              Digital Solution
            </span>
          </Col>
          <Col lg={2} md={4} sm={12} className="cl-white text-center">
            <span className="fw-400 cl-white fs-26 f-kanit  text-uppercase">
              Strategy
            </span>
          </Col>
          <Col lg={2} md={4} sm={12} className="cl-white text-center">
            <span className="fw-400 cl-white fs-26 f-kanit  text-uppercase">
              {" "}
              Branding
            </span>
          </Col>
          <Col lg={2} md={4} sm={12} className="cl-white text-center">
            <span className="fw-400 cl-white fs-26  text-uppercase">
              {" "}
              Agency
            </span>
          </Col>
        </Row>
      </div>

      <div className="swiper-2 ">
        <Row className="justify-content-center  mx-0  flex-nowrap overflow-hidden">
          <Col lg={2} md={4} sm={12} className="cl-white">
            <span className="fw-400 cl-white fs-26 f-kanit text-center  text-uppercase">
              {" "}
              Element
            </span>
          </Col>
          <Col lg={2} md={4} sm={12} className="cl-white text-center">
            <span className="fw-400 cl-white fs-26 f-kanit  text-uppercase">
              {" "}
              Digital Solution
            </span>
          </Col>
          <Col lg={2} md={4} sm={12} className="cl-white text-center">
            <span className="fw-400 cl-white fs-26 f-kanit  text-uppercase">
              Strategy
            </span>
          </Col>
          <Col lg={2} md={4} sm={12} className="cl-white text-center">
            <span className="fw-400 cl-white fs-26 f-kanit  text-uppercase">
              {" "}
              Branding
            </span>
          </Col>
          <Col lg={2} md={4} sm={12} className="cl-white text-center">
            <span className="fw-400 cl-white fs-26  text-uppercase">
              {" "}
              Agency
            </span>
          </Col>
        </Row>
      </div>

      <div className="about-area">
        <Container className="pt-140 pb-130 position-relative ">
          <Row className="mx-0">
            <Col>
              <div className="about-maintitle">
                <div className="about-title   position-relative">
                  {" "}
                  <div className="cl-white fs-60 f-kanit fw-500">
                    {" "}
                    We are geared towards versatility
                  </div>
                  <div className="cl-white fs-60 f-kanit fw-500">
                    {" "}
                    and offering you efficiency and
                  </div>
                  <div className="cl-white fs-60 f-kanit fw-500">
                    {" "}
                    best quality services at every
                  </div>
                  <div className="cl-white fs-60 f-kanit fw-500">
                    {" "}
                    step.
                  </div>{" "}
                </div>
              </div>
            </Col>
          </Row>

          <Row className="align-items-center  gx-5 mx-0">
            <Col md={4} sm={12} className="">
              <div className="about-left-img  ">
                <img src="images/about-left.png  " className="w-100"></img>
              </div>
            </Col>
            <Col md={8} className="p-40">
              <Row className="mx-0 flex-md-column-reverse   flex-lg-row">
                <Col md={9} sm={12}>
                  <div className="about-description p-30  ">
                    <p>
                      <div className="fs-18 cl-gray2 fw-400 f-kanit">
                        At Pixarsart our aim is to create the most effective{" "}
                      </div>
                      <div className="fs-18 cl-gray2 fw-400 f-kanit">
                        online presence for your brand. We use the latest{" "}
                      </div>
                      <div className="fs-18 cl-gray2 fw-400 f-kanit">
                        technology to provide you with the most intuitive{" "}
                      </div>
                      <div className="fs-18 cl-gray2 fw-400 f-kanit">
                        solutions to cater to all your business needs. We want{" "}
                      </div>
                      <div className="fs-18 cl-gray2 fw-400 f-kanit">
                        are committed to providing creative and innovative{" "}
                      </div>
                      <div className="fs-18 cl-gray2 fw-400 f-kanit">
                        Backend Development, Digital Product Development,{" "}
                      </div>
                      <div className="fs-18 cl-gray2 fw-400 f-kanit">
                        Server Management, Continuous Integration and{" "}
                      </div>
                      <div className="fs-18 cl-gray2 fw-400 f-kanit">
                        eCommerce solutions. We are progressively working{" "}
                      </div>
                      <div className="fs-18 cl-gray2 fw-400 f-kanit">
                        with clients with legacy systems as well as progressive{" "}
                      </div>
                      <div className="fs-18 cl-gray2 fw-400 f-kanit">
                        technologies includingVR and AR.{" "}
                      </div>
                    </p>
                  </div>
                </Col>
                <Col md={3} sm={12} className="p-40  position-relative">
                  <divn className=" about-right-image-section-main">
                    <div className="about-right-img">
                      <img src="images/about-right.png"></img>
                    </div>

                    <div className="shape">
                      <div className="primary"></div>
                      <div className="secondary"></div>
                    </div>
                  </divn>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SwiperSlider;
