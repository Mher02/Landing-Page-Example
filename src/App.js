import { useRef } from "react";
import NavBar from "./components/header/navBar/NavBar";
import Head from "./components/header/head/Head";
import Carusel from "./components/carusel/Carusel";
import About from "./components/about/About";
import Results from "./components/result/Results";
import WhatIs from "./components/whatis/WhatIs";
import Footer from "./components/footer/Footer";
import End from "./components/end/End";
import "./style.scss"

function App() {

  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === 1) {
      firstSectionRef.current.scrollIntoView();
    }
    else if (section === 2) {
      secondSectionRef.current.scrollIntoView();
    }
  }

  return (
    <div className="App">
      <NavBar scrollToSection={scrollToSection} />
      <Head />
      <Carusel />
      <About sectionRef={firstSectionRef} />
      <Results />
      <About sectionRef={secondSectionRef} />
      <WhatIs />
      <Footer />
      <End />
    </div>
  );
}

export default App;
