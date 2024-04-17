"use client";
import Link from "next/link";
import React from "react";

function Footer() {
  const handleCalendyPopup = () => {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/sweethomechandler/30min",
    });
    return false;
  };
  return (
    <footer class="footer">
      <h2 class="footer__heading playfair">
        Let’s talk about <br /> your specific needs.
      </h2>
      <button onClick={handleCalendyPopup} class="footer__btn">
        Schedule a Tour
      </button>
      <hr class="footer__hr" />

      <ul class="footer__list">
        <li class="footer__item">
          <Link href="about.html" class="footer__link playfair">
            About Us
          </Link>
        </li>
        <li class="footer__item">
          <Link href="contact.html" class="footer__link playfair">
            Contact Us
          </Link>
        </li>
        <li class="footer__item">
          <Link
            href={"#"}
            onClick={handleCalendyPopup}
            class="footer__link playfair"
          >
            Schedule a Tour
          </Link>
        </li>
      </ul>
      <div class="footer__sociallist">
        <p>Stay Connected</p>
        <div class="footer__socialitem">
          <img src="./images/fb.svg" class="footer__socialimg" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
