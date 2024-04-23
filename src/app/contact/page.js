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
        >
          <h2 className="servicepage__imagetext playfair">Contact Us</h2>
        </section>
        {/* <!-- MAIN --> */}
        <main class="contactmain">
          <Form />
          <div class="address">
            <p class="address__title">Address:</p>
            <p class="address__value">
              752 E. Megan Street, <br />
              Chandler AZ 85225
            </p>
            <p class="address__time">Mon-Fri 9:00AM - 5:00PM</p>
            <p class="phone">Phone</p>
            <p class="phone__val">123-456-7890</p>
            <p class="email">Email:</p>
            <p class="email__val">admin@sweethome.com</p>
          </div>
        </main>
        <Footer />
      </div>
    </SnackbarProvider>
  );
}

export default page;
