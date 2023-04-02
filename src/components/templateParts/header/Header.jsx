import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'

export default function Header() {
  return (
    <>
      <div className="header-menu">
      <header id="header" className="fixed-top d-flex justify-content-center align-items-center header-transparent">
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/about">About Me</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/react-developments">React Developments</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/java-developments">Java Developments</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/php-developments">PHP Developments</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/hardware-projects">Hardware Projects</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      </div>
    </>
  )
}
