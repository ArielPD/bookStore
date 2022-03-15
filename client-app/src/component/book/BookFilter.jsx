import { useState} from "react";
import {useDispatch} from 'react-redux'; 
import { Button, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { bookStyles } from './BookStyles'
import { getBooksByTitle } from "../../module/book/bookAction";

export default function BookFilter() {
    
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();

    const handlerSearchChange = (event) => {
        setSearchText(event.target.value)
    }

    const searchHandler = () => {
        dispatch(getBooksByTitle(searchText));
    }

    return (
        <Box style={bookStyles.bookFilter}>
            <Paper style={bookStyles.bookFilterPaper}>
                <Typography>Search Book Filters</Typography>
                <Box paddingTop={3} marginBottom={2}>
                    <TextField
                        placeholder='Enter book title'
                        id='book-search'
                        data-testid='book-title-input'
                        label='Enter book title'
                        variant='outlined'
                        value={searchText}
                        onChange={event => handlerSearchChange(event)}
                    />
                </Box>
                <Button variant='contained' color='primary' onClick={searchHandler}>
                    Search
                </Button>
            </Paper>
        </Box>
    );
}