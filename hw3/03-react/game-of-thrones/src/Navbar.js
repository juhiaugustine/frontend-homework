import React from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Search from "./views/Search";
import Houses from "./views/Houses";

function Navbar() {
  return (
    <div>
      <nav>
        <ul className="Navbar">
          <li>
            <Link className="Navlink" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="Navlink" to="/search">
              Search
            </Link>
          </li>
          <li>
            <Link className="Navlink" to="/houses">
              Houses
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/houses" element={<Houses />} />
      </Routes>
    </div>
  );
}

export default Navbar;
