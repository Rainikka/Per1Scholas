
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Price(props) {
  //Our api key from coinapi.io

  const apiKey = "D8544F59-2507-495B-BBB8-71B9CD4AAB99";
  // Grabbing the currency symbol from the URL 
  const params = useParams()
  const symbol = params.symbol

  // Using the other two variables to create our
  const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  // State to hold the coin data
  const [coin, setCoin] = useState("null");

  // Function to fetch coin data.
  const getCoin = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCoin(data);
    } catch (e) {
      console.error(e)
    }
  };

  // useEffect to run getCoin when component mount
  useEffect(() => {
    getCoin();
  }, []);

  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}</h1>
        <h2>{coin.rate}</h2>
      </div>
    )
  };


  // Function for when data doesn't exit
  const loading = () => {
    return <h1>Loading....</h1>;
  };

  // If coin has data, run the loaded function;
  return coin && coin.rate ? loaded() : loading()
}


