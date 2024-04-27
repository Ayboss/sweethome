import React from "react";
import smalldashboardimg from "../../public/images/smalldashboardimg.png";
import Image from "next/image";
const handleCalendyPopup = () => {
  window.Calendly.initPopupWidget({
    url: "https://calendly.com/sweethomechandler/30min",
  });
  return false;
};
function Banner() {
  return (
    <>
      <section class="banner">
        <div class="banner__text">
          <h2 className="banner__subheading playfair">Sweet Home </h2>
          <h1 class="banner__heading playfair">Assisted Living</h1>
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
        {/* <p className="bannersmall__head playfair">Sweet Home Assisted Living</p> */}
        <Image className="bannersmall__img" src={smalldashboardimg} alt="" />
        <div className="bannersmall__content">
          <div className="bannersmall__innercontent">
            <h3 className="bannersmall__text playfair">
              <span>Sweet Home</span> <br />
              Assisted Living
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
    </>
  );
}

export default Banner;
