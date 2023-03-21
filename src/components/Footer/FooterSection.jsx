import React from "react";
import { Col, Row, Container } from "react-bootstrap";

const FooterSection = () => {
  return (
    <div className="footer-main">
      <div className="footer-top">
        <Row className="mx-0 ">
          <Col className="px-0  text-end  ">
            <div className="footer-pic">
              <img src="images/footer.jpg" className="w-75"></img>
            </div>

            <div className="footer-inner">
              <Container>
                <Row>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FooterSection;
