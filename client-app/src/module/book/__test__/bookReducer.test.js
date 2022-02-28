import bookReducer, { INITIAL_BOOK_REDUCER_STATE } from '../bookReducer';


describe('bookReducer', () => {
    it('shoud return right new state', () => {
        const action = {
            type: 'BOOKLIST',
            payload: [{
                id: 1,
                title: 'test title',
                description: 'des',
                releaseYear: 2022
            }]
        }

        const newState = bookReducer(INITIAL_BOOK_REDUCER_STATE, action);

        expect(newState).toEqual({
            books: [{
                id: 1,
                title: 'test title',
                description: 'des',
                releaseYear: 2022
            }]    
        })
    })
})

