import axios from 'axios';
import baseurl from '../../config';

export const getBooksService = () => axios.get(`${baseurl}/api/v1/books/list`);

export const getBooksByTitleService = (title) => axios.get(`${baseurl}/api/v1/books/${title}`);