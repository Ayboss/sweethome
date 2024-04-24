import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";

function CardSection() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  console.log(isIntersecting);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting == true) {
          setIsIntersecting(entry.isIntersecting);
          observer.disconnect();
        }
      },
      { rootMargin: "-300px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let delay = 0;
    if (isIntersecting) {
      const els = Array.from(ref.current.children);
      els?.forEach((el) => {
        el.classList.add("slide-in");
        el.style.transitionDelay = delay + "s";
        delay = delay + 0.3;
      });
    }
  }, [isIntersecting]);

  return (
    <div class="services__grid" ref={ref}>
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
