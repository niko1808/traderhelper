import { CONFIG } from '../core/config.js';
import { reconnectMarket } from '../data/websocket.js';

document.querySelectorAll('[data-tf]').forEach(btn => {
  btn.addEventListener('click', () => {
    const tf = btn.dataset.tf;

    console.log('Temporalidad:', tf);

    CONFIG.timeframe = tf;
    reconnectMarket();
  });
});
