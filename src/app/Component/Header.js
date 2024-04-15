import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header class="header">
      <span class="header__logo">LOGO</span>
      <nav class="header__nav">
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
