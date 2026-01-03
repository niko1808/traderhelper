import { initChart, candleSeries } from '../chart/chartsInit.js';
import { loadChart } from '../data/loader.js';

initChart(document.getElementById('chart-container'));

loadChart('BTCUSDT', '1m', candleSeries);


const donateBtn = document.getElementById('donateBtn');
const donateModal = document.getElementById('donateModal');
const closeDonate = document.getElementById('closeDonate');

const welcomeModal = document.getElementById('welcomeModal');
const acceptWelcome = document.getElementById('acceptWelcome');

donateBtn.addEventListener('click', () => {
  donateModal.classList.remove('hidden');
});

closeDonate.addEventListener('click', () => {
  donateModal.classList.add('hidden');
});

acceptWelcome.addEventListener('click', () => {
  welcomeModal.classList.add('hidden');
});

const betaModal = document.getElementById('betaModal');
const closeBeta = document.getElementById('closeBeta');

// Mostrar beta al iniciar
window.addEventListener('load', () => {
  betaModal.classList.remove('hidden');
});

closeBeta.addEventListener('click', () => {
  betaModal.classList.add('hidden');
});
