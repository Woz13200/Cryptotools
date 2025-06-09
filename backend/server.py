from flask import Flask, request, jsonify
import requests

app = Flask(__name__)
SOLANA_RPC = "https://api.mainnet-beta.solana.com"

@app.route('/api/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    wallet = data.get("wallet")
    payload = {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "getBalance",
        "params": [wallet]
    }
    try:
        response = requests.post(SOLANA_RPC, json=payload)
        result = response.json()["result"]
        balance_sol = result["value"] / 1e9
        return jsonify({
            "wallet": wallet,
            "balance": f"{balance_sol:.6f} SOL",
            "status": "success"
        })
    except Exception as e:
        return jsonify({"error": str(e), "status": "error"}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
