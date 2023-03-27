import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";

import "./swiperstyle.css";
import { Container } from "react-bootstrap";
import "./slider.css";

const SwiperSlider = () => {
  return (
    <>
      <div className="swiper-1  overflow-hidden  ">
        <div class="Marquee mx-0 overflow-hidden ">
          <div class="Marquee-content">
            <div class="Marquee-tag   fw-400 cl-white fs-26 f-kanit text-center  text-uppercase">
              {" "}
              Element
            </div>
            <div class="Marquee-tag   fw-400 cl-white fs-26 f-kanit text-center  text-uppercase">
              {" "}
              Digital Solution
            </div>
            <div class="Marquee-tag   fw-400 cl-white fs-26 f-kanit text-center  text-uppercase">
              {" "}
              Strategy
            </div>
            <div class="Marquee-tag   fw-400 cl-white fs-26 f-kanit text-center  text-uppercase">
              {" "}
              Branding
            </div>
            <div class="Marquee-tag   fw-400 cl-white fs-26 f-kanit text-center  text-uppercase">
              {" "}
              Agency
            </div>

            <div class="Marquee-tag   fw-400 cl-white fs-26 f-kanit text-center  text-uppercase">
              {" "}
              Element
            </div>
            <div class="Marquee-tag   fw-400 cl-white fs-26 f-kanit text-center  text-uppercase">
              {" "}
              Digital Solution
            </div>
            <div class="Marquee-tag   fw-400 cl-white fs-26 f-kanit text-center  text-uppercase">
              {" "}
              Strategy
            </div>
            <div class="Marquee-tag   fw-400 cl-white fs-26 f-kanit text-center  text-uppercase">
              {" "}
              Branding
            </div>
            <div class="Marquee-tag   fw-400 cl-white fs-26 f-kanit text-center  text-uppercase">
              {" "}
              Agency
            </div>
          </div>
        </div>
      </div>

      <div className="swiper-2  overflow-hidden position-relative ">
        <div class="marqueeright  mx-0 overflow-hidden ">
          <div class="marquee-right-content">
            <div class="Marquee-right-tag  fw-400 cl-white fs-26 f-kanit text-center  text-uppercase">
              {" "}
              Element
            </div>
            <div class="Marquee-right-tag  fw-400 cl-white fs-26 f-kanit text-center  text-uppercase">
              {" "}
              Digital Solution
            </div>
            <div class="Marquee-right-tag  fw-400 cl-white fs-26 f-kanit text-center  text-uppercase">
              {" "}
              Strategy
            </div>
            <div class="Marquee-right-tag  fw-400 cl-white fs-26 f-kanit text-center  text-uppercase">
              {" "}
              Branding
            </div>
            <div class="Marquee-right-tag   fw-400 cl-white fs-26 f-kanit text-center  text-uppercase">
              {" "}
              Agency
            </div>

            <div class="Marquee-right-tag  fw-400 cl-white fs-26 f-kanit text-center  text-uppercase">
              {" "}
              Element
            </div>
            <div class="Marquee-right-tag  fw-400 cl-white fs-26 f-kanit text-center  text-uppercase">
              {" "}
              Digital Solution
            </div>
            <div class="Marquee-right-tag  fw-400 cl-white fs-26 f-kanit text-center  text-uppercase">
              {" "}
              Strategy
            </div>
            <div class="Marquee-right-tag  fw-400 cl-white fs-26 f-kanit text-center  text-uppercase">
              {" "}
              Branding
            </div>
            <div class="Marquee-right-tag   fw-400 cl-white fs-26 f-kanit text-center  text-uppercase">
              {" "}
              Agency
            </div>
          </div>
        </div>
      </div>

      <div className="about-area">
        <Container className="pt-140 pb-130 position-relative ">
          <Row className="mx-0">
            <Col>
              <div className="about-maintitle">
                <div className="about-title   position-relative   ">
                  {" "}
                  <div className="cl-white fs-60 f-kanit fw-500  about-desc-data first">
                    {" "}
                    We are geared towards versatility
                  </div>
                  <div className="cl-white fs-60 f-kanit fw-500    about-desc-data second">
                    {" "}
                    and offering you efficiency and
                  </div>
                  <div className="cl-white fs-60 f-kanit fw-500  about-desc-data  third">
                    {" "}
                    best quality services at every
                  </div>
                  <div className="cl-white fs-60 f-kanit fw-500   about-desc-data  fourth">
                    {" "}
                    step.
                  </div>{" "}
                </div>
              </div>
            </Col>
          </Row>

          <Row className="  gx-5 mx-0">
            <Col md={4} sm={12} className="align-items-center">
              <div className="parallax-container">
                {" "}
                <div className="about-left-img  ">
                  <div className="left-image-section"></div>
                </div>
              </div>
            </Col>
            <Col md={8} className="p-40">
              <Row className="mx-0 flex-md-column-reverse   flex-lg-row">
                <Col md={9} sm={12}>
                  <div className="about-description p-30  ">
                    <p className="">
                      <div className="fs-18 cl-gray2 fw-400 f-kanit    first">
                        At Pixarsart our aim is to create the most effective{" "}
                      </div>
                      <div className="fs-18 cl-gray2 fw-400 f-kanit  second">
                        online presence for your brand. We use the latest{" "}
                      </div>
                      <div className="fs-18 cl-gray2 fw-400 f-kanit   third">
                        technology to provide you with the most intuitive{" "}
                      </div>
                      <div className="fs-18 cl-gray2 fw-400 f-kanit   fourth">
                        solutions to cater to all your business needs. We want{" "}
                      </div>
                      <div className="fs-18 cl-gray2 fw-400 f-kanit  fifth">
                        are committed to providing creative and innovative{" "}
                      </div>
                      <div className="fs-18 cl-gray2 fw-400 f-kanit  sixth">
                        Backend Development, Digital Product Development,{" "}
                      </div>
                      <div className="fs-18 cl-gray2 fw-400 f-kanit  seventh">
                        Server Management, Continuous Integration and{" "}
                      </div>
                      <div className="fs-18 cl-gray2 fw-400 f-kanit  eighth">
                        eCommerce solutions. We are progressively working{" "}
                      </div>
                      <div className="fs-18 cl-gray2 fw-400 f-kanit  ninth">
                        with clients with legacy systems as well as progressive{" "}
                      </div>
                      <div className="fs-18 cl-gray2 fw-400 f-kanit  tenth">
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
