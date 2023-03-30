import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { BsArrowUpRight } from "react-icons/bs";

import "./footer-section.css";

const FooterSection = () => {
  return (
    <div className="footer-main">
      <div className="footer-top   ">
        <Row className="mx-0 ">
          <Col className="px-0    ">
            <div className="footer-pic-container">
              <div className="footer-pic">
                {/* <img src="images/footer.jpg" className="footer-image "></img> */}
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="footer-inner-main  ">
        <div className="footer-inner ">
          <div className="w-120   container-fluid">
            <Row className="">
              <Col
                xl={4}
                lg={4}
                md={6}
                sm={7}
                className="pt-140 pb-130  d-flex justify-content-start justify-content-md-center "
              >
                <div className="desc-section-main">
                  <div className="footer-logo-section  pb-4">
                    <img src="images/Group-2.png" className="footer-img"></img>
                  </div>

                  <div className="pixarsart-desc ">
                    <p className="cl-gray2  fs-16 fw-400 ">
                      We are a fast growing full scale digital agency with
                      multiple Certifications and Partnerships. Our team is
                      proud to be featured in multiple publications globally.
                    </p>
                  </div>

                  <div className="footer-copywrite ">
                    <p className="cl-gray2 f-kanit fs-16 fw-400  copywrite-data  ">
                      All Rights Reserved © 2021, Design & Developed By:
                      Pixarsart
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl={2} lg={2} md={3} sm={5} className="pt-140  pb-130">
                <h2 className="fs-20 fw-600 f-kanit cl-white ">Informtion</h2>
                <ul className="footer-link pt-2">
                  <li className="fs-16 fw-400 cl-gray2 pt-1 mb-12  f-kanit">
                    About Company
                  </li>
                  <li className="fs-16 fw-400 cl-gray2 pt-1 mb-12  f-kanit">
                    Case Study
                  </li>
                  <li className="fs-16 fw-400 cl-gray2 pt-1 mb-12  f-kanit">
                    Our Careers
                  </li>
                  <li className="fs-16 fw-400 cl-gray2 pt-1 mb-12 f-kanit">
                    Blog
                  </li>

                  <li className="fs-16 fw-400 cl-gray2 pt-1 mb-12 f-kanit">
                    Contact Us
                  </li>
                </ul>
              </Col>
              <Col xl={3} lg={3} md={3} sm={3} className="pt-140 pb-130">
                <h2 className="fs-20 fw-600 f-kanit cl-white ">Contact Us</h2>
                <ul className="footer-link pt-2">
                  <li className="fs-16 fw-400 cl-gray2 pt-1 mb-12  f-kanit">
                    100 N Howard St STE R, Spokane, Washington, 99201-0508,
                    United States
                  </li>
                  <li className="fs-16 fw-400 cl-gray2 pt-1 mb-12  f-kanit">
                    Info@Pixarsart.com
                  </li>
                </ul>
              </Col>

              <Col
                xl={3}
                lg={3}
                md={12}
                className="mind-section-main  pt-140  pb-130"
              >
                <div className="mind-section-main  ">
                  <h2 className="cl-white fw-400 f-kanit  mind-title fs-36 text-center ">
                    Have a project in your mind?
                  </h2>

                  <div className="btn-cta  pt-3  pb-5 ">
                    <a className="cl-white  btn-secondary">
                      Contact us
                      <BsArrowUpRight className="cl-white  arrow-sign" />
                    </a>
                  </div>

                  <div className="contact-time  fs-18 fw-500  cl-white f-kanit text-center  pb-2">
                    {" "}
                    02:00 PM - 11:00 PM
                  </div>
                  <div className="contact-day  cl-gray2 fw-400 f-kanit text-center">
                    Monday - Friday
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="copywrite-main">
          <Container>
            <Row>
              <Col xl={9} lg={9} sm={12}>
                <div className="footer-copywrite  ">
                  <p className="cl-gray2 f-kanit fs-16 fw-400  copywrite-data  ">
                    All Rights Reserved © 2021, Design & Developed By: Pixarsart
                  </p>
                </div>
              </Col>
              <Col xl={3} lg={3}>
                <div className="copy-write-right w-100"></div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
