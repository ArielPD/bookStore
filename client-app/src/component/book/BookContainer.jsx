import { dividerClasses, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getBooksAction from "../../module/book/bookAction";
import { getBooksSelector } from "../../module/book/bookSelector";
import BookFilter from "./BookFilter";
import { bookStyles } from "./BookStyles";

export default function BookContainer() {

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getBooksAction());
    },[dispatch])

    const books = useSelector(getBooksSelector);

    return(
      <Box style={bookStyles.bookContainer}>
          <BookFilter />
          <Box style={bookStyles.bookList}>
              Here we  will display all books.
              {
                  books && books.map(book=> (
                      <div key={book.id}>{book.title}</div>
                  ))
              }
          </Box>
      </Box>  
    )
}