import axios from 'axios';
import baseurl from '../../config';

const getBooksService = () => axios.get(`${baseurl}/api/v1/books/list`);

export default getBooksService;