// utils/formatPrice.ts
export const formatPrice = (
  amount: number,
  currency: string = "EUR",
  locale: string = "en-EUR"
): string => {
  if (isNaN(amount)) {
    throw new Error("Amount must be a valid number");
  }

  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  });

  return formatter.format(amount);
};
