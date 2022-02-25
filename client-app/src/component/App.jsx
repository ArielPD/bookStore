import axios from "axios";
import baseUrl from "../config";

export default function App() {

    axios.get(`${baseUrl}/api/v1/books`).then(book => {
        console.log(book.data);
    })

    return (
        <div>My first component test</div>
        )
  }