const baseURL = 'https://jsonplaceholder.typicode.com';

const toUpperCase = (word: string): string => {
  const newWord = word.charAt(0).toUpperCase() + word.slice(1);
  return newWord;
};

export { baseURL, toUpperCase };
