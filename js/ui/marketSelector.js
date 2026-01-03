import { getMarkets } from '../data/marketService.js';
import { mapMarkets } from '../data/marketMapper.js';
import { loadChart } from '../data/loader.js';
import { candleSeries } from '../chart/chartsInit.js';
import { appState } from '../state/state.js';

const marketSelect = document.getElementById('marketSelect');
const symbolSelect = document.getElementById('symbolSelect');

let markets = {};

async function initMarkets() {
  const symbols = await getMarkets();
  markets = mapMarkets(symbols);

  Object.keys(markets).forEach(market => {
    const opt = document.createElement('option');
    opt.value = market;
    opt.textContent = market.toUpperCase();
    marketSelect.appendChild(opt);
  });

  loadSymbols(marketSelect.value);
}

function loadSymbols(market) {
  symbolSelect.innerHTML = '';

  markets[market].forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.symbol;
    opt.textContent = `${s.base}/${s.quote}`;
    symbolSelect.appendChild(opt);
  });

  appState.symbol = markets[market][0].symbol;
}

marketSelect.addEventListener('change', () => {
  loadSymbols(marketSelect.value);
  loadChart(appState.symbol, appState.timeframe, candleSeries);
});

symbolSelect.addEventListener('change', () => {
  appState.symbol = symbolSelect.value;
  loadChart(appState.symbol, appState.timeframe, candleSeries);
});

initMarkets();
