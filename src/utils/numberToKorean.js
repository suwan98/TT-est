function numberToKorean(n, units = []) {
  return n <= 5 ? units[n - 1] : n.toString();
}

export default numberToKorean;
