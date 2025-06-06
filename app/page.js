"use client";

import React from "react";
import "./index.css";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { ThemeProvider } from "@/components/theme-provider";
import HomeAbout from "@/components/HomeAbout";

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
