"use client";

import Link from "next/link";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

export default function Home() {
  // const handleCalendyPopup = () => {};

  const handleCalendyPopup = () => {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/sweethomechandler/30min",
    });
    return false;
  };
  return (
    <body>
      <Header />
      {/* <!-- BANNER --> */}
      <section class="banner">
        <div class="banner__text">
          <h1 class="banner__heading playfair">Sweet Home Assisted Living</h1>
          <p class="banner__red">...your care is our priority</p>
          <p class="banner__subtext">
            A home that cherishes individuality and ensures a life of dignity,
            joy and relaxation for our residents.
          </p>

          <button onClick={handleCalendyPopup} class="banner__btn">
            Schedule a Tour
          </button>
        </div>
        {/* <!-- IMAGE --> */}
        {/* <!-- <img src="" class="banner__image" /> --> */}
      </section>
      {/* <!-- MAIN SECTION --> */}
      <main class="main">
        {/* <!-- SERVICES --> */}
        <section class="services">
          <h2 class="services__heading playfair">Services</h2>
          <h3 class="services__subheading playfair">
            We Provide Our Best Services
          </h3>
          <div class="services__grid">
            <div class="services__card">
              <img src="./images/safety.png" class="services__cardimg" />
              <h4 class="services__cardheading playfair">Safety</h4>
              <p class="services__cardtext">
                Our residents can live peacefully knowing they are safe within a
                peaceful environment.
              </p>
            </div>
            <div class="services__card">
              <img src="./images/housekeeping.png" class="services__cardimg" />
              <h4 class="services__cardheading playfair">Housekeeping</h4>
              <p class="services__cardtext">
                Enjoy a clean and tidy living space with our regular
                housekeeping services
              </p>
            </div>
            <div class="services__card">
              <img src="./images/care.png" class="services__cardimg" />
              <h4 class="services__cardheading playfair">Personal Care</h4>
              <p class="services__cardtext">
                We develop care plans tailored to the individual needs of each
                resident.
              </p>
            </div>
            <div class="services__card">
              <img src="./images/medication.png" class="services__cardimg" />
              <h4 class="services__cardheading playfair">
                Medication Management
              </h4>
              <p class="services__cardtext">
                We provide meticulous medication management which ensures
                resident well-being through clear protocols.
              </p>
            </div>
          </div>
        </section>
        {/* <!-- APPOINTMENT --> */}
        <section class="appointment">
          <img src="./images/nurse.png" class="appointment__image" />
          <div class="appointment__info">
            <h2 class="appointment__heading">
              Make An Appointment With Us Today
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
            <h2 class="contact__heading playfair">Get In Touch With Us</h2>
            <p class="contact__text">
              Your comfort, happiness, and peace of mind are our top priorities.
              Let us help you embark on this next chapter of your life with
              confidence and ease.
            </p>
            <button class="contact__btn">Contact Us</button>
          </div>
          <img src="./images/contact.png" class="contact__image" />
        </section>
      </main>
      {/* <!-- FOOTER --> */}
      <Footer />
      <script src=""></script>
    </body>
  );
}
