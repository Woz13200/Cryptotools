import React, { useState } from 'react';

export default function Home() {
  const [promoCode, setPromoCode] = useState('');
  const [promoValid, setPromoValid] = useState(false);

  const handleCheckPromo = () => {
    if (promoCode === 'MOHAMMED100') {
      setPromoValid(true);
    } else {
      alert('❌ Code promo invalide');
    }
  };

  return (
    <div className="min-h-screen bg-black text-yellow-400 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">CryptoLeakX Premium</h1>
      <p className="mb-6 text-lg">L’outil ultime pour anticiper les mouvements du Bitcoin.</p>

      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" className="mb-6">
        <input type="hidden" name="cmd" value="_xclick" />
        <input type="hidden" name="business" value="mozzarab13@gmail.com" />
        <input type="hidden" name="item_name" value="CryptoLeakX Premium" />
        <input type="hidden" name="amount" value="12.00" />
        <input type="hidden" name="currency_code" value="EUR" />
        <input type="hidden" name="return" value="https://cryptotools.vercel.app/thank-you.html" />
        <button type="submit" className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-300">
          Acheter avec PayPal
        </button>
      </form>

      <div className="bg-gray-900 p-4 rounded-lg text-white">
        <h2 className="text-lg mb-2">🎁 J'ai un code promo</h2>
        <input
          type="text"
          placeholder="Entrez le code promo"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          className="text-black p-2 rounded mr-2"
        />
        <button
          onClick={handleCheckPromo}
          className="bg-red-600 px-4 py-2 rounded text-white font-bold hover:bg-red-500"
        >
          Valider
        </button>

        {promoValid && (
          <div className="mt-4">
            <a
              href="/downloads/cryptoleakx-premium.zip"
              download
              className="inline-block bg-yellow-500 text-black font-bold px-6 py-3 rounded hover:bg-yellow-400"
            >
              ✅ Télécharger Gratuitement
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
