import { initChart, candleSeries } from '../chart/chartsInit.js';
import { loadChart } from '../data/loader.js';

initChart(document.getElementById('chart-container'));

loadChart('BTCUSDT', '1m', candleSeries);
