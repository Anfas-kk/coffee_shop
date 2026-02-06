import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaGoogle,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

import CreditCards from "../../assets/website/credit-cards.webp"; // add your payment image

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
      <div className="container">

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* ================= Company Details ================= */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold uppercase">
              Coders Cafe
            </h1>

            <p className="text-sm max-w-[300px] opacity-90">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ab atque? Quidem maxime, numquam dolores.
            </p>

            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <FaPhone /> +91 (790) 28-38-98
              </p>

              <p className="flex items-center gap-2">
                <FaMapMarkerAlt /> Kozhikode, Kerala
              </p>
            </div>
          </div>

          {/* ================= Quick Links ================= */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Quick Links</h1>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <ul className="space-y-2">
                <li className="hover:translate-x-1 duration-300 cursor-pointer"><NavLink
                  to="/">
                  Home
                </NavLink></li>
                <li className="hover:translate-x-1 duration-300 cursor-pointer"><NavLink
                  to="/about">
                  About
                </NavLink></li>
                <li className="hover:translate-x-1 duration-300 cursor-pointer"><NavLink
                  to="/contact">
                  Contact Us
                </NavLink></li>
                <li className="hover:translate-x-1 duration-300 cursor-pointer">Privacy Policy</li>
              </ul>

              <ul className="space-y-2">
                <li className="hover:translate-x-1 duration-300 cursor-pointer">Search</li>
                <li className="hover:translate-x-1 duration-300 cursor-pointer">Help</li>
                <li className="hover:translate-x-1 duration-300 cursor-pointer">Terms</li>
                <li className="hover:translate-x-1 duration-300 cursor-pointer">Support</li>
              </ul>
            </div>
          </div>

          {/* ================= Social & Payment ================= */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Follow Us</h1>

            <div className="flex items-center gap-4 text-2xl">
              <FaFacebook className="hover:scale-110 duration-300 cursor-pointer" />
              <FaInstagram className="hover:scale-110 duration-300 cursor-pointer" />
              <FaTelegram className="hover:scale-110 duration-300 cursor-pointer" />
              <FaGoogle className="hover:scale-110 duration-300 cursor-pointer" />
            </div>

            <div>
              <h1 className="text-xl font-semibold mb-2">
                Payment Methods
              </h1>

              <img
                src={CreditCards}
                alt="credit cards"
                className="w-[80%]"
              />
            </div>
          </div>

        </div>

        {/* ================= Copyright ================= */}
        <p className="text-center mt-8 pt-4 border-t border-white/30 text-sm">
          Copyright &copy; 2026 Company Name. All rights reserved.
        </p>

      </div>
    </div>
  );
};

export default Footer;
