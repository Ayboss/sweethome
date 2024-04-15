import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

function page() {
  return (
    <div>
      <Header />
      {/* <!-- BANNER --> */}
      <section class="aboutbanner">
        <h1 class="aboutbanner__title playfair">About Us</h1>
      </section>
      {/* <!-- MAIN --> */}
      <main class="aboutmain">
        <p class="sweethome">
          Sweet Home Assisted Living is more than just a caregiving home; it's a
          warm and welcoming community where residents are treated like family.
          With years of experience in senior care and a team of dedicated
          professionals, we strive to create a nurturing environment where
          individuals can thrive and live their best lives.
        </p>
        <div class="personalized">
          <p class="personalized__top">
            We offer personalized assistance, supportive services and
            compassionate care in a professionally managed, carefully designed,
            retirement community setting. It’s the perfect alternative for
            seniors who can no longer live on their own at home, yet don’t need
            24-hour, complex medical supervision.
          </p>
          <p class="personalized__bottom">
            Our approach to caregiving is rooted in empathy, respect, and
            dignity. We believe in treating each resident as an individual with
            their own unique needs, preferences, and interests. Our
            compassionate caregivers work closely with residents and their
            families to develop personalized care plans that promote
            independence, comfort, and quality of life.
          </p>
        </div>
        <div class="address">
          <div class="address__left">
            <p class="address__title">Address</p>
            <p class="address__value">752 E. Megan Street, Chandler AZ 85225</p>
            <p class="address__time">Mon-Fri 9:00AM - 5:00PM</p>
          </div>
          <div class="address__right">
            <p class="phone">Phone:</p>
            <p class="phone__val">123-456-7890</p>
            <p class="email">Email:</p>
            <p class="email__val">admin@sweethome.com</p>
          </div>
        </div>
      </main>
      {/* <!-- FOOTER --> */}
      <Footer />
    </div>
  );
}

export default page;
