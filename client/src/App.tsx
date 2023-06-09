import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Property from "./pages/property/Property";
import List from "./pages/list/List";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<List />} />
        <Route path="/properties/:id" element={<Property />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
