import React from "react";
import Marquee from "react-fast-marquee";
import "./Portfolio.css";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Portfolio = () => {
  const [backgroundImage, setBackgroundImage] = useState("images/view2.jpg");
  const handleLinkHover = (image) => {
    setBackgroundImage(image);
  };

  const handleLetterHover = (event) => {
    const target = event.target;
    const siblings = Array.from(target.parentElement.children);

    // Add different styles to the hover letter and its siblings
    siblings.forEach((sibling) => {
      if (sibling === target) {
        sibling.style.fontVariationSettings = "  'hght' 40, 'wdth' 1";
      } else if (siblings.indexOf(target) + 1 === siblings.indexOf(sibling)) {
        sibling.style.fontVariationSettings = "  'hght' 35, 'wdth' 1";
      } else if (siblings.indexOf(target) + 2 === siblings.indexOf(sibling)) {
        sibling.style.fontVariationSettings = "  'hght' 30, 'wdth' 1";
      } else if (siblings.indexOf(target) + 3 === siblings.indexOf(sibling)) {
        sibling.style.fontVariationSettings = "  'hght' 25, 'wdth' 1";
      } else if (siblings.indexOf(target) - 1 === siblings.indexOf(sibling)) {
        sibling.style.fontVariationSettings = "  'hght' 35, 'wdth' 1";
      } else if (siblings.indexOf(target) - 2 === siblings.indexOf(sibling)) {
        sibling.style.fontVariationSettings = "  'hght' 30, 'wdth' 1";
      } else if (siblings.indexOf(target) - 3 === siblings.indexOf(sibling)) {
        sibling.style.fontVariationSettings = "  'hght' 25, 'wdth' 1";
      } else {
        sibling.style.fontVariationSettings = "  'hght' 1, 'wdth' 1";
      }
    });
  };

  const handleLetterLeave = (event) => {
    const siblings = Array.from(event.target.parentElement.children);

    // Reset the styles of all the letters
    siblings.forEach((sibling) => {
      sibling.style.fontVariationSettings = "  'hght' 1, 'wdth 1";
    });
  };

  return (
    <div
      className="portfolio-main   d-flex align-items-end"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Marquee pauseOnHover={true} speed={400} gradientWidth={0}>
        <div class="marquee__inner   d-flex" aria-hidden="true">
          <div
            className="f-tusker-varient  cl-white  mylinks p-5"
            onMouseEnter={() => {
              handleLinkHover("images/wars.png");
            }}
            // onMouseLeave={() => handleLinkHover("images/view2.jpg")}
          >
            {"Legend Of Galaxy".split("").map((char, index) => (
              <span
                key={index}
                onMouseEnter={handleLetterHover}
                onMouseLeave={handleLetterLeave}
                className="childletter"
              >
                {char}
              </span>
            ))}
          </div>
          <div
            className="f-tusker-varient cl-white mylinks  p-5"
            onMouseEnter={() => handleLinkHover("images/worldfourm.png")}
          >
            {"World Economic Fourm".split("").map((char, index) => (
              <span
                key={index}
                onMouseEnter={handleLetterHover}
                onMouseLeave={handleLetterLeave}
                className="childletter"
              >
                {char}
              </span>
            ))}
          </div>
          <div
            className="f-tusker-varient cl-white  mylinks p-5"
            onMouseEnter={() => handleLinkHover("images/margotcommunity.png")}
          >
            {"Margot Community".split("").map((char, index) => (
              <span
                key={index}
                onMouseEnter={handleLetterHover}
                onMouseLeave={handleLetterLeave}
                className="childletter"
              >
                {char}
              </span>
            ))}
          </div>
          <div
            className="f-tusker-varient  cl-white  mylinks p-5"
            onMouseEnter={() => handleLinkHover("images/hyprovebanner.png")}
          >
            {"Hyprov".split("").map((char, index) => (
              <span
                key={index}
                onMouseEnter={handleLetterHover}
                onMouseLeave={handleLetterLeave}
                className="childletter"
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Portfolio;
