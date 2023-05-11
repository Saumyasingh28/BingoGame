export default function bingoDone(selectedCardIndex) {
  let result = 0;
  if (
    selectedCardIndex.includes(0) &&
    selectedCardIndex.includes(5) &&
    selectedCardIndex.includes(10) &&
    selectedCardIndex.includes(15) &&
    selectedCardIndex.includes(20)
  ) {
    result++;
  }
  if (
    selectedCardIndex.includes(1) &&
    selectedCardIndex.includes(6) &&
    selectedCardIndex.includes(11) &&
    selectedCardIndex.includes(16) &&
    selectedCardIndex.includes(21)
  ) {
    result++;
  }
  if (
    selectedCardIndex.includes(2) &&
    selectedCardIndex.includes(7) &&
    selectedCardIndex.includes(12) &&
    selectedCardIndex.includes(17) &&
    selectedCardIndex.includes(22)
  ) {
    result++;
  }
  if (
    selectedCardIndex.includes(3) &&
    selectedCardIndex.includes(8) &&
    selectedCardIndex.includes(13) &&
    selectedCardIndex.includes(18) &&
    selectedCardIndex.includes(23)
  ) {
    result++;
  }
  if (
    selectedCardIndex.includes(4) &&
    selectedCardIndex.includes(9) &&
    selectedCardIndex.includes(14) &&
    selectedCardIndex.includes(19) &&
    selectedCardIndex.includes(24)
  ) {
    result++;
  }
  if (
    selectedCardIndex.includes(0) &&
    selectedCardIndex.includes(6) &&
    selectedCardIndex.includes(12) &&
    selectedCardIndex.includes(18) &&
    selectedCardIndex.includes(24)
  ) {
    result++;
  }
  if (
    selectedCardIndex.includes(4) &&
    selectedCardIndex.includes(8) &&
    selectedCardIndex.includes(12) &&
    selectedCardIndex.includes(16) &&
    selectedCardIndex.includes(20)
  ) {
    result++;
  }
  if (
    selectedCardIndex.includes(0) &&
    selectedCardIndex.includes(1) &&
    selectedCardIndex.includes(2) &&
    selectedCardIndex.includes(3) &&
    selectedCardIndex.includes(4)
  ) {
    result++;
  }
  if (
    selectedCardIndex.includes(5) &&
    selectedCardIndex.includes(6) &&
    selectedCardIndex.includes(7) &&
    selectedCardIndex.includes(8) &&
    selectedCardIndex.includes(9)
  ) {
    result++;
  }
  if (
    selectedCardIndex.includes(10) &&
    selectedCardIndex.includes(11) &&
    selectedCardIndex.includes(12) &&
    selectedCardIndex.includes(13) &&
    selectedCardIndex.includes(14)
  ) {
    result++;
  }
  if (
    selectedCardIndex.includes(15) &&
    selectedCardIndex.includes(16) &&
    selectedCardIndex.includes(17) &&
    selectedCardIndex.includes(18) &&
    selectedCardIndex.includes(19)
  ) {
    result++;
  }
  if (
    selectedCardIndex.includes(20) &&
    selectedCardIndex.includes(21) &&
    selectedCardIndex.includes(23) &&
    selectedCardIndex.includes(24) &&
    selectedCardIndex.includes(25)
  ) {
    result++;
  }
  return result;
}
