"use client";

import React from "react";
import "./index.css";
import HomeAbout from "@/app/components/HomeAbout";
import Experience from "@/app/components/Experience";
import Projects from "@/app/components/Projects";

export default function Index() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <div className="App">
        <div className="bg-black min-h-screen ">
          <HomeAbout />
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  );
}
