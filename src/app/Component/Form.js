import React, { useState } from "react";
import axios from "axios";
import { useSnackbar } from "react-simple-snackbar";

const options = {
  style: {
    backgroundColor: "red",
    color: "white",
    fontFamily: "Menlo, monospace",
    fontSize: "16px",
    textAlign: "center",
  },
  closeStyle: {
    color: "white",
    fontSize: "16px",
  },
};
const optionsuccess = {
  style: {
    backgroundColor: "green",
    color: "white",
    fontFamily: "Menlo, monospace",
    fontSize: "16px",
    textAlign: "center",
  },
  closeStyle: {
    color: "white",
    fontSize: "16px",
  },
};

function Form() {
  const [openSnackbar, closeSnackbar] = useSnackbar(options);
  const [openSuccessSnackbar, closeSucessSnackbar] = useSnackbar(optionsuccess);
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [email, setemail] = useState("");
  const [comments, setcomments] = useState("");
  const [loading, setloading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !email || !phonenumber || !comments) {
      openSnackbar("Please all informations are required");
      return;
    }

    setloading(true);
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
      openSuccessSnackbar("you message has been sent successfully");
      setfirstname("");
      setlastname("");
      setphonenumber("");
      setemail("");
      setcomments("");
    } catch (err) {
      openSnackbar("An error occured, unable to send Email");
    } finally {
      setloading(false);
    }
  };
  return (
    <form class="form">
      <div class="form__group">
        <label class="form__label">Your Name</label>
        <div class="form__flex">
          <input
            class="form__input"
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
            placeholder="First Name"
            required
          />
          <input
            class="form__input"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
            placeholder="Last Name"
            required
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
          required
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
          required
        />
      </div>
      <div class="form__group">
        <label class="form__label">Comments/Questions</label>
        <textarea
          class="form__textarea"
          value={comments}
          onChange={(e) => setcomments(e.target.value)}
          required
          minLength={10}
        ></textarea>
      </div>
      <button onClick={handleSubmit} class="form__btn">
        {loading ? "loading..." : "Send Message"}
      </button>
    </form>
  );
}

export default Form;
