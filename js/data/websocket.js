// NO importar candleSeries acá
// NO usar CONFIG global

export function connectWS(symbol, interval, series) {
  const socket = new WebSocket(
    `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_${interval}`
  );

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (!data.k) return;

    const k = data.k;

    series.update({
      time: Math.floor(k.t / 1000),
      open: +k.o,
      high: +k.h,
      low: +k.l,
      close: +k.c
    });
  };

  return socket;
}
