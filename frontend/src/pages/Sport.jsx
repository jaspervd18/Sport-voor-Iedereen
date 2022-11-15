import React from "react";
import Navbar from "../components/Navbar";

import { ARTIKELS } from "../api/mock_artikels";
import Artikel from "../components/Artikel";

export default function Sport() {
  return (
    <div className="bg-slate-200 min-h-screen">
      <Navbar />
      <div className="flex flex-wrap gap-4 my-16 ml-80 justify-center w-2/3">
        {ARTIKELS.map((artikel) => (
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
    </div>
  );
}
