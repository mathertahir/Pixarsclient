import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BsArrowUpRight } from "react-icons/bs";
import "./solution.css";

const SolutionSection = () => {
  return (
    <div className="solution-main">
      <Container>
        <Row className="mx-0 pt-5 pb-5  align-items-start align-items-md-center g-3   ">
          <Col md={4}>
            <div className="fs-18 f-kanit fw-400 cl-white ">Service</div>
            <h2>
              <div className="fs-60 fw-500 f-kanit cl-white ">Solution We</div>
              <div className="fs-60 fw-500 f-kanit cl-white ">Provided</div>
            </h2>
          </Col>
          <Col md={5}>
            <span className="fs-20 fw-400 cl-white ">
              You have come to the Right Place PixarsArt is a Unified Platform
              for all things of Web & Mobile
            </span>
          </Col>
          <Col
            md={3}
            className="d-flex   justify-content-start justify-content-md-end"
          >
            <div>
              <a className="cl-white  btn-secondary">
                Contact us
                <BsArrowUpRight className="cl-white  arrow-sign" />
              </a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xl={4} lg={0}>
            <div className="img-wrapper  w-100   position-relative ">
              <img src="images/wrap1.png" className="transit-images   active" />{" "}
              <span className="badge-screen"></span>
            </div>
          </Col>

          <Col xl={8} lg={12} md={12}>
            <div className="service-list">
              <a className="service-area-main text-decoration-none">
                <div>
                  <span className="fs-28 f-kanit fw-400 cl-white  current ">
                    01
                  </span>
                </div>
                <div>
                  <span className="fs-28 f-kanit fw-400 cl-white ">
                    search Engine <br /> Optimization
                  </span>
                </div>

                <div className="service-text">
                  <p className="fs-16 f-kanit fw-400 cl-gray2 ">
                    Planning and sketching Modern and unique design practically
                    point of view, it risks not meeting the huge expectations .
                  </p>
                </div>

                <div className="fs-48  text-end">
                  <BsArrowUpRight className="cl-white  f-28" />
                </div>
              </a>

              <a className="service-area-main text-decoration-none">
                <div>
                  <span className="fs-28 f-kanit fw-400 cl-white ">01</span>
                </div>
                <div>
                  <span className="fs-28 f-kanit fw-400 cl-white ">
                    search Engine <br /> Optimization
                  </span>
                </div>

                <div className="service-text">
                  <p className="fs-16 f-kanit fw-400 cl-gray2 ">
                    Planning and sketching Modern and unique design practically
                    point of view, it risks not meeting the huge expectations .
                  </p>
                </div>

                <div className="fs-48  text-end">
                  <BsArrowUpRight className="cl-white  f-28" />
                </div>
              </a>

              <a className="service-area-main text-decoration-none">
                <div>
                  <span className="fs-28 f-kanit fw-400 cl-white ">01</span>
                </div>
                <div>
                  <span className="fs-28 f-kanit fw-400 cl-white ">
                    search Engine <br /> Optimization
                  </span>
                </div>

                <div className="service-text">
                  <p className="fs-16 f-kanit fw-400 cl-gray2 ">
                    Planning and sketching Modern and unique design practically
                    point of view, it risks not meeting the huge expectations .
                  </p>
                </div>

                <div className="fs-48  text-end">
                  <BsArrowUpRight className="cl-white  f-28" />
                </div>
              </a>

              <a className="service-area-main text-decoration-none">
                <div>
                  <span className="fs-28 f-kanit fw-400 cl-white ">01</span>
                </div>
                <div>
                  <span className="fs-28 f-kanit fw-400 cl-white ">
                    search Engine <br /> Optimization
                  </span>
                </div>

                <div className="service-text">
                  <p className="fs-16 f-kanit fw-400 cl-gray2 ">
                    Planning and sketching Modern and unique design practically
                    point of view, it risks not meeting the huge expectations .
                  </p>
                </div>

                <div className="fs-48  text-end">
                  <BsArrowUpRight className="cl-white  f-28" />
                </div>
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="about-2-main  pt-130 pb-110">
        <Container>
          <Row className="mx-0  pb-3">
            <Col sm={12}>
              <div>
                <h2 className="cl-white fs-60 f-kanit">Who we are? </h2>
              </div>
            </Col>
          </Row>

          <Row className="mx-0 ">
            <Col sm={8} className="justify-content-center">
              <div className="d-flex justify-content-start   justify-content-sm-end">
                <p className="cl-gray2 fs-18 fw-400 f-kanit">
                  <div>
                    We value you and your brand. Analysis of your goals is{" "}
                  </div>
                  <div>
                    a primary step in our work process. We want to get to{" "}
                  </div>
                  <div>know you and your business goals and then </div>
                  <div>
                    collaborate together to turn your ideas into reality.Our{" "}
                  </div>
                  <div>&nbsp;</div>

                  <div>
                    goal is to give your products the futuristic and present{" "}
                  </div>
                  <div>
                    edge to lead the way through. We partner with you in{" "}
                  </div>
                  <div>
                    idea generation and build the path towards success for{" "}
                  </div>
                  <div>
                    you and us. Our workYou get to work with some of the{" "}
                  </div>
                  <div>&nbsp;</div>
                  <div>most talented web developers, designers, creative </div>
                  <div>
                    thinkers and innovators in our team. Website designing{" "}
                  </div>
                  <div>and development catered just for you. </div>

                  <div>&nbsp;</div>
                </p>
              </div>
            </Col>
            <Col
              sm={4}
              className="d-flex justify-content-start  justify-content-sm-end"
            >
              <div>
                <a className="cl-white  btn-secondary">
                  Contact us
                  <BsArrowUpRight className="cl-white  arrow-sign" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SolutionSection;