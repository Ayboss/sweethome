"use client";
import Link from "next/link";
import React, { useState } from "react";
import logo from "./../../../public/images/logo.svg";
import fb from "./../../../public/images/topfb.svg";
import hamburger from "./../../../public/images/hamburger.svg";
import close from "../../../public/images/close.svg";
import Image from "next/image";
function Header() {
  const [open, setopen] = useState(false);
  return (
    <header class="header">
      <Image class="header__logo" alt="logo" src={logo} />
      {/* HAMBURGER */}
      <Image
        className="hamburger"
        onClick={() => setopen(true)}
        alt="arm burger"
        src={hamburger}
      />
      {open && (
        <div className="mobilenav">
          <Image
            onClick={() => setopen(false)}
            class="close"
            alt="logo"
            src={close}
          />
          <ul className="mobilenav__list">
            <li className="mobilenav__item">
              <Link class="mobilenav__link" href="/">
                Home
              </Link>
            </li>
            <li className="mobilenav__item">
              <Link class="mobilenav__link" href="about">
                About Us
              </Link>
            </li>
            <li className="mobilenav__item">
              <Link class="mobilenav__link" href="contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}

      <nav class="header__nav">
        <div className="header__connect">
          <span>Stay connected</span>
          <Image alt="fb" src={fb} />
        </div>
        <ul class="header__list">
          <li class="header__item">
            <Link class="header__link" href="/">
              Home
            </Link>
          </li>
          <li class="header__item">
            <Link class="header__link" href="about">
              About Us
            </Link>
          </li>
          <li class="header__item">
            <Link class="header__link" href="contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
