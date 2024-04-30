import React from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";

function page() {
  return (
    <div>
      <Header />
      {/* <!-- BANNER --> */}
      <section
        style={{ backgroundImage: `url(/images/aboutpage.png)` }}
        className="servicepage__imagebox"
      ></section>
      <h2 className="servicepage__imagetext playfair">About Us</h2>
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
            We offer a range of services designed to cater to the unique needs
            of every resident. From assistance with daily activities to
            medication management, our team is here to support you in every way.
            Our health and wellness programs are designed to keep you active and
            engaged. Our approach to caregiving is rooted in empathy, respect,
            and dignity. We believe in treating each resident as an individual
            with their own unique needs, preferences, and interests. Our
            compassionate caregivers work closely with residents and their
            families to develop personalized care plans that promote
            independence, comfort, and quality of life.
          </p>
        </div>
        <div class="address">
          <div class="address__left">
            <p class="address__title">Address</p>
            <p class="address__value">752 E. Megan Street,<br/> Chandler AZ 85225</p>
            <p class="address__time">Mon-Sun 9:00AM - 6:00PM</p>
          </div>
          <div class="address__right">
            <p class="phone">Phone:</p>
            <p class="phone__val">M: 480-242-4551</p>
            <p class="phone__val">H: 480-590-2595</p>
            <p class="phone__val">Fax: 480-474-4824</p>


            <p class="email">Email:</p>
            <p class="email__val">admin@shassistedliving.com</p>
            <p class="email__val">sweethomechandler@gmail.com</p>

          </div>
        </div>
      </main>
      {/* <!-- FOOTER --> */}
      <Footer />
    </div>
  );
}

export default page;
