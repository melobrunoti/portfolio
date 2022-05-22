import React from 'react'
/* import { NavLink } from "react-router-dom"; */

export default function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <a href="#home" className='header-nav__link' >Home</a>
        <a href="#about" className='header-nav__link'>Sobre</a>
        <a href="#projects" className='header-nav__link'>Projetos</a>

      </nav>
    </header>
  )
}
