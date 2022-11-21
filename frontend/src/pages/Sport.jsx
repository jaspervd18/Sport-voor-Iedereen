import React from "react";
import Navbar from "../components/Navbar";

import { ARTIKELS } from "../api/mock_artikels";
import { CATEGORIEEN } from "../api/mock_categorieen";
import Artikel from "../components/Artikel";
import { useState } from "react";
import Footer from "../components/Footer";

export default function Sport() {
  const [categorie, setCategorie] = useState("");
  console.log(categorie);
  return (
    <div className="bg-slate-200 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-2 py-2 border-b border-slate-400">
        {CATEGORIEEN.map((categorie) => (
          <button
            key={categorie}
            onClick={() => setCategorie(categorie)}
            className="bg-white text-black font-bold py-2 px-4 rounded-full m-2"
          >
            {categorie}
          </button>
        ))}
      </div>
      <div className="max-w-7xl text-3xl font-light mx-auto px-2 py-2">
        {categorie !== "" ? categorie.toUpperCase() : null}
      </div>
      <div className="flex flex-wrap gap-4 mt-8 mb-16 ml-80 justify-center w-2/3">
        {ARTIKELS.filter(
          (artikel) => categorie === artikel.categorie || categorie === ""
        ).map((artikel) => (
          <Artikel
            key={artikel.id}
            name={artikel.name}
            beschrijving={artikel.beschrijving}
            maat={artikel.maat}
            staat={artikel.staat}
            url={artikel.image_url}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
