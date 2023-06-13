import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "./AuthAdmin/Login.js";
import image1 from '../assets/img/register_bg_2.png';

export default function Auth() {
  return (
    <div >
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
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
        </section>
      </main>
    </div>
  );
}
