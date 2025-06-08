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
    <div className="min-h-screen bg-black text-red-500 px-4 py-12">
      <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-[0_0_15px_rgba(255,0,0,0.7)]">
          CryptoLeakX™ Market
        </h1>
        <p className="mt-6 text-lg md:text-2xl max-w-2xl mx-auto text-yellow-300">
          L’intelligence prédictive crypto qui voit avant les autres. Un seul paiement. Zéro abonnement. Accès immédiat.
        </p>
      </motion.div>

      <main className="max-w-4xl mx-auto grid gap-8">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
          <div className="bg-gray-900 rounded-3xl border border-yellow-600 p-8 text-center shadow-md">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-6">🚀 Acheter CryptoLeakX™ Premium</h2>

            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" className="space-y-4">
              <input type="hidden" name="cmd" value="_xclick" />
              <input type="hidden" name="business" value="mozzarab13@gmail.com" />
              <input type="hidden" name="item_name" value="CryptoLeakX Premium Lifetime" />
              <input type="hidden" name="amount" value="49.00" />
              <input type="hidden" name="currency_code" value="EUR" />
              <button className="bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 text-black font-bold py-3 px-8 rounded-xl text-lg shadow w-full">
                💳 Payer par Carte ou PayPal
              </button>
            </form>

            <p className="text-xs text-yellow-300 mt-3 italic">
              Paiement sécurisé. Pas besoin de compte PayPal.
            </p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-center">
          <p className="text-sm text-yellow-300">✔️ Accès unique & immédiat — aucune récurrence. ✔️ Produit 100% numérique livré automatiquement.</p>
        </motion.div>
      </main>

      <footer className="mt-24 text-center text-yellow-500 text-sm pt-6 border-t border-gray-800">
        © 2025 CryptoLeakX. Design cosmique et évolutif par Latifa AI.
      </footer>
    </div>
  );
}
