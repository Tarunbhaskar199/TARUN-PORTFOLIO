import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const linkCls = ({ isActive }) =>
  `px-3 py-2 rounded-xl hover:bg-gray-100 transition ${isActive ? 'text-primary font-semibold' : 'text-gray-700'}`

export default function Navbar() {
  return (
    <header className="border-b sticky top-0 bg-white/90 backdrop-blur z-40">
      <div className="container-pad flex items-center justify-between h-16">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center"
        >
          <img
            src="/profile.jpeg"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          {/* Name First */}
          <NavLink to="/" className="font-bold text-xl ml-3">Tarun Bhaskar</NavLink>
          {/* Profile Image Next */}
        </motion.div>

        <nav className="flex items-center gap-1">
          <NavLink to="/" className={linkCls}>Home</NavLink>
          <NavLink to="/about" className={linkCls}>About</NavLink>
          <NavLink to="/projects" className={linkCls}>Projects</NavLink>
          <NavLink to="/resume" className={linkCls}>Resume</NavLink>
          <NavLink to="/contact" className={linkCls}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
