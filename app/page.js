"use client";

import React from "react";
import "./index.css";
import Experience from "@/app/components/Experience";
import Projects from "@/app/components/Projects";
import { ThemeProvider } from "@/app/components/theme-provider";
import HomeAbout from "@/app/components/HomeAbout";

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
