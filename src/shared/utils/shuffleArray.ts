/** Return new random shuffled array */
export const shuffleArray = (arr: any[]) => {
  return JSON.parse(JSON.stringify(arr)).sort(() => Math.random() - 0.5);
};