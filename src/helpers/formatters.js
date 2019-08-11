export function formatNumberToK(amount = 0) {
  return Number(amount) >= 1000 ? `${Math.floor(amount / 1000)}k` : Number(amount).toString();
}
