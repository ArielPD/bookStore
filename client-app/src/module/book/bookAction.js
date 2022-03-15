import getBooksService from "./bookService";

export const getBooksAction = () => async (dispatch) => {
    try {
        dispatch({type: 'BOOKLISTPENDING'});
        const books = await getBooksService();
        dispatch({
            type: 'BOOKLIST',
            payload: books.data
        })
        dispatch({type: 'BOOKLISTFULFILLED'});
    } catch(error) {
        console.log(error);
        dispatch({type: 'BOOKLISTERROR'});
    }
}


