export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const currencyFormatter = new Intl.NumberFormat("es-ES", {
  currency: "EUR",
  maximumFractionDigits: 0,
  style: "currency",
});

export const dateFormatter = new Intl.DateTimeFormat("es-ES", {
  day: "2-digit",
  month: "short",
});

export function formatCurrency(value: number) {
  return currencyFormatter.format(value);
}
