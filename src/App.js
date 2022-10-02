import logo from './logo.svg';
import React, {useState, useEffect } from 'react';

import database from './firebase';


import './App.css';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Products from './components/Products';
import Footer from './components/Footer';



// Initialize Firebase


function App() {

  
  const [count,setCount]=useState(0);
  

  const handleClick = () => {
    setCount(count => count + 1);
  };
  
  // fetch('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json')
  // .then(response => response.json())
  // .then(data => {
  //   console.table(data);
    
    
  // });

 

  return (
    <div className="App">  
     
     
     <Navbar count={count}/>
     <Container/>
     <Products handleClick={handleClick}/>
      <Footer />

        
    </div>
  );
}

export default App;
