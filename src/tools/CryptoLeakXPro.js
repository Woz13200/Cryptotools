#!/usr/bin/env node

import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import bs58 from "bs58";

const endpoint = clusterApiUrl("mainnet-beta");
const conn = new Connection(endpoint, "confirmed");

export async function checkBalance(address) {
  const pubKey = new PublicKey(address);
  const balance = await conn.getBalance(pubKey);
  return balance / 1e9;
}

export async function getTokenAccounts(address) {
  const pubKey = new PublicKey(address);
  const tokens = await conn.getParsedTokenAccountsByOwner(pubKey, {
    programId: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
  });
  return tokens.value.map(t => ({
    mint: t.account.data.parsed.info.mint,
    amount: t.account.data.parsed.info.tokenAmount.uiAmount
  }));
}
