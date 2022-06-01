import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Home />
    </div>
  );
}

export default App;
