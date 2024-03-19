import React from "react";
import Ad_Banner from "../assets/Ad-banner.jpg";

export default function Advertistment() {
  return (
    <div>
      <img
        src={Ad_Banner}
        alt="SL-Karate"
        className="object-cover w-full h-48 sm:h-80"
      />
    </div>
  );
}
