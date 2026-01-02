import { getHistorical } from './historical.js';
import { connectWS } from './websocket.js';

let socket;

export async function loadChart(symbol, interval, series) {
  if (socket) socket.close();

  const history = await getHistorical(symbol, interval);
  series.setData(history);

  socket = connectWS(symbol, interval, series);
}
