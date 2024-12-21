// src/App.js
import React from 'react';
import ProductList from './components/ProductList';
import './styles/ProductList.css';

const App = () => {
  return (
    <div className="App">
      <h1>Paradise Nursery</h1>
      <ProductList />
    </div>
  );
};

export default App;
