"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import logo from "./../../public/images/logo.svg";
import hamburger from "./../../public/images/hamburger.svg";
import close from "../../public/images/close.svg";
import phone from "../../public/images/phone.svg";
import Image from "next/image";
import Facebook from "@/assets/Facebook";
import Twitter from "@/assets/Twitter";
import Instagram from "@/assets/Instagram";
function Header() {
  const [open, setopen] = useState(false);
  const [shouldfixed, setshouldfixed] = useState(false);

  useEffect(() => {
    const listener = window.addEventListener("scroll", () => {
      if (window.scrollY > 790) {
        setshouldfixed(true);
      } else {
        setshouldfixed(false);
      }
    });
    return () => window.removeEventListener("scroll", listener);
  }, []);
  return (
    <header class={`header  ${shouldfixed ? "shouldfix" : ""}`}>
      {/* <Image class="header__logo" alt="logo" src={logo} /> */}
      {/* HAMBURGER */}
      <Image
        className="hamburger"
        onClick={() => setopen(true)}
        alt="arm burger"
        src={hamburger}
      />
      <Image class="headermobile__logo" alt="logo" src={logo} />
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
              <Link class="mobilenav__link" href="/about">
                About Us
              </Link>
            </li>
            <li className="mobilenav__item">
              <Link
                class="mobilenav__link"
                href={"/photogallery.pdf"}
                target="_blank"
              >
                Photo Gallery
              </Link>
            </li>
            <li className="mobilenav__item">
              <Link class="mobilenav__link" href="/services/safety">
                Services
              </Link>
            </li>
            <li className="mobilenav__item">
              <Link class="mobilenav__link" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
      <div className="header__mobile">
        <p className="header__mobile__phone">
          <span className="header__mobile__phonenumber">480-242-4551</span>
        </p>
        <span className="header__mobile__phonenumber">
          sweethomechandler@gmail.com
        </span>
        <div className="header__mobile__connectedflex">
          <p className="header__mobile__connected">Stay Connected</p>
          <div className="header__mobile__socials">
            <Link
              href={"https://www.facebook.com/ola.olami.39/"}
              className="header__socialitem"
              target="_blank"
            >
              <Facebook />
            </Link>
            <Link
              href={"https://twitter.com/shaliving1"}
              className="header__socialitem"
              target="_blank"
            >
              <Twitter />
            </Link>
            <Link
              href={"https://www.instagram.com/shaliving1/"}
              className="header__socialitem"
              target="_blank"
            >
              <Instagram stroke="#8e5fd38a" />
            </Link>
          </div>
        </div>
      </div>
      <div className="headerTop">
        <Image class="header__logo" alt="logo" src={logo} />
        <div className="header__connected">
          {/* <Image src={phone} className="header__phone" alt="phone " /> */}
          <ul className="header__phonelist verticalborder ">
            {/* <li className="header__reach">Reach out to us</li> */}
            <li className="header__phonenum">M: 480-242-4551</li>
            <li className="header__phonenum">H: 480-242-4551</li>

            <li className="header__faxdetails">
              <span className="fax">Fax:</span>
              <span className="info">480-474-4824</span>
            </li>
          </ul>

          <ul className="header__phonelist ">
            {/* <li className="header__reach">Reach out to us</li> */}
            <li className="header__phonenum">admin@shassistedliving.com</li>
            <li className="header__faxdetails">
              <span className="info">sweethomechandler@gmail.com</span>
            </li>
          </ul>
        </div>
        <div className="header__connect">
          <span>Stay Connected</span>
          <Link
            href={"https://www.facebook.com/ola.olami.39/"}
            className="header__socialitem"
            target="_blank"
          >
            <Facebook />
          </Link>
          <Link
            href={"https://twitter.com/shaliving1"}
            className="header__socialitem"
            target="_blank"
          >
            <Twitter />
          </Link>
          <Link
            href={"https://www.instagram.com/shaliving1/"}
            className="header__socialitem"
            target="_blank"
          >
            <Instagram stroke="#7b57b0" />
          </Link>
        </div>
      </div>
      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__item">
            <Link class="header__link" href="/">
              Home
            </Link>
          </li>
          <li class="header__item">
            <Link class="header__link" href="/about">
              About Us
            </Link>
          </li>
          <li class="header__item">
            <Link
              class="header__link"
              href={"/photogallery.pdf"}
              target="_blank"
            >
              Photo Gallery
            </Link>
          </li>
          <li class="header__item">
            <Link class="header__link" href="/services/safety">
              Services
            </Link>
          </li>
          <li class="header__item">
            <Link class="header__link" href="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
