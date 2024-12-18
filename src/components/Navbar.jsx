import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
    <ul>
      <h1>Bienvenue</h1>
      <li><Link to="/">Accueil</Link></li>
      <li><NavLink to="/about" activeClassName="active">À propos</NavLink></li>
      <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
    </ul>
  </nav>
  )
}
