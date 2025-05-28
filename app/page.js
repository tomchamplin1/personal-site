"use client";

import React from "react";
import "./index.css";
import HomeAbout from "@/components/HomeAbout.js";
import Experience from "@/components/Experience.js";
import Projects from "@/components/Projects.js";

export default async function Index() {
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
