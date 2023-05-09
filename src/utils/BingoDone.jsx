export default function bingoDone(selectedCardIndex, stopConfetti) {
  let bingo;
  if (
    selectedCardIndex.includes(0) &&
    selectedCardIndex.includes(5) &&
    selectedCardIndex.includes(10) &&
    selectedCardIndex.includes(15) &&
    selectedCardIndex.includes(20)
  ) {
    bingo = true;
  }
  if (
    selectedCardIndex.includes(1) &&
    selectedCardIndex.includes(6) &&
    selectedCardIndex.includes(11) &&
    selectedCardIndex.includes(16) &&
    selectedCardIndex.includes(21)
  ) {
    bingo = true;
  }
  if (
    selectedCardIndex.includes(2) &&
    selectedCardIndex.includes(7) &&
    selectedCardIndex.includes(12) &&
    selectedCardIndex.includes(17) &&
    selectedCardIndex.includes(22)
  ) {
    bingo = true;
  }
  if (
    selectedCardIndex.includes(3) &&
    selectedCardIndex.includes(8) &&
    selectedCardIndex.includes(13) &&
    selectedCardIndex.includes(18) &&
    selectedCardIndex.includes(23)
  ) {
    bingo = true;
  }
  if (
    selectedCardIndex.includes(4) &&
    selectedCardIndex.includes(9) &&
    selectedCardIndex.includes(14) &&
    selectedCardIndex.includes(19) &&
    selectedCardIndex.includes(24)
  ) {
    bingo = true;
  }
  if (
    selectedCardIndex.includes(0) &&
    selectedCardIndex.includes(6) &&
    selectedCardIndex.includes(12) &&
    selectedCardIndex.includes(18) &&
    selectedCardIndex.includes(24)
  ) {
    bingo = true;
  }
  if (
    selectedCardIndex.includes(4) &&
    selectedCardIndex.includes(8) &&
    selectedCardIndex.includes(12) &&
    selectedCardIndex.includes(16) &&
    selectedCardIndex.includes(20)
  ) {
    bingo = true;
  }
  if (
    selectedCardIndex.includes(0) &&
    selectedCardIndex.includes(1) &&
    selectedCardIndex.includes(2) &&
    selectedCardIndex.includes(3) &&
    selectedCardIndex.includes(4)
  ) {
    bingo = true;
  }
  if (
    selectedCardIndex.includes(5) &&
    selectedCardIndex.includes(6) &&
    selectedCardIndex.includes(7) &&
    selectedCardIndex.includes(8) &&
    selectedCardIndex.includes(9)
  ) {
    bingo = true;
  }
  if (
    selectedCardIndex.includes(10) &&
    selectedCardIndex.includes(11) &&
    selectedCardIndex.includes(12) &&
    selectedCardIndex.includes(13) &&
    selectedCardIndex.includes(14)
  ) {
    bingo = true;
  }
  if (
    selectedCardIndex.includes(15) &&
    selectedCardIndex.includes(16) &&
    selectedCardIndex.includes(17) &&
    selectedCardIndex.includes(18) &&
    selectedCardIndex.includes(19)
  ) {
    bingo = true;
  }
  if (
    selectedCardIndex.includes(20) &&
    selectedCardIndex.includes(21) &&
    selectedCardIndex.includes(23) &&
    selectedCardIndex.includes(24) &&
    selectedCardIndex.includes(25)
  ) {
    bingo = true;
  }
  return bingo;
}
