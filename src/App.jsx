import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import axios from "axios";

import "./App.css";

import Loading from "./components/Loading";
import NotFound from "./pages/NotFOund";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get("http://localhost:3000/");
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/v2/offers"
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  });

  return isLoading ? (
    <>
      <Loading />
    </>
  ) : (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home offers={data.offers} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
