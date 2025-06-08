import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    setLoading(true);
    setTimeout(() => {
      setSubscribed(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-800 text-white px-4 py-12 animate-pulse">
      <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-400 to-pink-500 drop-shadow-[0_0_15px_rgba(255,0,0,0.7)]">
          CryptoLeakX™ Market
        </h1>
        <p className="mt-6 text-lg md:text-2xl max-w-2xl mx-auto text-gray-300 animate-fade-in">
          L’intelligence prédictive crypto qui voit avant les autres. Un seul paiement. Zéro abonnement. Accès immédiat.
        </p>
      </motion.div>

      <main className="max-w-4xl mx-auto grid gap-8">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
          <div className="bg-black/60 rounded-3xl shadow-[0_0_25px_rgba(255,215,0,0.3)] border border-yellow-500 p-8 text-center">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-6">🚀 Acheter CryptoLeakX™ Premium</h2>

            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" className="space-y-4">
              <input type="hidden" name="cmd" value="_xclick" />
              <input type="hidden" name="business" value="mozzarab13@gmail.com" />
              <input type="hidden" name="item_name" value="CryptoLeakX Premium Lifetime" />
              <input type="hidden" name="amount" value="49.00" />
              <input type="hidden" name="currency_code" value="EUR" />
              <button className="bg-gradient-to-br from-yellow-300 to-yellow-500 hover:from-yellow-400 hover:to-yellow-600 transition-all duration-300 text-black font-bold py-3 px-8 rounded-xl text-lg shadow-lg w-full">
                💳 Payer par Carte ou PayPal
              </button>
            </form>

            <p className="text-xs text-gray-400 mt-3 italic">
              Paiement sécurisé. Pas besoin de compte PayPal.
            </p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-center">
          <p className="text-sm text-gray-400">✔️ Accès unique & immédiat — aucune récurrence. ✔️ Produit 100% numérique livré automatiquement.</p>
        </motion.div>
      </main>

      <footer className="mt-24 text-center text-gray-500 text-sm pt-6 border-t border-gray-800">
        © 2025 CryptoLeakX. Design cosmique et évolutif par Latifa AI.
      </footer>
    </div>
  );
}
