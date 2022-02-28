import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { bookStyles } from './BookStyles'

export default function BookFilter() {
    return (
        <Box style={bookStyles.bookFilter}>
            <Paper style={bookStyles.bookFilterPaper}>
                book filter
            </Paper>
        </Box>
    );
}