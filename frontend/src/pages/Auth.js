import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "../components/Navbars/AuthNavbar.js";


// views

import Login from "./AuthAdmin/Login.js";
import Register from "./AuthAdmin/Register.js";
import image1 from '../assets/img/register_bg_2.png';

export default function Auth() {
  return (
    <>
    
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full pt-20 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + image1 + ")",
            }}
          ></div>
          <Switch>
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/register" exact component={Register} />
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
        </section>
      </main>
    </>
  );
}
