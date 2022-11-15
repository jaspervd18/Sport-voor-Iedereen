import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sport from "./pages/Sport";

function App() {
  return (
    <div className="">
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="sport" element={<Sport />} />
      </Routes>
    </div>
  );
}

export default App;
