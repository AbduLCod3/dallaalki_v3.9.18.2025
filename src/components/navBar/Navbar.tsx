"use client";
import "./NavBar.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/dallaalkii_logo_v6.1.png";
import menu from "../../../public/images/menu.png";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/buy", label: "Buy" },
  { href: "/rent", label: "Rent" },
  { href: "/agents", label: "Agents" },
  { href: "/developers", label: "Developers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          <Image src={logo} alt="Dallaalkii Logo" />
        </Link>
        <div className="left">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="right">
          <Link href="/contact">Contact Us</Link>
          <Link href="/Login" className="login">
            Login
          </Link>
        </div>
        <div className="menuIcon">
          <Image
            src={menu}
            alt="Menu Icon"
            width={24}
            height={24}
            onClick={toggleMenu}
            style={{ cursor: "pointer" }}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          />
        </div>

        <div className={open ? "menu active" : "menu"} aria-hidden={!open}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={closeMenu}>
            Contact Us
          </Link>
          <Link href="/Login" onClick={closeMenu}>
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
