import React from "react";
import "./App.scss";
import Header from "./components/layout/header/Header";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/layout/footer/Footer";
import Projects from "./components/projects/Projects";
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
