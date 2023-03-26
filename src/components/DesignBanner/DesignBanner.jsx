import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./design-banner.css";
import { BsArrowUpRight } from "react-icons/bs";
import { useRef, useEffect } from "react";

const DesignBanner = () => {
  const parentRef = useRef(null);

  useEffect(() => {
    const children = parentRef.current.querySelectorAll(".char");
    for (let i = 0; i < children.length; i++) {
      children[i].style.animationDelay = -40000 + i * 1000 + "ms";
    }
  }, []);

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

                <div className="title-wrapper   ">
                  <h2
                    class="loading-text  fs-110   cl-white f-500 f-kanit position-relative "
                    ref={parentRef}
                  >
                    <span class="char">W</span>
                    <span class="char mr-20">e</span>
                    <span class="char">C</span>
                    <span class="char">r</span>
                    <span class="char">e</span>
                    <span class="char">a</span>
                    <span class="char">t</span>
                    <span class="char mr-20">e</span>
                    <span class="char">U</span>
                    <span class="char">n</span>
                    <span class="char">i</span>
                    <span class="char">q</span>
                    <span class="char">u</span>
                    <span class="char mr-20">e</span>
                    <span class="char mr-20">&</span>
                    <span class="char">d</span>
                    <span class="char">i</span>
                    <span class="char">g</span>
                    <span class="char">i</span>
                    <span class="char">t</span>
                    <span class="char">a</span>
                    <span class="char mr-20">l</span>
                    <span class="char">e</span>
                    <span class="char">x</span>
                    <span class="char">p</span>
                    <span class="char">e</span>
                    <span class="char">r</span>
                    <span class="char">i</span>
                    <span class="char">e</span>
                    <span class="char">n</span>
                    <span class="char">c</span>
                    <span class="char">e</span>
                    <span class="char mr-20">s</span>
                    <span class="char">g</span>
                    <span class="char">l</span>
                    <span class="char">b</span>
                    <span class="char">a</span>
                    <span class="char">l</span>
                    <span class="char">l</span>
                    <span class="char">y</span>

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
