import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';
const api = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});

const toUpperCase = (word: string): string => {
  const newWord = word.charAt(0).toUpperCase() + word.slice(1);
  return newWord;
};

const createUUID = (): string => crypto.randomUUID();

export { baseURL, toUpperCase, api, createUUID };
