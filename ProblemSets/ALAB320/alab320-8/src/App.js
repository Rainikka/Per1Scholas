import "./App.css";

// Import Route and our components

import { Route, Routes } from 'react-router-dom'

import Currencies from '../src/Pages/Currencies';
import Main from '../src/Pages/Main';
import Price from '../src/Pages/Price';
// import Nav from '../src/Pages/Currencies'

export default function App() {
  // We will use the Route component, path attribute
  return (
    <div className="App">
      <Routes>
        <Route path="./Pages/Main.js" element={<Main />} />
        <Route path="./Pages/Currencies.js" element={<Currencies />} />
        <Route path="./Pages/Price.js:symbol" element={<Price />} />
      </Routes >
    </div >
  );
}