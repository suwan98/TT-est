export const shuffleArray = (array) => {
  return array.toSorted(() => Math.random() - 0.5);
};
