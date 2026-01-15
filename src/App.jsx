import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./pages/blogs/Blog";
import About from "./pages/About";
import Home from "./pages";
import DetailBlog from "./pages/blogs/DetailBlog";
import ErrorPage from "./pages/ErrorPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Authors from "./pages/authors/Authors";
import PortalList from "./pages/portals/PortalList";
import DetailPortal from "./pages/portals/DetailPortal";
import React from "react";

function App() {
  return (
    <div style={{ background: "#f5f5f5" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Blog />} />
          <Route path="/posts/:id" element={<DetailBlog />} />
          <Route path="/about" element={<About />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/portals" element={<PortalList />} />
          <Route path="/portal/detail/:id" element={<DetailPortal />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
