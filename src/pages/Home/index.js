import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Work from "./Work";
import Project from "./Project";
import Socials from "./Socials";
import Defaced from "./Defaced";
import Footer from "./Footer";
// import ScrollEffect from "../../components/ScrollEffect";

function Home() {
  return (
    <div className="w-full bg-customBg h-full flex flex-col justify-center items-center overflow-hidden relative">
      <div className="absolute inset-0 bg-noise-full opacity-10 pointer-events-none z-50"></div>
      <Header />
      <Intro />
      <About />
      <Work />
      <Project />
      <Defaced />
      <Socials />
      {/* <ScrollEffect /> */}
      <Footer />
    </div>
  );
}

export default Home;
