import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

import axios from "axios";

import "/src/assets/styles/App.css";

import Loading from "./components/Loading";
import NotFound from "./pages/NotFOund";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Footer from "./components/Footer";
import Authentication from "./components/Authentication";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const [userToken, setUserToken] = useState(Cookies.get("token") || null);

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
  }, []);

  return isLoading ? (
    <>
      <Loading />
    </>
  ) : (
    <Router>
      <Header
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        userToken={userToken}
        setUserToken={setUserToken}
      />
      <Routes>
        <Route path="/" element={<Home offers={data.offers} />} />
        <Route path="/offer/:id" element={<Offer />} />
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
