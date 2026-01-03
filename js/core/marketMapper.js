export function mapMarkets(symbols) {
  return symbols.reduce((acc, s) => {
    if (!acc[s.quote]) {
      acc[s.quote] = [];
    }

    acc[s.quote].push(s);
    return acc;
  }, {});
}
