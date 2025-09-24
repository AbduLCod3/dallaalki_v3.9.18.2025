"use client";
import "./NavBar.scss";
import Image from "next/image";
import logo from "../../../public/images/dallaalkii_logo_v6.1.png";
import menu from "../../../public/images/menu.png";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav>
        <a href="/" className="logo">
          <Image src={logo} alt="Dallaalkii Logo" />
        </a>
        <div className="left">
          <a href="/">Home</a>
          <a href="/buy">Buy</a>
          <a href="/rent">Rent</a>
          <a href="/agents">Agents</a>
          <a href="/developers">Developers</a>
        </div>
        <div className="right">
          <a href="/contact">Contact Us</a>
          <a href="/Login" className="login">
            Login
          </a>
        </div>
        <div className="menuIcon">
          <Image src={menu} alt="Menu Icon" onClick={() => setOpen(!open)} />
        </div>

        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/buy">Buy</a>
          <a href="/rent">Rent</a>
          <a href="/agents">Agents</a>
          <a href="/developers">Developers</a>
          <a href="/contact">Contact Us</a>
          <a href="/Login">Login</a>
        </div>
      </nav>
    </header>
  );
}
