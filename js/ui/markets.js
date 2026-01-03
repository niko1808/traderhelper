import { loadChart } from '../data/loader.js';
import { candleSeries } from '../chart/chartsInit.js';

let currentMarket = 'USDT';

export function initMarkets(symbols) {
  const markets = {};

  symbols.forEach(s => {
    if (!markets[s.quote]) markets[s.quote] = [];
    markets[s.quote].push(s.symbol);
  });

  console.log('📊 Mercados disponibles:', Object.keys(markets));

  currentMarket = Object.keys(markets)[0];

  loadChart(markets[currentMarket][0], '1m', candleSeries);
}
