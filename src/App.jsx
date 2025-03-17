import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

import "/src/assets/styles/App.css";

import NotFound from "./pages/NotFOund";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Publish from "./pages/Publish";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Authentication from "./components/Authentication";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const [search, setSearch] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [sortPrice, setSortPrice] = useState(false);

  const [userToken, setUserToken] = useState(Cookies.get("token") || null);

  return (
    <Router>
      <Header
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        userToken={userToken}
        setUserToken={setUserToken}
        search={search}
        setSearch={setSearch}
        priceMin={priceMin}
        setPriceMin={setPriceMin}
        priceMax={priceMax}
        setPriceMax={setPriceMax}
        sortPrice={sortPrice}
        setSortPrice={setSortPrice}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              search={search}
              priceMin={priceMin}
              priceMax={priceMax}
              sortPrice={sortPrice}
            />
          }
        />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Authentication
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        setUserToken={setUserToken}
      />
    </Router>
  );
}

export default App;
