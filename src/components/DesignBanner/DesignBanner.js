import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./design-banner.css";

const DesignBanner = () => {
  return (
    <>
      <div className="design-banner-main">
        <Container>
          <Row>
            <Col xxl={12}>
              <div className="hero-top-links position-relative">
                <div className="link-data">
                  <a className="cl-white">
                    {" "}
                    Strategy, Design, Solution Development{" "}
                  </a>
                  <span>
                    <i class="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DesignBanner;
