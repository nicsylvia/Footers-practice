import React from 'react';
import FooterDesign from './Components/FooterDesign';
import { GlobalStyle } from './Components/Globalstyle';
import Header from "./Components/Header";
import Hero from "./Components/Hero";


const App = () => {
  return (
    <div>

      <GlobalStyle />
      <Header />
      <Hero />
      <br />
      <br />
      <br />
      <br />
      <FooterDesign />
    </div>
  )
}

export default App