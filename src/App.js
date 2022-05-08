import React from 'react';
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import BannerImage from "../src/asseta/gros.jpg";
import "./App.css"


function App() {
  var bg = [
    'rgba(255,0,0,0.3)',
    'rgba(0,255,0,0.3)',
    'rgba(0,0,255,0.3)'
  ];

  
  var br2 =
  bg[Math.floor(Math.random() * (bg.length + 1))];

  return (
    <div className="App">
      
      <div className='test' 
      style={{ backgroundImage: `url(${BannerImage})`}}>
        <div className="colorT"  style={{backgroundColor: br2}}>
   <Home />
   <Footer />
   </div>
    </div>
  </div>

  );
}

export default App;
