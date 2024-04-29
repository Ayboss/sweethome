"use client";
import React, { useState } from "react";
import SnackbarProvider from "react-simple-snackbar";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import Form from "../../Component/Form";

function page() {
  return (
    <SnackbarProvider>
      <div>
        <Header />
        {/* <!-- BANNER --> */}
        {/* <section class="contactbanner">
          <h1 class="contactbanner__title">Contact US</h1>
        </section> */}
        <section
          style={{ backgroundImage: `url(/images/contactpage.png)` }}
          className="servicepage__imagebox"
        ></section>
        <h2 className="servicepage__imagetext playfair">Contact Us</h2>
        {/* <!-- MAIN --> */}
        <main class="contactmain">
          <Form />
          <div class="addresscontact">
            <p class="addresscontact__title">Address:</p>
            <p class="addresscontact__value">
              752 E. Megan Street, <br />
              Chandler AZ 85225
            </p>
            <p class="addresscontact__time">Mon-Sun 9:00AM - 6:00PM</p>
            <p class="phone">Phone</p>
            <p class="phone__val">M: 480-242-4551</p>
            <p class="phone__val">H: 480-590-2595</p>
            <p class="email">Email:</p>
            <p class="email__val">admin@shassistedliving.com</p>
            <p class="email__val">sweethomechandler@gmail.com</p>
          </div>
        </main>
        <Footer />
      </div>
    </SnackbarProvider>
  );
}

export default page;
