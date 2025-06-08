import requests
import pandas as pd
import time

def get_price(symbol="BTCUSDT"):
    url = f"https://api.binance.com/api/v3/ticker/price?symbol={symbol}"
    data = requests.get(url).json()
    return float(data["price"])

def detect_trend(prices):
    if prices[-1] > prices[-2] > prices[-3]:
        return "📈 UP"
    elif prices[-1] < prices[-2] < prices[-3]:
        return "📉 DOWN"
    else:
        return "⏸ STABLE"

prices = []

print("🔁 Tracking BTC/USDT on Binance...")
while True:
    price = get_price()
    prices.append(price)
    if len(prices) > 3:
        trend = detect_trend(prices[-3:])
        print(f"Prix actuel: {price:.2f} USDT — Tendance: {trend}")
    else:
        print(f"Prix actuel: {price:.2f} USDT")
    time.sleep(10)
