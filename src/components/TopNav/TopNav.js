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

import "./top-nav.css";

const TopNav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                className="cl-white fs-16 fw-400 f-sansserif  nav-title  service "
              >
                SERVICE
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="cl-white fs-16 fw-400 f-sansserif nav-title "
              >
                OUR WORK
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="cl-white fs-16 fw-400 f-sansserif  nav-title"
              >
                OUR BLOG
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="cl-white fs-16 fw-400 f-sansserif  nav-title"
              >
                OUR CAREERS
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="cl-white fs-16 fw-400 f-sansserif nav-title "
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
                    <div className="offcanvas-body">
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
                              <a className="fw-400 cl-white fs-18  f-sansserif">
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
