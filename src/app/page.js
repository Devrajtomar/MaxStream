"use client";

import { navbar } from "../constants/states";
import axios from "axios";
import {
  All_Movies,
  All_Recommended,
  All_Serieses,
  All_Studios,
  All_TopRated,
  All_Favorite,
  Home,
} from "../_pages";
import { NavBar, SideBar } from "../components/Navbar";
import { Genres } from "../components/home";
import { useState } from "react";
import { CustomButton } from "../components/Custom";

const App = () => {
  const [user, setUser] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { Page } = navbar();
  const backend = async () => {
    //if (username === "" || password === "") {
    const res = await axios
      .post("http://localhost:3001/", {
        username: username,
        password: password,
      })
      .then(function (response) {
        const data = response.data;
        console.log(data);
        if (data.created === true) {
          setUser(true);
        } else {
          alert("User exists");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // };
  if (user === false) {
    return (
      <div>
        <form className="w-full h-[100vh] flex items-center justify-center gap-3 font-semibold text-3xl flex-col bg-black text-white">
          <label htmlFor="username">Username:</label>

          <input
            type="text"
            id="username"
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <label htmlFor="password">Password:</label>

          <input
            type="password"
            id="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br></br>
          <CustomButton
            title="Login"
            containerStyle="w-fit px-2 py-1 rounded-md cursor-pointer"
            handleClick={backend}
          />
        </form>
      </div>
    );
  }
  return (
    <div>
      <NavBar />
      <SideBar />
      {(Page === "Home" ||
        Page === "All Movies" ||
        Page === "All Series" ||
        Page === "All Recommended" ||
        Page === "All Rated") && <Genres />}

      {Page === "Home" && <Home />}
      {Page === "All Studios" && <All_Studios />}
      {Page === "All Recommended" && <All_Recommended />}
      {Page === "All Movies" && <All_Movies />}
      {Page === "All Series" && <All_Serieses />}
      {Page === "All Rated" && <All_TopRated />}
      {Page === "All Favorite" && <All_Favorite />}
    </div>
  );
};

export default App;
