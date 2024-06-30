import { useState, useEffect } from "react";

function Coin() {
  const [loading, setLoading] = useState(true);
  const [coinArray, setCoinArray] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setCoinArray(json);
      });
  }, []);
  return (
    <div>
      <h1>Coin {coinArray.length}</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coinArray.map((coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Coin;
