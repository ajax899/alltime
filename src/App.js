import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signin from "./Signin";
import Profile from "./Profile";
import Tabs from "./components/tab";
import "./App.css";
import Button from "./Button";
import { Bike } from "./Bike";
function App() {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    return <Signin />
  }
  return (
    <div>

      <BrowserRouter>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/home">
            <Profile />
          </Route>
          <Route path="/tab">
            <Tabs />
          </Route>
          <Route path="/bike">
            <Bike />
          </Route>

          <Route path="/btn">
            <Button className="small">Login</Button>
          </Route>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;