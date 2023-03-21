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

const App = () => {
  return (
    <div>
      <TopNav />
      <DesignBanner />
      <SwiperSlider />
      <SolutionSection />
    </div>
  );
};

export default App;
