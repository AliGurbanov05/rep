import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import logo from "../../../images/logo.png";
import style from "./Header.module.scss";
import { FaCartShopping } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className={style.header}>
      <div className={style.container}>
        <img src={logo} alt="Logo" />
        <div className={style.nav}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Shop</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Pages</a>
            </li>
            <li>
              <a href="/admin">Contact</a>
            </li>
          </ul>
        </div>
        <div className={style.icons}>
          <IoSearchOutline />
          <a href="/basket">
            <FaCartShopping />
          </a>
        </div>
        <button>Buy Now</button>

        <div className={style.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          className={
            menuOpen
              ? `${style.mobileMenu} ${style.mobileMenuActive}`
              : `${style.mobileMenu}`
          }
        >
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/about" onClick={handleLinkClick}>
            About
          </Link>
          <Link to="/services" onClick={handleLinkClick}>
            Services
          </Link>
          <Link to="/portfolio" onClick={handleLinkClick}>
            Portfolio
          </Link>
          <Link to="/contact" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
