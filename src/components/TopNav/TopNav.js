import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import OffcanvasBody from "react-bootstrap/OffcanvasBody";
import { useEffect, useRef } from "react";
import "./roundup.scss";
import { gsap, Power4, TimelineMax } from "gsap";
import "./top-nav.css";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { AiOutlineSearch } from "react-icons/ai";

import { AiOutlineClose } from "react-icons/ai";
import InputGroup from "react-bootstrap/InputGroup";

const TopNav = ({ text }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const elementRef = useRef(null);

  useEffect(() => {
    const letterWrapClass = "letter-wrap";
    const letterWrapElements = document.getElementsByClassName(letterWrapClass);

    [...letterWrapElements].forEach((el) => {
      letterWrap(el, letterWrapClass);
      letterAnimation(el, letterWrapClass);
    });
  }, []);

  function letterWrap(el, cls) {
    const words = el.textContent.split(" ");
    const letters = [];

    cls = cls || "letter-wrap";

    words.forEach((word) => {
      let html = "";
      for (var letter in word) {
        html += `
          <span class="${cls}__char">
            <span class="${cls}__char-inner" data-letter="${word[letter]}">
              ${word[letter]}
            </span>
          </span>
        `;
      }

      let wrappedWords = `<span class="${cls}__word">${html}</span>`;
      letters.push(wrappedWords);
    });

    return (el.innerHTML = letters.join(" "));
  }

  function letterAnimation(el, cls) {
    const tl = new TimelineMax({ paused: true });
    const characters = el.querySelectorAll(`.${cls}__char-inner`);
    const duration = el.hasAttribute("data-duration")
      ? el.dataset.duration
      : 0.1;
    const stagger = el.hasAttribute("data-stagger") ? el.dataset.stagger : 0.01;

    el.animation = tl.staggerTo(
      characters,
      duration,
      {
        y: "-100%",
        ease: Power4.easeOut,
      },
      stagger
    );

    el.addEventListener("mouseenter", (event) =>
      event.currentTarget.animation.play()
    );
    el.addEventListener("mouseout", (event) => el.animation.reverse());
  }

  return (
    <div>
      <div className="container-fluid  header-main ">
        <Navbar bg="trasparent">
          <Navbar.Brand href="#home">
            <img
              src="images/Logo-5.png"
              width="64"
              height="64"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ms-auto  nav-middle-area">
              <Nav.Link
                href="#home"
                className="cl-white fs-16 fw-400 f-sansserif  nav-title    letter-wrap  d-flex  "
                // data-duration="0.3"
                // data-stagger="0.2"
                data-duration="0.4"
                data-stagger="0.016"
                ref={elementRef}
              >
                Service
                {/* <span className="roundedup">S</span>
                <span>E</span>
                <span>R</span>
                <span>V</span>
                <span>I</span>
                <span>C</span>
                <span>E</span> */}
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="cl-white fs-16 fw-400 f-sansserif nav-title  letter-wrap d-flex  "
                data-duration="0.4"
                data-stagger="0.016"
              >
                OUR WORK
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="cl-white fs-16 fw-400 f-sansserif  nav-title   letter-wrap d-flex"
                data-duration="0.4"
                data-stagger="0.016"
              >
                OUR BLOG
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="cl-white fs-16 fw-400 f-sansserif  nav-title   letter-wrap d-flex"
                data-duration="0.4"
                data-stagger="0.016"
              >
                OUR CAREERS
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="cl-white fs-16 fw-400 f-sansserif nav-title  letter-wrap d-flex "
                data-duration="0.4"
                data-stagger="0.025"
              >
                CONTACT US
              </Nav.Link>
            </Nav>

            <Nav className="ms-auto">
              <Button variant="primary" className="btn-b" onClick={handleShow}>
                {<img src="images/menu-white.svg" className="h-22"></img>}
              </Button>

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Body>
                  <div className="offcanvas-area">
                    <div className="offcanvas-body  position-relative">
                      <div className="offcanvas-left">
                        <div className="offcanvas-logo">
                          <a className="offcanvas-left-logo">
                            {" "}
                            {<img src="images/Logo-5.png"></img>}{" "}
                          </a>
                        </div>
                        <div className="offcanvas-links">
                          <ul>
                            <li className="menu-item">
                              <a className="fw-400 cl-white fs-18  f-sansserif   d-flex ">
                                Service
                              </a>
                            </li>

                            <li className="menu-item">
                              <a className="fw-400 cl-white fs-18  f-sansserif">
                                Our Work
                              </a>
                            </li>
                            <li className="menu-item">
                              <a className="fw-400 cl-white fs-18  f-sansserif">
                                Our Blog
                              </a>
                            </li>
                            <li className="menu-item">
                              <a className="fw-400 cl-white fs-18  f-sansserif">
                                Our Careers
                              </a>
                            </li>
                            <li className="menu-item">
                              <a className="fw-400 cl-white fs-18  f-sansserif">
                                Contct Us
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="offcanvas-mid">
                        <div className="cl-white">
                          <div className="offcanvas-menu   ">
                            <div className="mid-menu  pt-3 pb-3">
                              <a
                                href="/"
                                className="cl-white  fs-48 text-decoration-none  text-uppercase   f-kanit  letter-wrap    "
                                data-duration="0.4"
                                data-stagger="0.016"
                              >
                                {" "}
                                Services
                              </a>
                            </div>

                            <div className="mid-menu pt-3  pb-3 ">
                              <a
                                href="/"
                                className="cl-white  fs-48 text-decoration-none  text-uppercase f-kanit"
                              >
                                {" "}
                                Our Work
                              </a>
                            </div>

                            <div className="mid-menu pt-3  pb-3 ">
                              <a
                                href="/"
                                className="cl-white  fs-48 text-decoration-none  text-uppercase f-kanit"
                              >
                                {" "}
                                Blog
                              </a>
                            </div>

                            <div className="mid-menu pt-3 pb-3  ">
                              <a
                                href="/"
                                className="cl-white  fs-48 text-decoration-none  text-uppercase f-kanit"
                              >
                                {" "}
                                Careers
                              </a>
                            </div>
                            <div className="mid-menu pt-3  pb-3  last-child ">
                              <a
                                href="/"
                                className="cl-white  fs-48 text-decoration-none  text-uppercase f-kanit"
                              >
                                {" "}
                                Contact us
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="offcanvas-right">
                        <div className="offcanvas-search">
                          <InputGroup className="mb-3 search-box">
                            <Form.Control
                              placeholder="Search Keyword"
                              aria-label="Recipient's username"
                              aria-describedby="basic-addon2"
                              className="search-field"
                            />
                            <Button
                              variant="outline-secondary"
                              id="button-addon2"
                              className="search-icon"
                            >
                              <AiOutlineSearch className="ai-searchicon" />
                            </Button>
                          </InputGroup>
                        </div>
                      </div>
                      <div>
                        <a
                          href="/"
                          className="fs-48 cl-white textdecoration-none  close-icon d-flex justify-content-center align-items-center  text-end "
                        >
                          <AiOutlineClose />
                        </a>
                      </div>
                    </div>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default TopNav;
