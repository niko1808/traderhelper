export let chart;
export let candleSeries;

export function initChart() {
  const container = document.getElementById('chart-container');

  chart = LightweightCharts.createChart(container, {
    width: container.clientWidth,
    height: container.clientHeight,
    layout: {
      background: { color: '#0b0e11' },
      textColor: '#d1d4dc'
    },
    grid: {
      vertLines: { color: '#1e222d' },
      horzLines: { color: '#1e222d' }
    },
    timeScale: {
      timeVisible: true,
      secondsVisible: false
    }
  });

  // ✅ API NUEVA
  candleSeries = chart.addSeries(
    LightweightCharts.CandlestickSeries,
    {
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderVisible: false,
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350'
    }
  );
}
