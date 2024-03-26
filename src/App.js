import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Crm from "./components/Crm";
import Marketing from "./components/Marketing";
import Cases from "./components/Cases";
import Automation from "./components/Automation";
import Challenges from "./components/Challenges";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Crm />
      <Marketing />
      <Automation />
      <Cases />
      <Challenges />
      <Footer />
    </div>
  );
}

export default App;
