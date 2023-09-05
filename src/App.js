import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
// import Blog from "./pages/Blog";
// import Post from "./pages/Post";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter forceRefresh={true}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<AboutUs />} exact />
          <Route path="/blog" element={<Blog />} exact />
          <Route path="/blog/:slug" element={<Post />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
