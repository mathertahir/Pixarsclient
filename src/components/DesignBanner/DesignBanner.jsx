import React from "react";
import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./design-banner.css";

const DesignBanner = () => {
  // const parentRef = useRef(null);
  // const random = useRef(null);
  const elementRef = useRef(null);

  useEffect(() => {
    animateSequence();
  }, []);

  function animateSequence() {
    const element = elementRef.current;
    if (element) {
      const text = element.textContent.trim();
      let html = "";
      let delay = 0;
      for (let i = 0; i < text.length; i++) {
        if (text[i] !== " ") {
          html += `<span style="animation-delay:${delay}ms; -moz-animation-delay:${delay}ms; -webkit-animation-delay:${delay}ms;">${text[i]}</span>`;
          delay += 100;
        } else {
          html += " ";
        }
      }
      element.innerHTML = html;
    }
  }

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
                      <i className="cl-white  arrow2"></i>
                    </span>
                  </a>
                </div>

                <div className="title-wrapper   ">
                  <h2 class="loading-text  fs-110   cl-white f-500 f-kanit position-relative ">
                    <div
                      class="cssanimation           random     leFadeInLeft      fs-110   cl-white f-500"
                      ref={elementRef}
                    >
                      We Create Unique & digital experiences globally
                    </div>

                    <p className="title-subheading cl-white char">
                      <div className="f-kanit ">
                        digitl design agency studio
                      </div>
                    </p>
                  </h2>

                  {/* <div className="">
                    <p className="title-subheading cl-white">
                      <div className="f-kanit">digitl design agency studio</div>
                    </p>
                  </div> */}
                </div>

                <div className="arrow-section-main  ">
                  <div>
                    <img src="images/arrow-down.png"></img>
                  </div>
                  <div className="price">
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
