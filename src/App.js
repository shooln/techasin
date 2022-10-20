import React from 'react'

import { Footer, Blog, Services, Support, Contact, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => (
  <div className="App">
          <ellipses>
            <ellipses1></ellipses1>
            <ellipses2></ellipses2>
            <ellipses3></ellipses3>
            <ellipses4></ellipses4>
          </ellipses>
    <div className="main__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <Services />
    <Support />
    <Contact />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App