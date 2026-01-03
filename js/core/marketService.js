export async function getMarkets() {
  const res = await fetch('https://api.binance.com/api/v3/exchangeInfo');
  const data = await res.json();

  return data.symbols
    .filter(s => s.status === 'TRADING')
    .map(s => ({
      symbol: s.symbol,
      base: s.baseAsset,
      quote: s.quoteAsset
    }));
}
