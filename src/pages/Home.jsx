import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white p-6 md:p-12">
      <motion.header initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center mb-16">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-400">
          CryptoLeakX™ Market
        </h1>
        <p className="mt-4 text-xl max-w-3xl mx-auto text-gray-300">
          L’outil révolutionnaire IA pour détecter les insiders crypto avant qu’ils n’agissent.
        </p>
      </motion.header>

      <main className="max-w-4xl mx-auto space-y-8">
        <div className="bg-black/40 p-6 rounded-3xl shadow-xl border border-red-600">
          <h2 className="text-2xl font-bold mb-4">🔐 Acheter un accès immédiat</h2>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
            <input type="hidden" name="cmd" value="_xclick" />
            <input type="hidden" name="business" value="mozzarab13@gmail.com" />
            <input type="hidden" name="item_name" value="CryptoLeakX Premium" />
            <input type="hidden" name="amount" value="49.00" />
            <input type="hidden" name="currency_code" value="EUR" />
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-xl w-full">
              Acheter avec PayPal
            </button>
          </form>
        </div>
      </main>

      <footer className="mt-24 text-center text-gray-500 text-sm pt-6 border-t border-gray-700">
        © 2025 CryptoLeakX Market — Powered by Latifa IA
      </footer>
    </div>
  );
}
