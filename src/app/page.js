"use client";

import Link from "next/link";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import CardSection from "@/Component/CardSection";
import Banner from "@/Component/Banner";

export default function Home() {
  // const handleCalendyPopup = () => {};

  const handleCalendyPopup = () => {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/sweethomechandler/30min",
    });
    return false;
  };
  return (
    <main>
      <Header />
      {/* <!-- BANNER --> */}
      <Banner />

      {/* <!-- MAIN SECTION --> */}
      <main class="main">
        {/* <!-- SERVICES --> */}
        <section class="services">
          {/* <h2 class="services__heading playfair">Services</h2> */}
          <h3 class="services__subheading playfair">
            We Provide Our Best Services
          </h3>
          <CardSection />
        </section>
        {/* <!-- APPOINTMENT --> */}
        <section class="appointment">
          <img src="./images/nurse.png" class="appointment__image" />
          <div class="appointment__info">
            <h2 class="appointment__heading playfair">
              Make An <br /> Appointment With <br /> Us Today
            </h2>
            <p class="appointment__text">
              Our caregiving home is designed to provide a comfortable and
              inviting living environment for our residents, every aspect of
              Sweet Home is thoughtfully crafted to enhance the resident
              experience.
            </p>
            <button onClick={handleCalendyPopup} class="appointment__btn">
              Schedule a Tour
            </button>
          </div>
        </section>
        {/* <!-- CONTACT --> */}
        <section class="contact">
          <div class="contact__info">
            <h2 class="contact__heading playfair">Get In Touch <br /> With Us</h2>
            <p class="contact__text">
              Your comfort, happiness, and peace of mind are our top priorities.
              Let us help you embark on this next chapter of your life with
              confidence and ease.
            </p>
            <Link href={"contact"} class="contact__btn">
              Contact Us
            </Link>
          </div>
          <img src="./images/contact.png" class="contact__image" />
        </section>
      </main>
      {/* <!-- FOOTER --> */}
      <Footer />
      <script src=""></script>
    </main>
  );
}
