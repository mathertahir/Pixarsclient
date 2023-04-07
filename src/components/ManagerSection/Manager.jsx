import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Manager.css";
import { FaArrowRight } from "react-icons/fa";

import { FaArrowLeft } from "react-icons/fa";

const Manager = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="  position-relative   caraousel-section-main">
      <img src="images/laptopgallary.jpg" className="laptoppic"></img>
      <img src="images/sofa.jpg" className="coughpic"></img>

      <div className="Caraousel-area   d-flex  align-items-center   justify-content-center">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="carousel-main-container"
          indicators={false}
          nextLabel={"Next"}
          prevLabel={"Previous"}
          controls={false}
          touch={true}
          slide={true}
          interval={5000}
          nextIcon={<FaArrowRight />}
          prevIcon={<FaArrowLeft />}
        >
          <Carousel.Item>
            <Row className="align-items-end justify-content-center  mx-0">
              <Col xs={12}>
                <div className="  carousel-data   ">
                  <div className="caraousel-commas  cl-white fs-110  d-flex justify-content-center">
                    ❛❛
                  </div>
                  <div className=" fw-400 cl-black fs-kanit cl-white  description-section">
                    When we talk about Alts, we do not mean a typical business
                    partner, but rather a team that collaborates with us daily,
                    always there for us when we encounter difficulties and
                    celebrate achievements. We see in Alts our best ally for
                    success!
                  </div>
                  <div className="fs-18 cl-gray fw-400 text-uppercase  cl-white d-flex justify-content-center pt-5 ">
                    Maria D. Halk
                  </div>
                  <div className="designation   d-flex   justify-content-center pt-3">
                    Managing Director
                  </div>
                </div>

                <div className="d-flex justify-content-center pt-5  ">
                  <span
                    className="carousel-next cl-white mx-2"
                    onClick={() => handleSelect(index - 1)}
                    role="button"
                  >
                    <FaArrowLeft />
                  </span>

                  <span
                    className="carousel-previous cl-white mx-2"
                    onClick={() => handleSelect(index + 1)}
                    role="button"
                  >
                    <FaArrowRight />
                  </span>
                </div>
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row className="align-items-end justify-content-center  mx-0">
              <Col xs={12}>
                <div className="  carousel-data   ">
                  <div className="caraousel-commas  cl-white fs-110  d-flex justify-content-center">
                    ❛❛
                  </div>
                  <div className=" fw-400 cl-black fs-kanit cl-white  description-section">
                    When we talk about Alts, we do not mean a typical business
                    partner, but rather a team that collaborates with us daily,
                    always there for us when we encounter difficulties and
                    celebrate achievements. We see in Alts our best ally for
                    success!
                  </div>
                  <div className="fs-18 cl-gray fw-400 text-uppercase  cl-white d-flex justify-content-center pt-5 ">
                    Maria D. Halk
                  </div>
                  <div className="designation   d-flex   justify-content-center pt-3">
                    Managing Director
                  </div>
                </div>

                <div className="d-flex justify-content-center pt-5  ">
                  <span
                    className="carousel-next cl-white mx-2"
                    onClick={() => handleSelect(index - 1)}
                    role="button"
                  >
                    <FaArrowLeft />
                  </span>

                  <span
                    className="carousel-previous cl-white mx-2"
                    onClick={() => handleSelect(index + 1)}
                    role="button"
                  >
                    <FaArrowRight />
                  </span>
                </div>
              </Col>
            </Row>
          </Carousel.Item>

          {/* <Carousel.Item>
            <Row className="align-items-end justify-content-center  mx-0">
              <Col xs={8}>
                <div className="  carousel-data   ">
                  <div className="caraousel-commas  cl-white fs-110  d-flex justify-content-center">
                    ❛❛
                  </div>
                  <div className=" fw-400 cl-black fs-kanit cl-white  description-section">
                    When we talk about Alts, we do not mean a typical business
                    partner, but rather a team that collaborates with us daily,
                    always there for us when we encounter difficulties and
                    celebrate achievements. We see in Alts our best ally for
                    success!
                  </div>
                  <div className="fs-18 cl-gray fw-400 text-uppercase  cl-white d-flex justify-content-center pt-5 ">
                    Maria D. Halk
                  </div>
                  <div className="designation   d-flex   justify-content-center pt-3">
                    Managing Director
                  </div>
                </div>

                <div className="d-flex justify-content-center pt-5">
                  <span
                    className="carousel-control-prev-icon"
                    onClick={() => handleSelect(index - 1)}
                    role="button"
                  />

                  <span
                    className="carousel-control-next-icon"
                    onClick={() => handleSelect(index + 1)}
                    role="button"
                  />
                </div>
              </Col>
            </Row>
          </Carousel.Item> */}
        </Carousel>
      </div>

      <img src="images/calling.jpg" className="calling"></img>
      <img src="images/bros.jpg" className="bros"></img>
      <img src="images/mapdisplay.jpg" className="mapdisplay"></img>
      <img src="images/map.jpg" className="map"></img>
    </div>
  );
};

export default Manager;
