import { React } from "react";
import "../index.css";
// import Navbar from "../components/Navbar";
import HomeAbout from "../components/HomeAbout";
import Experience from "../components/Experience";

// import Showcase from "../components/Showcase";
// import CTA from "../components/CTA";
// import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-black min-h-screen ">
      {/* <Navbar /> */}
      <HomeAbout />
      <Experience />
      {/* <Showcase />
      <CTA />
      <Footer /> */}
    </div>
  );
}
