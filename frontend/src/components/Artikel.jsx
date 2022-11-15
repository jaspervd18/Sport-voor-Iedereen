import React from "react";

export default function Artikel({ name, beschrijving, maat, staat, url }) {
  console.log(name);
  return (
    <div className="flex min-w-fit border-4  border-black rounded-lg">
      <div>
        <img src={url} height="900" width="300" alt="foto" />
      </div>
      <div className="bg-white w-64 p-2">
        <div className="text-xl">{name}</div>
        <div className="">{beschrijving}</div>
        <div>{maat}</div>
        <div>{staat}</div>
      </div>
    </div>
  );
}
