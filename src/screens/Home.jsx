import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Favorites } from "./Favorites";
import { Feed } from "./Feed";
import { Library } from "./Library";
import { Player } from "./Player";
import { Trending } from "./Trending";
import "../styles/home.css";
import { SideBar } from "../components/sidebar/SideBar";
import { Login } from "./auth/Login";
import { setClientToken } from "../../spotify";

export const Home = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return !token ? (
    <Login></Login>
  ) : (
    <BrowserRouter>
      <div className="main-body">
        <SideBar></SideBar>
        <Routes>
          <Route path="/" element={<Library />}></Route>
          <Route path="/feed" element={<Feed />}></Route>
          <Route path="/trending" element={<Trending />}></Route>
          <Route path="/player" element={<Player />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

/*
 
*/

/*
   const hash = window.location.hash;
    window.location.hash = "";
    if (token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }

*/
