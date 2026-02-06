import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle =
    "relative transition font-medium drop-shadow-[0_1px_1px_black] hover:text-primary hover:drop-shadow-none after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ";

  const activeStyle =
    "text-primary after:w-full drop-shadow-none ";

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-darkGray/5 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="container py-4 flex justify-between items-center" >
          {/* LEFT - LOGO */}
          <h1 className="text-2xl font-bold">
            <span className="text-white drop-shadow-[0_1px_1px_black]">
              Coders
            </span>
            <span className="text-primary ">cafe</span>
          </h1>

          {/* CENTER MENU (Desktop Only) */}
          <ul className="hidden md:flex gap-10 font-medium absolute left-1/2 transform -translate-x-1/2 text-white ">
            <NavLink to="/" className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : ""}`
            }>
              Home
            </NavLink>

            <NavLink to="/menu" className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : ""}`
            }>
              Menu
            </NavLink>

            <NavLink to="/about" className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : ""}`
            }>
              About
            </NavLink>

            <NavLink to="/contact" className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : ""}`
            }>
              Contact
            </NavLink>
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            {/* Profile */}
            <button className="hover:text-primary transition text-xl">
              👤
            </button>

            {/* Cart */}
            <button className="relative hover:text-primary transition text-xl">
              🛒
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                2
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-primary"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={26} />
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[220px] bg-darkGray text-lightOrange p-6 z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="mb-8 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>

        <div className="flex flex-col gap-6 text-lg">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }>
            Home
          </NavLink>

          <NavLink
            to="/menu"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }>
            Menu
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }>
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeStyle : ""}`
              }>
            Contact
          </NavLink>
        </div>
      </div>

    </>
  );
};

export default Navbar;
