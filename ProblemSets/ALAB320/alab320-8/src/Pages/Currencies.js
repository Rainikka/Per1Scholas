import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Currencies(props) {
  const currencies = [
    { name: 'Bitcoin', symbol: "BTC" },
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Zcash", symbol: "ZEC" },
  ];

  return (
    <div className="currencies">
      {Currencies.map((coin) => {
        const { name, symbol } = coin;

        return (
          <Link to={`/price/${symbol}`}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  );
}


