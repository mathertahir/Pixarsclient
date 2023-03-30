import React from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BsArrowUpRight } from "react-icons/bs";
import "./solution.css";

const SolutionSection = () => {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div className="solution-main">
      <Container>
        <Row className="mx-0 pt-5 pb-5  align-items-start align-items-md-center g-3    ">
          <Col md={4}>
            <div className="fs-18 f-kanit fw-400 cl-white  solution-anim  ">
              Service
            </div>
            <h2>
              <div className="fs-60 fw-500 f-kanit cl-white solution-anim  ">
                Solution We
              </div>
              <div className="fs-60 fw-500 f-kanit cl-white  solution-anim ">
                Provided
              </div>
            </h2>
          </Col>
          <Col md={5}>
            <span className="fs-20 fw-400 cl-white  solution-anim ">
              You have come to the Right Place PixarsArt is a Unified Platform
              for all things of Web & Mobile
            </span>
          </Col>
          <Col
            md={3}
            className="d-flex   justify-content-start justify-content-md-end"
          >
            <div className="btn-cta">
              <Button variant="outline-light  button-add position-relative">
                <a className="  btn-secondary">
                  <span className="btn-animate"></span>
                  Contact us
                  <BsArrowUpRight className="  arrow-sign" />
                </a>
              </Button>{" "}
            </div>
          </Col>
        </Row>

        <Row>
          <Col xl={4} lg={0}>
            <div className="img-wrapper  w-100   position-relative ">
              <img src="images/wrap1.png" className="transit-images   " />{" "}
              <img src="images/seo.jpg" className=" seo-image     " />{" "}
              <span className="badge-screen  "></span>
            </div>
          </Col>

          <Col xl={8} lg={12} md={12}>
            <div className="service-list ">
              <a className="service-area-main text-decoration-none fade-right-anim  ">
                <div className="service-item     position-relative ">
                  <div>
                    <span className="fs-28 f-kanit fw-400   service-count current ">
                      01
                    </span>
                  </div>
                  <div className="fade-to-right">
                    <span className="fs-28 f-kanit fw-400 service-title   ">
                      search Engine <br /> Optimization
                    </span>
                  </div>

                  <div className="service-text fade-to-right">
                    <p className="fs-16 f-kanit fw-400 service-text ">
                      Planning and sketching Modern and unique design
                      practically point of view, it risks not meeting the huge
                      expectations .
                    </p>
                  </div>

                  <div className=" service-arrow  position-relative fade-to-right ">
                    <p className="foreground">
                      <i className="my-arrow"></i>
                    </p>
                  </div>
                </div>
              </a>

              <a className="service-area-main text-decoration-none   ">
                <div className="service-item">
                  <div>
                    <span className="fs-28 f-kanit fw-400    service-count current ">
                      02
                    </span>
                  </div>
                  <div className="fade-to-right">
                    <span className="fs-28 f-kanit fw-400  service-title ">
                      search Engine <br /> Optimization
                    </span>
                  </div>

                  <div className="service-text fade-to-right">
                    <p className="fs-16 f-kanit fw-400 service-text">
                      Planning and sketching Modern and unique design
                      practically point of view, it risks not meeting the huge
                      expectations .
                    </p>
                  </div>

                  <div className=" service-arrow  position-relative fade-to-right ">
                    <p className="foreground">
                      <i className="my-arrow"></i>
                    </p>
                  </div>
                </div>
              </a>

              <a className="service-area-main text-decoration-none   ">
                <div className="service-item">
                  <div>
                    <span className="fs-28 f-kanit fw-400  service-count   current ">
                      03
                    </span>
                  </div>
                  <div className="fade-to-right">
                    <span className="fs-28 f-kanit fw-400   service-title  ">
                      search Engine <br /> Optimization
                    </span>
                  </div>

                  <div className="service-text fade-to-right">
                    <p className="fs-16 f-kanit fw-400 service-text ">
                      Planning and sketching Modern and unique design
                      practically point of view, it risks not meeting the huge
                      expectations .
                    </p>
                  </div>

                  <div className=" service-arrow  position-relative fade-to-right ">
                    <p className="foreground">
                      <i className="my-arrow"></i>
                    </p>
                  </div>
                </div>
              </a>

              <a className="service-area-main text-decoration-none   ">
                <div className="service-item">
                  <div>
                    <span className="fs-28 f-kanit fw-400  service-count current ">
                      04
                    </span>
                  </div>
                  <div className="fade-to-right">
                    <span className="fs-28 f-kanit fw-400  service-title ">
                      search Engine <br /> Optimization
                    </span>
                  </div>

                  <div className="service-text fade-to-right">
                    <p className="fs-16 f-kanit fw-400 service-text ">
                      Planning and sketching Modern and unique design
                      practically point of view, it risks not meeting the huge
                      expectations .
                    </p>
                  </div>

                  <div className=" service-arrow  position-relative  fade-to-right">
                    <p className="foreground">
                      <i className="my-arrow"></i>
                    </p>
                  </div>
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
                <h2 className="cl-white fs-60 f-kanit solution-anim">
                  Who we are?{" "}
                </h2>
              </div>
            </Col>
          </Row>

          <Row className="mx-0 ">
            <Col sm={8} className="justify-content-center">
              <div className="d-flex justify-content-start   justify-content-sm-end">
                <p className="cl-gray2 fs-18 fw-400 f-kanit">
                  <div className="solution-anim">
                    We value you and your brand. Analysis of your goals is{" "}
                  </div>
                  <div className="solution-anim">
                    a primary step in our work process. We want to get to{" "}
                  </div>
                  <div className="solution-anim">
                    know you and your business goals and then{" "}
                  </div>
                  <div className="solution-anim">
                    collaborate together to turn your ideas into reality.Our{" "}
                  </div>
                  <div>&nbsp;</div>

                  <div className="solution-anim">
                    goal is to give your products the futuristic and present{" "}
                  </div>
                  <div className="solution-anim">
                    edge to lead the way through. We partner with you in{" "}
                  </div>
                  <div className="solution-anim">
                    idea generation and build the path towards success for{" "}
                  </div>
                  <div className="solution-anim">
                    you and us. Our workYou get to work with some of the{" "}
                  </div>
                  <div>&nbsp;</div>
                  <div className="solution-anim">
                    most talented web developers, designers, creative{" "}
                  </div>
                  <div className="solution-anim">
                    thinkers and innovators in our team. Website designing{" "}
                  </div>
                  <div className="solution-anim">
                    and development catered just for you.{" "}
                  </div>

                  <div>&nbsp;</div>
                </p>
              </div>
            </Col>
            <Col
              sm={4}
              className="d-flex justify-content-start  justify-content-sm-end"
            >
              <div className="btn-cta">
                <Button variant="outline-light  button-add position-relative">
                  <a className="  btn-secondary">
                    <span className="btn-animate"></span>
                    Contact us
                    <BsArrowUpRight className=" arrow-sign" />
                  </a>
                </Button>{" "}
              </div>
            </Col>
          </Row>
        </Container>

        <div className="brands-section  pt-140 pb-130">
          <Container className="line1">
            <Row className="mx-0">
              <Col sm={12}>
                <div className="brands-title-wrapper  pb-60">
                  <h2 className="fs-18 fw-400 cl-white f-kanit">
                    Internation Brands
                  </h2>

                  <div className="brands-title">
                    <div className="fs-60 f-kanit fw-500 cl-white">
                      We are happy to work with global{" "}
                    </div>
                    <div className="fs-60 f-kanit fw-500 cl-white">
                      {" "}
                      largest brands{" "}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col sm={12}>
                <div className="brands-list-section">
                  <div className="brands-item">
                    <img src="images/9to5.png"></img>
                  </div>

                  <div className="brands-item">
                    <img src="images/9to5-google.png"></img>
                  </div>

                  <div className="brands-item">
                    <img src="images/Drive-Points.png"></img>
                  </div>
                  <div className="brands-item">
                    <img src="images/Legends-Galaxy.png"></img>
                  </div>
                  <div className="brands-item">
                    <img src="images/Walt-Disney.png"></img>
                  </div>
                  <div className="brands-item">
                    <img src="images/BBC-1.png"></img>
                  </div>
                  <div className="brands-item">
                    <img src="images/Star-Wars-1.png"></img>
                  </div>
                  <div className="brands-item">
                    <img src="images/Hyprov.png"></img>
                  </div>
                  <div className="brands-item">
                    <img src="images/Margot.png"></img>
                  </div>
                  <div className="brands-item">
                    <img src="images/World.png"></img>
                  </div>
                  <div className="brands-item">
                    <img src="images/Art.png"></img>
                  </div>
                  <div className="brands-item">
                    <img src="images/stanford.png"></img>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="cta-main ">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="cta-content  text-center">
                <p className="content-subtitle cl-white f-kanit">
                  Work With US
                </p>

                <div className="cta-title">
                  <div className="cl-white fs-50 f-kanit fw-500  first">
                    We would love to hear more{" "}
                  </div>
                  <div className="cl-white fs-50 f-kanit fw-500 second">
                    about your project
                  </div>
                </div>

                <div className="btn-cta  pt-3  bounce-top ">
                  <Button variant="outline-light  button-add position-relative">
                    <a className="  btn-secondary">
                      <span className="btn-animate  btn-pink  "></span>
                      Contact us
                      <BsArrowUpRight className="  arrow-sign" />
                    </a>
                  </Button>{" "}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SolutionSection;
