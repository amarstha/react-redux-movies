import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Landing from "./components/home/Landing";
import Movie from "./components/home/Movie";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/movie/:id" component={Movie} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
