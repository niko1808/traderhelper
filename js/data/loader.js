import { getHistorical } from './historical.js';
import { connectWS } from './websocket.js';
import { CONFIG } from '../core/config.js';

let socket;

export async function loadChart(symbol, interval, series) {
  if (socket) socket.close();

  // 🔹 sincronizar estado global
  CONFIG.symbol = symbol;
  CONFIG.timeframe = interval;
  CONFIG.market = symbol.replace(/^[A-Z]+/, '');

  const history = await getHistorical(symbol, interval);
  series.setData(history);

  socket = connectWS(symbol, interval, series);
}
