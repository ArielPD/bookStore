import { Paper, Box } from "@mui/material";
import { Skeleton } from '@mui/lab';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getBooksAction from "../../module/book/bookAction";
import { getBooksSelector, getBookPromiseSelector } from "../../module/book/bookSelector";
import BookFilter from "./BookFilter";
import BookList from "./BookList";
import { bookStyles } from "./BookStyles";

export default function BookContainer() {

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getBooksAction());
    },[dispatch])

    const books = useSelector(getBooksSelector);
    const bookPromise = useSelector(getBookPromiseSelector);

    return(
      <Box style={bookStyles.bookContainer}>
          <BookFilter />
          <Box style={bookStyles.bookList}>
              { bookPromise.isPending && (
                <Box ml={5}>
                    <Skeleton data-testid="book-loader" variant="react" animation="pulse" width="80%" height={200} ml={2}/>
                </Box>  
                )}
              { bookPromise.isErrorOcurred && (
                   <div data-testid="book-error-message">Error message...</div>
              )}
             <BookList books={books}/> 
          </Box>
      </Box>  
    )
}