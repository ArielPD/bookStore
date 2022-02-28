import axios from "axios";
import baseUrl from "../config";
import BookContainer from "./book/BookContainer";
import Layout from "./layout/Layout";

export default function App() {

    /*axios.get(`${baseUrl}/api/v1/books`).then(book => {
        console.log(book.data);
    })*/

    return (
        <Layout>
            <BookContainer />
        </Layout>
        )
  }