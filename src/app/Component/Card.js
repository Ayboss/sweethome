import Link from "next/link";
import React from "react";

function Card({ imgpath, title, description, link }) {
  return (
    <div class="services__card">
      <img src={imgpath} class="services__cardimg" />
      <h4 class="services__cardheading playfair">{title}</h4>
      <p class="services__cardtext">{description}</p>
      <Link href={link} className="service__btn">
        Learn More
      </Link>
    </div>
  );
}

export default Card;
