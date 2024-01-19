import React from 'react';
import './App.css';
import {Header} from './components/Header';
import { MainPage } from './components/MainPage';
import Footer from './components/Footer';
import {Catalogue} from './components/Catalogue';


function App() {
  return (
    <div className="App">
      <Header />
      <Catalogue/>
      <Footer />
    </div>
  );
}

export default App;