import { loadChart } from '../data/loader.js';
import { candleSeries } from '../chart/chartsInit.js';

const symbol = 'BTCUSDT';

document
  .querySelectorAll('.timeframes button[data-tf]')
  .forEach(btn => {
    btn.addEventListener('click', () => {
      const tf = btn.dataset.tf;

      console.log('🕒 Botón presionado:', tf);

      loadChart(symbol, tf, candleSeries);
    });
  });

