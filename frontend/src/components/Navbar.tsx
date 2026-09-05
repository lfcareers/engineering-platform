import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div>
        <NavLink to="/">LF Engineering</NavLink>
      </div>

      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/engineering-lab">Engineering Lab</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  )
}

export default Navbar