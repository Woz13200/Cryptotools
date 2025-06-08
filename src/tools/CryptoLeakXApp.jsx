import React, { useState } from "react";

export default function CryptoLeakXApp() {
  const [unlocked, setUnlocked] = useState(false);
  const [code, setCode] = useState("");

  const checkPromo = () => {
    if (code.trim().toLowerCase() === "mohammedfree") {
      setUnlocked(true);
    } else {
      alert("Code promo invalide !");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-black text-red-500 p-4">
      <h1 className="text-4xl font-bold mb-4 text-yellow-400">CryptoLeakX - Intelligence Crypto Suprême</h1>
      {!unlocked ? (
        <>
          <p className="mb-4 text-white">Veuillez entrer votre code promo pour accéder à l’outil :</p>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Code promo"
            className="p-2 border border-yellow-500 rounded mb-4"
          />
          <button onClick={checkPromo} className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">
            Valider
          </button>
        </>
      ) : (
        <div className="text-white">
          <h2 className="text-2xl mb-2 text-red-400">Bienvenue !</h2>
          <p className="mb-4">Analyse en cours des tendances crypto en temps réel...</p>
          <ul className="list-disc list-inside">
            <li>Analyse de portefeuilles</li>
            <li>Alertes coins dormants</li>
            <li>Graphiques intelligents</li>
            <li>Recommandations IA</li>
          </ul>
        </div>
      )}
    </div>
  );
}
