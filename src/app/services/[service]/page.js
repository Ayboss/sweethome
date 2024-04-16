"use client";
import Footer from "../../Component/Footer";
import Header from "../../Component/Header";
import { useParams } from "next/navigation";
// import Header from "@/app/Component/Header";
// import Footer from "@/app/Component/Footer";
import React from "react";

const datas = {
  safety: {
    img: "/images/safetypage.png",
    title: "Safety",
    heading: "Ensuring Safety: A Core Service at Our Caregiving Home",
    body: (
      <>
        <p className="servicepage__infotext">
          At Sweet Home Assisted Living, the safety and security of our
          residents are paramount. We understand the importance of providing a
          nurturing environment where individuals can feel protected, valued,
          and at ease. As such, safety is not just a service we offer – it's a
          fundamental aspect of our commitment to excellence in caregiving.
        </p>
        <p className="servicepage__infotext">
          Our team members undergo rigorous training to ensure they are
          well-equipped to handle any situation that may arise. From first aid
          and emergency response protocols to infection control and fall
          prevention techniques, our staff members are prepared to address a
          wide range of safety concerns with skill and confidence.
        </p>
      </>
    ),
  },
  housekeeping: {
    img: "/images/housekeepingpage.png",
    title: "House Keeping",
    heading:
      "Housekeeping Services: Maintaining a Clean and Comfortable Environment",
    body: (
      <>
        {" "}
        <p className="servicepage__infotext">
          At Sweet Home Assisted Living, we understand the importance of a clean
          and tidy living environment in promoting the health, well-being, and
          overall quality of life for our residents. That's why we offer
          comprehensive housekeeping services designed to ensure that every
          aspect of our facility is kept clean, sanitized, and inviting at all
          times.
        </p>
        <p className="servicepage__infotext">
          Dedicated Housekeeping Team: Our housekeeping team consists of trained
          professionals who are passionate about creating a clean and
          comfortable living environment for our residents. With meticulous
          attention to detail and a commitment to excellence, they work
          diligently to maintain the highest standards of cleanliness throughout
          our facility.
        </p>
        <p className="servicepage__infotext">
          Daily Cleaning and Sanitization: We follow a rigorous cleaning
          schedule that includes daily cleaning and sanitization of all common
          areas, resident rooms, and high-touch surfaces. From vacuuming and
          dusting to mopping and disinfecting, our housekeeping team leaves no
          stone unturned in their efforts to keep our facility sparkling clean
          and germ-free.
        </p>
      </>
    ),
  },
  personalcare: {
    img: "/images/carepage.png",
    title: "Personal Care",
    heading:
      "Personal Care Services: Empowering Residents with Dignity and Respect",
    body: (
      <>
        <p className="servicepage__infotext">
          At Sweet Home Assisted Living, we understand that personal care is
          about more than just meeting basic needs – it's about promoting
          independence, dignity, and quality of life for our residents. That's
          why we offer personalized personal care services designed to support
          individuals in maintaining their health, hygiene, and well-being with
          compassion and respect.
        </p>
        <p className="servicepage__infotext">
          Our team of caregivers is comprised of trained professionals who are
          dedicated to providing personalized care and support to our residents.
          With empathy, patience, and a commitment to excellence, they work
          tirelessly to ensure that each individual receives the highest level
          of care tailored to their unique needs and preferences.
        </p>
        <p className="servicepage__infotext">
          We provide assistance with a wide range of activities of daily living
          (ADLs) to help residents maintain their independence and dignity. From
          bathing and grooming to dressing and toileting, our caregivers offer
          discreet and respectful support to ensure that residents feel
          comfortable and confident in their daily routines.
        </p>
      </>
    ),
  },
  medicationmanagement: {
    img: "/images/medicationpage.png",
    title: "Medication Management",
    heading:
      "Personal Care Services: Empowering Residents with Dignity and Respect",
    body: (
      <>
        <p className="servicepage__infotext">
          At Sweet Home Assisted Living, we understand that personal care is
          about more than just meeting basic needs – it's about promoting
          independence, dignity, and quality of life for our residents. That's
          why we offer personalized personal care services designed to support
          individuals in maintaining their health, hygiene, and well-being with
          compassion and respect.
        </p>
        <p className="servicepage__infotext">
          Our team of caregivers is comprised of trained professionals who are
          dedicated to providing personalized care and support to our residents.
          With empathy, patience, and a commitment to excellence, they work
          tirelessly to ensure that each individual receives the highest level
          of care tailored to their unique needs and preferences
        </p>
        <p className="servicepage__infotext">
          We provide assistance with a wide range of activities of daily living
          (ADLs) to help residents maintain their independence and dignity. From
          bathing and grooming to dressing and toileting, our caregivers offer
          discreet and respectful support to ensure that residents feel
          comfortable and confident in their daily routines.
        </p>
      </>
    ),
  },
};

function page() {
  const pathname = useParams();
  const service = pathname.service;
  // if (
  //   service != "safety" ||
  //   service != "housekeeping" ||
  //   service != "personalcare" ||
  //   service != "medicationmanagement"
  // ) {
  //   return <p>404 not found </p>;
  // }
  return (
    <>
      <Header />
      {/* <Header /> */}
      <main className="servicepage__main">
        <section
          style={{ backgroundImage: `url(${datas[service]?.img})` }}
          className="servicepage__imagebox"
        >
          <h2 className="servicepage__imagetext playfair">
            {datas[service]?.title}
          </h2>
        </section>
        <section className="servicepage__infosection">
          <h4 className="servicepage__infohead">{datas[service]?.heading}</h4>
          {datas[service]?.body}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default page;
