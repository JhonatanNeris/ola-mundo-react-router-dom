import React from 'react'

//Router
import { NavLink } from 'react-router-dom'

//CSS
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : "" }>
            Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : "" }>
            About
        </NavLink>
    </nav>
  )
}

export default Navbar