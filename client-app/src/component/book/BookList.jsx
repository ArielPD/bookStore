import { Box } from "@mui/material";
import PropTypes from "prop-types";
import BookListItem from "./BookListItem";
import { bookStyles } from "./BookStyles";

const propTypes = {
    books: PropTypes.arrayOf({
        id: PropTypes.string.isRequered,
        title: PropTypes.string.isRequered,
        description: PropTypes.string.isRequered,
        releaseYear: PropTypes.number.isRequered
    }).isRequired
}

export default function BookList({books}) {

    return(
        <Box style={bookStyles.BookList} ml={5}>
            {books.map((book) => (
                <BookListItem key={book.id}  book={book}/>
            ))}
        </Box>
    )
}
BookList.propTypes = propTypes;

