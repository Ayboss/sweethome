"use client";
import Link from "next/link";
import React from "react";
import logo from "./../../public/images/logo.svg";
import Image from "next/image";
import Facebook from "@/assets/Facebook";
import Twitter from "@/assets/Twitter";
import Instagram from "@/assets/Instagram";

function Footer() {
  const handleCalendyPopup = () => {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/sweethomechandler/30min",
    });
    return false;
  };
  return (
    <footer class="footer">
      <div className="footer__flex">
        <div className="footer__first">
        <h3 className="footer__heading playfair">New management,<br /> New look,<br /> Better Services.</h3>

          <p className="footer__text">
            Our team here at <b> Sweet Home Assisted Living</b> is here to
            support you in every way. Our health and wellness programs are
            designed to keep you active and engaged
          </p>
        </div>
        <div className="footer__second">
          <h3 className="footer__heading playfair">Quick Links</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <Link href={"/"} className="footer__link">
                Home
              </Link>
            </li>
            <li className="footer__item">
              <Link href={"/about"} className="footer__link">
                About Us
              </Link>
            </li>
            <li className="footer__item">
              <Link
                href={"/photogallery.pdf"}
                target="_blank"
                className="footer__link"
              >
                Photo Gallery
              </Link>
            </li>
            <li className="footer__item">
              <Link href="/services/safety" className="footer__link">
                Services
              </Link>
            </li>
            <li className="footer__item">
              <Link href={"/contact"} className="footer__link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer__heading playfair">Contact Info</h3>
          <ul className="footer__list">
            <div>
            <li className="footer__item">Mobile: 480-242-4551</li>
            <li className="footer__item">Home: 480-590-2595</li>
            <li className="footer__item">Fax: 480-474-4824</li>
            </div>
            <div>

            <li className="footer__item">admin@shassistedliving.com</li>
            <li className="footer__item">sweethomechandler@gmail.com</li>

            </div>
            <li className="footer__item">
              752 E. Megan Street,
              <br /> Chandler AZ 85225
            </li>
            <li className="footer__item">
              <div className="footer__sociallist">
                <Link
                  href={"https://www.facebook.com/ola.olami.39/"}
                  className="footer__socialitem"
                  target="_blank"
                >
                  <Facebook color="#7B57B0" />
                </Link>
                <Link
                  href={"https://twitter.com/shaliving1"}
                  className="footer__socialitem"
                  target="_blank"
                >
                  <Twitter color="#7B57B0" />
                </Link>
                <Link
                  href={"https://www.instagram.com/shaliving1/"}
                  className="footer__socialitem"
                  target="_blank"
                >
                  <Instagram color="#7B57B0" />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <hr className="footer__hr" />
      <p className="footer__copy">
        Copyright &#169; 2024 Sweet Home Assisted Living, LLC. All rights
        reserved
      </p>
    </footer>
  );
}

export default Footer;
