"use client";
import React, { useState } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import axios from "axios";

function page() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [email, setemail] = useState("");
  const [comments, setcomments] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(firstname, lastname, phonenumber, email, comments);
    const endpoint = "/api/form";
    const body = new FormData();
    body.append("firstname", firstname);
    body.append("lastname", lastname);
    body.append("phonenumber", phonenumber);
    body.append("email", email);
    body.append("comments", comments);
    try {
      await axios.post(endpoint, body);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Header />
      {/* <!-- BANNER --> */}
      <section class="contactbanner">
        <h1 class="contactbanner__title">Contact US</h1>
      </section>
      {/* <!-- MAIN --> */}
      <main class="contactmain">
        <form class="form">
          <div class="form__group">
            <label class="form__label">Your Name</label>
            <div class="form__flex">
              <input
                class="form__input"
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}
                placeholder="First Name"
              />
              <input
                class="form__input"
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div class="form__group">
            <label class="form__label">Phone</label>
            <input
              type="text"
              class="form__input"
              value={phonenumber}
              onChange={(e) => setphonenumber(e.target.value)}
              placeholder="Enter Number"
            />
          </div>
          <div class="form__group">
            <label class="form__label">Email</label>
            <input
              type="email"
              class="form__input"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter Email"
            />
          </div>
          <div class="form__group">
            <label class="form__label">Comments/Questions</label>
            <textarea
              class="form__textarea"
              value={comments}
              onChange={(e) => setcomments(e.target.value)}
            ></textarea>
          </div>
          <button onClick={handleSubmit} class="form__btn">
            Send Message
          </button>
        </form>
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
  );
}

export default page;
