import { React } from "react";
import "../index.css";
import HomeAbout from "../components/HomeAbout";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="bg-black min-h-screen ">
      <HomeAbout />
      <Experience />
      <Projects />
    </div>
  );
}
