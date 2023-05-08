export default function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    if (i !== 12) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      if (j !== 12) {
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
