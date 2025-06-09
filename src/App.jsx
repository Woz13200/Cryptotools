import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then(res => res.json())
      .then(coins => {
        const tracked = ['bitcoin', 'ethereum', 'tether', 'ripple', 'binancecoin', 'solana', 'usd-coin', 'dogecoin', 'tron', 'cardano'];
        const filtered = coins.filter(c => tracked.includes(c.id));
        setData(filtered);
      });
  }, []);

  return (
    <div className="min-h-screen bg-black text-yellow-400 p-4">
      <h1 className="text-3xl font-bold text-red-600 mb-4">🔥 CryptoLeakX™ Tracker 🔥</h1>
      <table className="w-full border text-sm">
        <thead className="bg-red-900 text-yellow-300">
          <tr>
            <th className="p-2 border">Nom</th>
            <th className="p-2 border">Prix ($)</th>
            <th className="p-2 border">Variation 24h</th>
          </tr>
        </thead>
        <tbody>
          {data.map(coin => (
            <tr key={coin.id} className="text-center border-b">
              <td className="p-2">{coin.name}</td>
              <td className="p-2">${coin.current_price.toLocaleString()}</td>
              <td className={`p-2 ${coin.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {coin.price_change_percentage_24h?.toFixed(2)} %
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
