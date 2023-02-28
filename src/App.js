import axios from "axios";
import { TableCoins } from "./components/TableCoins";

import React, {useState,useEffect} from "react"

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoins(res.data);
      
    } catch (error) {
      
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
    <h1>Coin Market App Nguyen 2023</h1>
    <input type="text" placeholder="Search a coin BTC or ETH ..." className="form-control bg-darm text-darm border-0
    mt-4 text-center" onChange={e => setSearch(e.target.value)}></input>
    <div><TableCoins coins={coins} search={search} /></div>
    </div>
    </div>
  )
}

export default App;
