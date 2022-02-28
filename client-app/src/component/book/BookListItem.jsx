
import { Box, Paper, Avatar, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { bookStyles } from "./BookStyles";

const propTypes = {
    book: PropTypes.shape(
        {
        id: PropTypes.string.isRequered,
        title: PropTypes.string.isRequered,
        description: PropTypes.string.isRequered,
        releaseYear: PropTypes.number.isRequered
        }
    ).isRequired,
} 

export default function BookListItem({book}) {
    return(
        <Box mb={2}>
            <Paper elevation={2} style={bookStyles.bookListItemPaper}>
                <Avatar variant="square" style={bookStyles.bookImage}>
                    {book.title}
                </Avatar>
                <Box ml={1}>
                    <Typography variant="h5">{book.title}</Typography>
                    <Typography>{book.description}</Typography>
                    <Typography>{book.releaseYear}</Typography>
                </Box>
            </Paper>
        </Box>
    );
}
BookListItem.propTypes = propTypes;