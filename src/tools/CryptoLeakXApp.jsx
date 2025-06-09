import React, { useEffect, useState } from "react";

export default function CryptoLeakXApp() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc")
      .then((res) => res.json())
      .then((data) => {
        setCoins(data.slice(0, 10));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="bg-black text-yellow-300 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-red-600 mb-6">🔥 CryptoLeakX™ Tracker 🔥</h1>
      {loading ? (
        <p className="text-red-500">Chargement des données...</p>
      ) : (
        <table className="w-full table-auto border border-yellow-400">
          <thead>
            <tr className="text-yellow-200 bg-red-900">
              <th className="p-2">Nom</th>
              <th className="p-2">Prix ($)</th>
              <th className="p-2">Variation 24h</th>
              <th className="p-2">Score</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr key={coin.id} className="text-center hover:bg-red-800">
                <td className="p-2">{coin.name}</td>
                <td className="p-2">${coin.current_price.toFixed(2)}</td>
                <td
                  className={`p-2 ${
                    coin.price_change_percentage_24h >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td className="p-2">
                  {Math.round(
                    (coin.market_cap_rank * 100) / coin.market_cap
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
