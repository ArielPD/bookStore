import { AppBar, Toolbar, Typography } from "@mui/material"; 

export default function Header() {
    return (
        <AppBar position="fixed">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit">
                    Book Store
                </Typography>
            </Toolbar>
        </AppBar>
    )
}