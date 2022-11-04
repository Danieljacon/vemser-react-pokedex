import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "../pages/error";
import Home from "../pages/home";
import Pokedex from "../pages/pokedex";
import Pokeinfo from "../pages/pokeinfo";
import Legendaries from "../pages/legendaries";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokeinfo" element={<Pokeinfo />} />
          <Route path="/legendaries" element={<Legendaries />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
