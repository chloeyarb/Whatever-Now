import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Feed from "./pages/Feed";
import Account from "./pages/Account";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
      <Account />
      <Feed />
      <Footer />
    </div>
  );
}

export default App;
