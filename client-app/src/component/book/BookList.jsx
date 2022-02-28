import { Box } from "@mui/material";
import PropTypes from "prop-types";
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
        <Box style={bookStyles.BookList}>
            {books.map((book) => (
                <div key={book.id}>{book.id}</div>
            ))}
        </Box>
    )
}
BookList.propTypes = propTypes;

