"use client";

import Link from "next/link";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Card from "./Component/Card";
import smalldashboardimg from "../../public/images/smalldashboardimg.png";
import Image from "next/image";

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
      <section className="bannersmall">
        <p className="bannersmall__head playfair">Sweet Home Assisted Living</p>
        <Image className="bannersmall__img" src={smalldashboardimg} alt="" />
        <div className="bannersmall__content">
          <div className="bannersmall__innercontent">
            <h3 className="bannersmall__text playfair">
              Sweet Home Assisted Living
            </h3>
            <p className="bannersmall__red">...your care is our priority</p>
            <p className="bannersmall__texttwo">
              A home that cherishes individuality and ensures a life of dignity,
              joy and relaxation for our residents.
            </p>
          </div>
          <button onClick={handleCalendyPopup} class="bannersmall__btn ">
            Schedule a Tour
          </button>
        </div>
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
            <Card
              imgpath={"./images/safety.png"}
              title={"Safety"}
              description={
                "Our residents can live peacefully knowing they are safe within a peaceful environment."
              }
              link="/services/safety"
            />
            <Card
              imgpath={"./images/housekeeping.png"}
              title={
                <span>
                  House <br />
                  keeping
                </span>
              }
              description={
                " Enjoy a clean and tidy living space with our regular housekeeping services"
              }
              link="/services/housekeeping"
            />
            <Card
              imgpath={"./images/care.png"}
              title={
                <span>
                  Personal
                  <br />
                  Care{" "}
                </span>
              }
              description={
                " We develop care plans tailored to the individual needs of each resident."
              }
              link="/services/personalcare"
            />
            <Card
              imgpath={"./images/medication.png"}
              title={
                <span>
                  Medication
                  <br />
                  Management{" "}
                </span>
              }
              description={
                "We make sure residents follow their prescribed medication schedule."
              }
              link="/services/medicationmanagement"
            />
          </div>
        </section>
        {/* <!-- APPOINTMENT --> */}
        <section class="appointment">
          <img src="./images/nurse.png" class="appointment__image" />
          <div class="appointment__info">
            <h2 class="appointment__heading playfair">
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
    </body>
  );
}
