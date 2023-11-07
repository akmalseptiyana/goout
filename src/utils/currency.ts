import currency from "currency.js";

export function currencyToUSD(value: any) {
  return currency(value, {
    symbol: "$",
    decimal: ",",
    separator: ".",
  });
}

export const formatValueToCurrency = (value: number | null | undefined) => {
  return currencyToUSD(value).format();
};
