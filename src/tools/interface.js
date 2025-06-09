import { checkBalance, getTokenAccounts } from "./CryptoLeakXPro.js";

window.load = async () => {
  const address = document.getElementById("address").value;
  const balance = await checkBalance(address);
  const tokens = await getTokenAccounts(address);
  const output = `Solde: ${balance} SOL\n\nTokens:\n` +
    tokens.map(t => `${t.mint}: ${t.amount}`).join("\n");
  document.getElementById("output").textContent = output;
};
