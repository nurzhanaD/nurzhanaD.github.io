import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

export function Navbar() {
  return (
    <nav className="navbar">
        <NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "link__all" : isActive ? "navbar__link link__all nav-active" : "navbar__link link__all nav-inactive"
        }>Все котики</NavLink>
        <NavLink to="/liked" className={({ isActive, isPending }) =>
            isPending ? "link__liked" : isActive ? "navbar__link link__liked nav-active" : "navbar__link link__liked nav-inactive"
        }>Любимые котики</NavLink>
    </nav>
  )
}