import React, { useEffect, useState } from "react";
import Card from "./Card";

function CardSection() {
  const [isIntersecting, setIsIntersecting] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver(() => {});
  }, []);
  return (
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
  );
}

export default CardSection;
