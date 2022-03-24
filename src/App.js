import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import WarningSign from "./components/WarningSign";

import { Component } from "react";

import Registration from "./components/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavBar from "./components/MyNavBar";
import HomePage from "./components/HomePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <WarningSign message="welcome to the book store" />
          <MyNavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Registration />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
