import React from "react";

export default function Artikel({ name, beschrijving, maat, staat, url }) {
  return (
    <div className="flex min-w-96 border-4 border-black rounded-lg">
      <div>
        <img src={url} height="900" width="300" alt="foto" />
      </div>
      <div className="flex flex-col bg-white w-64 p-2">
        <div className="text-xl">{name}</div>
        <div className="italic font-light">{beschrijving}</div>
        <div>Maat: {maat}</div>
        <div>Staat: {staat}</div>
        <button className="mt-auto mb-4 border-2 border-gray-700 rounded-lg bg-gray-700 text-white hover:animate-pulse">
          Ik wil dit gebruiken
        </button>
      </div>
    </div>
  );
}
