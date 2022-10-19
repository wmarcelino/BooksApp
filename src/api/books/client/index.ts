import axios from 'axios';
import {GOOGLE_API_KEY} from '../../../tokens';

const booksClient = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/',
  params: {
    key: GOOGLE_API_KEY,
  },
});

export default booksClient;
