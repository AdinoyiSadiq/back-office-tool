export function formatPrice(naira) {
  return `${(naira / 100).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}
