import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Feed from "./pages/Feed";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Feed />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
