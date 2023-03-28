import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Button } from "react-bootstrap";
import "./App.css";
import TopNav from "./components/TopNav/TopNav";

import "./App.css";
import DesignBanner from "./components/DesignBanner/DesignBanner";
import SwiperSlider from "./components/Swiper/SwiperSlider";
import SolutionSection from "./components/SolutionSection/SolutionSection";
import FooterSection from "./components/Footer/FooterSection";
import { useState, useEffect } from "react";
import gsap from "gsap";
const App = () => {
  useEffect(() => {
    const mouseCursor = document.querySelector(".cursor1");
    const links = document.querySelectorAll("a");

    function cursor(e) {
      gsap.to(mouseCursor, 0.4, {
        x: e.clientX,
        y: e.clientY,
      });
    }

    links.forEach((link) => {
      link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
        gsap.to(mouseCursor, 0.4, {
          scale: 1,
        });
      });

      link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");
        gsap.to(mouseCursor, 0.4, {
          scale: 2,
        });
      });
    });

    window.addEventListener("mousemove", cursor);

    return () => {
      window.removeEventListener("mousemove", cursor);
    };
  }, []);

  useEffect(() => {
    const mouseCursor = document.querySelector(".cursor2");
    const links = document.querySelectorAll("a");

    function cursor(e) {
      gsap.to(mouseCursor, 0.4, {
        x: e.clientX,
        y: e.clientY,
      });
    }

    links.forEach((link) => {
      link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
        gsap.to(mouseCursor, 0.4, {
          scale: 1,
        });
      });

      link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");
        gsap.to(mouseCursor, 0.4, {
          scale: 2,
        });
      });
    });

    window.addEventListener("mousemove", cursor);

    return () => {
      window.removeEventListener("mousemove", cursor);
    };
  }, []);

  return (
    <div>
      <div className="cursor1"></div>
      <div className="cursor2"></div>

      <TopNav />
      <DesignBanner />
      <SwiperSlider />
      <SolutionSection />
      <FooterSection />
    </div>
  );
};

export default App;
