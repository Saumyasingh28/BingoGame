export default function bingoDone(selectedCardIndex, boardSize) {
  let result = 0;
  let i, j;
  for (i = 0; i < boardSize * boardSize; i += boardSize) {
    let flag = true;
    for (j = i; j < i + boardSize; j++) {
      if (!selectedCardIndex.includes(j)) {
        flag = false;
      }
    }
    if (flag) {
      result++;
    }
  }
  for (i = 0; i < boardSize; i++) {
    let flag = true;
    for (j = i; j < i + boardSize * boardSize; j += boardSize) {
      if (!selectedCardIndex.includes(j)) {
        flag = false;
      }
    }
    if (flag) {
      result++;
    }
  }
  let flag = true;
  for (i = 0; i < boardSize * boardSize; i = i + boardSize + 1) {
    if (!selectedCardIndex.includes(i)) {
      flag = false;
    }
  }
  if (flag) {
    result++;
  }
  flag = true;
  for (
    i = boardSize - 1;
    i < boardSize * boardSize - 1;
    i = i + boardSize - 1
  ) {
    if (!selectedCardIndex.includes(i)) {
      flag = false;
    }
  }
  if (flag) {
    result++;
  }
  return result;
}
