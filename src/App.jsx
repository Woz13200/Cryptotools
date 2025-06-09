import { useState } from 'react';

function App() {
  const [wallet, setWallet] = useState('');
  const [result, setResult] = useState(null);
  const [promo, setPromo] = useState('');

  const checkWallet = async () => {
    if (promo !== 'MOZFREE100') {
      setResult({ error: 'Code promo invalide.' });
      return;
    }
    const res = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ wallet }),
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="min-h-screen bg-black text-yellow-300 p-4">
      <h1 className="text-red-600 text-3xl mb-4">CryptoLeakX 🔥</h1>
      <input
        className="bg-gray-900 text-white p-2 rounded mb-2 block"
        placeholder="Wallet Phantom"
        onChange={(e) => setWallet(e.target.value)}
      />
      <input
        className="bg-gray-900 text-white p-2 rounded mb-4 block"
        placeholder="Code Promo"
        onChange={(e) => setPromo(e.target.value)}
      />
      <button onClick={checkWallet} className="bg-red-600 text-white p-2 rounded">
        Vérifier
      </button>
      {result && (
        <div className="mt-4">
          {result.error ? (
            <p className="text-red-400">{result.error}</p>
          ) : (
            <pre>{JSON.stringify(result, null, 2)}</pre>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
