import React from "react";
import {  NavLink } from "react-router-dom";
import "animate.css";
import "./header.css";
const Header = () => {
  const getActiveStyle = ({ isActive }) => ({
    
    color: isActive ? "#f97316" : "",
  });
  return (
    <div>
    <nav>
      <header className="header">
        <div className="logo">
          <h1 className="animate__heartBeat animate__infinite	infinite">
            | V |
          </h1>
        </div>
        <div className="nav-options">
        
         
            <h3 className="nav-item">
            <NavLink style={getActiveStyle}  className="link"
            to="/">
              <small>01.</small> Home
              </NavLink>
            </h3>
         
            <h3 className="nav-item">
            <NavLink style={getActiveStyle}  className="link"
            to="/products">
              <small>02.</small> Projects
              </NavLink>
            </h3>
          
            <h3 className="nav-item">
            <NavLink style={getActiveStyle}  className="link"
            to="/blogs">
              <small>03.</small> Blogs
              </NavLink>
            </h3>
          
        </div>
      </header>
      </nav>
    </div>
  );
};

export { Header };
