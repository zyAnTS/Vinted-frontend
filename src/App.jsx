import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

import "/src/assets/styles/App.css";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";
import Loading from "./components/Loading";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Authentication from "./components/Authentication";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const [search, setSearch] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [sortPrice, setSortPrice] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);

  const [userToken, setUserToken] = useState(Cookies.get("token") || null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // sécuriser les filtres
        let filters = "";

        if (search) {
          filters += "?title=" + search;
        }

        if (priceMin) {
          if (filters) {
            filters += "&priceMin=" + priceMin;
          } else {
            filters += "?priceMin=" + priceMin;
          }
        }

        if (priceMax) {
          if (filters) {
            filters += "&priceMax=" + priceMax;
          } else {
            filters += "?priceMax=" + priceMax;
          }
        }

        if (sortPrice === true) {
          if (filters) {
            filters += "&sort=" + "price-asc";
          } else {
            filters += "?sort=" + "price-asc";
          }
        }

        if (page) {
          if (filters) {
            filters += "&page=" + page;
          } else {
            filters += "?page=" + page;
          }
        }

        if (limit) {
          if (filters) {
            filters += "&limit=" + limit;
          } else {
            filters += "?limit=" + limit;
          }
        }

        // http://localhost:3000/
        // https://lereacteur-vinted-api.herokuapp.com/v2 <== Serveur LeReacteur
        // https://site--vinted--mz8pkhlfl2x7.code.run

        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/v2/offers" + filters
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  }, [search, priceMin, priceMax, sortPrice, page, limit]);

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
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              search={search}
              data={data}
              priceMin={priceMin}
              setPriceMin={setPriceMin}
              priceMax={priceMax}
              setPriceMax={setPriceMax}
              sortPrice={sortPrice}
              setSortPrice={setSortPrice}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route
          path="/offer/:id"
          element={
            <Offer
              carouselOffers={data}
              userToken={userToken}
              isVisible={isVisible}
              setIsVisible={setIsVisible}
            />
          }
        />
        <Route path="/publish" element={<Publish userToken={userToken} />} />
        <Route path="/payment" element={<Payment />} />
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
