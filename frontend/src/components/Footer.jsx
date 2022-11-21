import React from "react";
import map from "../api/fotos/image.png";

export default function Footer() {
  return (
    <div className="flex bg-gray-500 py-4 pl-96">
      <img src={map} alt="kaart"></img>
      <div className="text-white text-xl ml-8">
        <p>
          <a className="hover:underline" href="mail">
            Sportvooriedereen@hotmail.com
          </a>
        </p>
        <p>Valentin Vaerwyckweg 1, 9000 Gent</p>
        <p>09 243 20 04</p>
      </div>
    </div>
  );
}
