import React from 'react'
import {Link,NavLink} from "react-router-dom"
import 'animate.css';
import "./header.css"
const Header = () => {
  return (
    <div>
    <header className='header'>
    <div className='logo'>
    <h1 className='animate__heartBeat animate__infinite	infinite'>| V |</h1>
    </div>
    <div className='nav'>
    <NavLink className="link" activeClassName="selected" to="/">
    <h3 className='nav-item'><small>01.</small> Home</h3>
    </NavLink>
    <Link className="link" to="/projects">
    <h3 className='nav-item'><small>02.</small> Projects</h3>
    </Link>
    <Link className="link" to="/blog">
    <h3 className='nav-item'><small>03.</small> Blogs</h3>
    </Link>
    </div>
    </header>
    </div>
  )
}

export {Header}