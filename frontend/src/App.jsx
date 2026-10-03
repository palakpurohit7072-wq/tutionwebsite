import { useState } from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Oursubjects from "./Component/Oursubjects";
import Aboutus from "./Component/Aboutus";
import Whychooseus from "./Component/Whychooseus";
import Testimonial from "./Component/Testimonial";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Oursubjects />
      <Aboutus />
      <Whychooseus />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
