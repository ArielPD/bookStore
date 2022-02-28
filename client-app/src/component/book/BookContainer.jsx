import { dividerClasses, Paper } from "@mui/material";
import { Box } from "@mui/system";
import BookFilter from "./BookFilter";
import { bookStyles } from "./BookStyles";

export default function BookContainer() {

    return(
      <Box style={bookStyles.bookContainer}>
          <BookFilter />
          <Box style={bookStyles.bookList}>
              Here we  will display all books.
          </Box>
      </Box>  
    )
}